
export type Item = {
  id?: number;
  name: string;
  description?: string;
  brand: string;
  thumbnail: string;
  price: string;
  shipping:number|string;
  discount: number| string
};

type AxiosResponse<T> = {
  data: T;
  status: number;
};

const STORAGE_KEY = "fakeApiItems";
export const defaultData: Item[] = [
  { id: 1, description: "Sample Description", name: "Rock Town T-shirt", thumbnail: "/images/products/f1.jpg", price: "22.44", brand: "Rock town", shipping: 2.22, discount:1 },
  { id: 2, description: "Sample Description", name: "Cardilac T-shirt", thumbnail: "/images/products/f2.jpg", price: "22.44", brand: "Mtv" ,shipping: 2.22, discount:1},
  { id: 3, description: "Sample Description", name: "Rosewell T-shirt", thumbnail: "/images/products/f3.jpg", price: "22.44", brand: "Roswell", shipping: 2.22, discount:1},
  { id: 4, description: "Sample Description", name: "Bonjo T-shirt", thumbnail: "/images/products/f4.jpg", price: "22.44", brand: "Bonjo" ,shipping: 2.22, discount:1},
  { id: 5, description: "Sample Description", name: "Dior T-shirt", thumbnail: "/images/products/f5.jpg", price: "22.44", brand: "Dior" ,shipping: 2.22, discount:1},
  { id: 6, description: "Sample Description", name: "Sven T-shirt", thumbnail: "/images/products/f6.jpg", price: "22.44", brand: "Sven",shipping: 2.22, discount:1 },
  { id: 7, description: "Sample Description", name: "Resses T-shirt", thumbnail: "/images/products/f7.jpg", price: "22.44", brand: "Resses" ,shipping: 2.22, discount:1},
  { id: 8, description: "Sample Description", name: "Jessklan T-shirt", thumbnail: "/images/products/f8.jpg", price: "22.44", brand: "Jess",shipping: 2.22, discount:1 },

]

export const fetchProducts = async () => await Promise.resolve(defaultData)

const loadData = (): Item[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [...defaultData];
};

let fakeData: Item[] = loadData();
const saveData = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeData));

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const simulateError = (chance = 0.05): void => {
  if (Math.random() < chance) throw new Error("Simulated network error");
};

export const fakeApi = {
  async listItems(params?: {
    search?: string;
    page?: number;
    pageSize?: number;
  }): Promise<AxiosResponse<{
    items: Item[];
    total: number;
    page: number;
    pageSize: number;
  }>> {
    await delay(400);
    simulateError();

    let items = [...fakeData];

    // Search
    if (params?.search) {
      const keyword = params.search.toLowerCase();
      items = items.filter((item: any) =>
        item.name.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
      );
    }

    const total = items.length;
    const page = params?.page ?? 1;
    const pageSize = params?.pageSize ?? 5;
    const start = (page - 1) * pageSize;
    const paginated = items.slice(start, start + pageSize);

    return {
      data: {
        items: paginated,
        total,
        page,
        pageSize,
      },
      status: 200,
    };
  },

  async getItem(id: number): Promise<AxiosResponse<Item>> {
    await delay(200);
    // simulateError();
    const item = fakeData.find((item) => item.id === id);
    if (!item) throw new Error("Item not found");
    return { data: item, status: 200 };
  },

  async createItem(data: Omit<Item, "id">): Promise<AxiosResponse<Item>> {
    await delay(300);
    // simulateError();
    const newItem: Item = { ...data, id: Date.now() };
    fakeData.push(newItem);
    saveData();
    return { data: newItem, status: 201 };
  },

  async updateItem(id: number, data: Omit<Item, "id">): Promise<AxiosResponse<Item>> {
    await delay(300);
    // simulateError();
    const index = fakeData.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Item not found");
    fakeData[index] = { ...data, id };
    saveData();
    return { data: fakeData[index], status: 200 };
  },

  async patchItem(id: number, data: Partial<Omit<Item, "id">>): Promise<AxiosResponse<Item>> {
    await delay(200);
    // simulateError();
    const index = fakeData.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Item not found");
    fakeData[index] = { ...fakeData[index], ...data };
    saveData();
    return { data: fakeData[index], status: 200 };
  },

  async deleteItem(id: number): Promise<AxiosResponse<Item>> {
    await delay(200);
    // simulateError();
    const index = fakeData.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Item not found");
    const [deleted] = fakeData.splice(index, 1);
    saveData();
    return { data: deleted, status: 200 };
  },

  reset() {
    fakeData = [...defaultData];
    saveData();
  },
};
