
// 'use client';

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   thumbnail: string;
//   quantity?: number;
// }

// interface StoreState {
//   cartProduct: Product[];
//   favoriteProduct: Product[]; 
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   resetCart: () => void;
  
//   addToFavorite: (product: Product) => void;
//   removeFromFavorite: (id: number) => void;
//   clearFavorite: () => void;
// }

// export const store = create<StoreState>()(
//   persist(
//     (set, get) => ({
//       cartProduct: [],
//       favoriteProduct: [], 

//       addToCart: (product) => {
//         const existing = get().cartProduct.find((p) => p.id === product.id);
//         if (existing) {
//           set({
//             cartProduct: get().cartProduct.map((p) =>
//               p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
//             ),
//           });
//         } else {
//           set({ cartProduct: [...get().cartProduct, { ...product, quantity: 1 }] });
//         }
//       },

//       removeFromCart: (id) =>
//         set({ cartProduct: get().cartProduct.filter((p) => p.id !== id) }),

//       decreaseQuantity: (id) =>
//         set({
//           cartProduct: get().cartProduct.map((p) =>
//             p.id === id && (p.quantity || 1) > 1
//               ? { ...p, quantity: (p.quantity || 1) - 1 }
//               : p
//           ),
//         }),

//       resetCart: () => set({ cartProduct: [] }),
   

      
//       addToFavorite: (product) => {
//         const existing = get().favoriteProduct.find((p) => p.id === product.id);
//         if (!existing) {
//           set({ favoriteProduct: [...get().favoriteProduct, product] });
//         }
//       },

//       removeFromFavorite: (id) =>
//         set({
//           favoriteProduct: get().favoriteProduct.filter((p) => p.id !== id),
//         }),

//       clearFavorite: () => set({ favoriteProduct: [] }),
//     }),
//     {
//       name: 'cart-storage',
//     }
//   )
// );


// lib/store.ts
'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, CartProduct } from './Type';

interface StoreState {
  cartProduct: CartProduct[];
  favoriteProduct: Product[];

  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  resetCart: () => void;

  addToFavorite: (product: Product) => void;
  removeFromFavorite: (id: number) => void;
  clearFavorite: () => void;
}

export const store = create<StoreState>()(
  persist(
    (set, get) => ({
      cartProduct: [],
      favoriteProduct: [],

      addToCart: (product) => {
        const existing = get().cartProduct.find((p) => p.id === product.id);
        if (existing) {
          set({
            cartProduct: get().cartProduct.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          });
        } else {
          set({
            cartProduct: [...get().cartProduct, { ...product, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) =>
        set({
          cartProduct: get().cartProduct.filter((p) => p.id !== id),
        }),

      decreaseQuantity: (id) =>
        set({
          cartProduct: get().cartProduct.map((p) =>
            p.id === id && p.quantity > 1
              ? { ...p, quantity: p.quantity - 1 }
              : p
          ),
        }),

      resetCart: () => set({ cartProduct: [] }),

      addToFavorite: (product) => {
        const exists = get().favoriteProduct.find((p) => p.id === product.id);
        if (!exists) {
          set({
            favoriteProduct: [...get().favoriteProduct, product],
          });
        }
      },

      removeFromFavorite: (id) =>
        set({
          favoriteProduct: get().favoriteProduct.filter((p) => p.id !== id),
        }),

      clearFavorite: () => set({ favoriteProduct: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
