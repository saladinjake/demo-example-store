import { useState, useEffect } from 'react';
import {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
} from './util';

type Props = {
  productId: string;
  isWished?: boolean; // controlled
  onChange?: (newState: boolean) => void;
};

export default function WishlistToggle({ productId, isWished, onChange }: Props) {
  const isControlled = isWished !== undefined;

  const [internalWished, setInternalWished] = useState(() =>
    isControlled ? false : isInWishlist(productId)
  );

  const current = isControlled ? isWished : internalWished;

  useEffect(() => {
    if (!isControlled) {
      if (internalWished) addToWishlist(productId);
      else removeFromWishlist(productId);
    }
  }, [internalWished, productId, isControlled]);

  const toggle = () => {
    if (isControlled) {
      onChange?.(!isWished);
    } else {
      setInternalWished((prev) => !prev);
    }
  };

  return (
    <button onClick={toggle} className="text-sm text-pink-500">
      {current ? 'Wishlisted' : 'Add to Wishlist'}
    </button>
  );
}
