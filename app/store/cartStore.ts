import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  clearCart: () => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Cart Storage
      cart: [],

      // Add item to cart
      addToCart: item => {
        const cart = get().cart;
        const existing = cart.find(p => p.id === item.id);

        if (existing) {
          set({
            cart: cart.map(p =>
              p.id === item.id ? { ...p, qty: p.qty + (item.qty ?? 1) } : p,
            ),
          });
        } else {
          set({
            cart: [...cart, { ...item, qty: item.qty ?? 1 }],
          });
        }
      },

      // Increased quantity of item
      increaseQty: id => {
        set(state => ({
          cart: state.cart.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item,
          ),
        }));
      },

      // Decreased quantity of item
      decreaseQty: id => {
        set(state => ({
          cart: state.cart
            .map(item =>
              item.id === id ? { ...item, qty: item.qty - 1 } : item,
            )
            .filter(item => item.qty > 0),
        }));
      },

      // Clear all carts
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
