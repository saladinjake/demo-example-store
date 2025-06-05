import { useState, useEffect, useCallback } from "react";
import { fakeApi, Item, CreateItemPayload, UpdateItemPayload } from "../api/services/products.api";

export const useFakeApi = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchItems = useCallback(() => {
    setLoading(true);
    fakeApi
      .listItems({ search, page, pageSize })
      .then((res) => {
        setItems(res.data.items);
        setTotal(res.data.total);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [search, page, pageSize]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const createItem = async (payload: CreateItemPayload) => {
    try {
      setLoading(true);
      await fakeApi.createItem(payload);
      fetchItems();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (id: number, payload: UpdateItemPayload) => {
    try {
      setLoading(true);
      await fakeApi.updateItem(id, payload);
      fetchItems();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      setLoading(true);
      await fakeApi.deleteItem(id);
      fetchItems();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetData = () => {
    fakeApi.reset();
    fetchItems();
  };

  return {
    items,
    total,
    page,
    pageSize,
    search,
    loading,
    error,
    setPage,
    setSearch,
    refresh: fetchItems,
    resetData,
    createItem,
    updateItem,
    deleteItem,
  };
};
