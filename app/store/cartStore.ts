import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  clearCart: () => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      // Add item to cart
      addToCart: item => {
        const cart = get().cart;
        const existing = cart.find(p => p.id === item.id);

        let updatedCart;

        if (existing) {
          updatedCart = cart.map(p =>
            p.id === item.id ? { ...p, qty: p.qty + 1 } : p,
          );
        } else {
          updatedCart = [...cart, { ...item, qty: 1 }];
        }

        set({ cart: updatedCart });
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
