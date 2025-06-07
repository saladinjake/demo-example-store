const WISHLIST_KEY = 'wishlist_items';

export function getWishlist(): string[] {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
}

export function addToWishlist(id: string) {
  const list = getWishlist();
  if (!list.includes(id)) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify([...list, id]));
  }
}

export function removeFromWishlist(id: string) {
  const list = getWishlist().filter((item) => item !== id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

export function isInWishlist(id: string) {
  return getWishlist().includes(id);
}
