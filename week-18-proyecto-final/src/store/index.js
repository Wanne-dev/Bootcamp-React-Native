import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatPrice, getProductoBySku } from '../data/productos';

const stripImage = (producto) => {
  const { imagen, ...rest } = producto;
  return rest;
};

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],
      searchQuery: '',
      selectedCategory: 'todos',
      isCartOpen: false,

      addToCart: (producto, variante = null, cantidad = 1) => {
        const cart = get().cart;
        const existingIndex = cart.findIndex(
          item => item.sku === producto.sku &&
          JSON.stringify(item.variante) === JSON.stringify(variante)
        );

        if (existingIndex >= 0) {
          const newCart = [...cart];
          newCart[existingIndex].cantidad += cantidad;
          set({ cart: newCart });
        } else {
          set({
            cart: [...cart, {
              ...stripImage(producto),
              variante,
              cantidad,
              addedAt: Date.now(),
            }]
          });
        }
      },

      removeFromCart: (sku, variante = null) => {
        set({
          cart: get().cart.filter(
            item => !(item.sku === sku && JSON.stringify(item.variante) === JSON.stringify(variante))
          )
        });
      },

      updateQuantity: (sku, variante, cantidad) => {
        if (cantidad <= 0) {
          get().removeFromCart(sku, variante);
          return;
        }
        set({
          cart: get().cart.map(item =>
            item.sku === sku && JSON.stringify(item.variante) === JSON.stringify(variante)
              ? { ...item, cantidad }
              : item
          )
        });
      },

      clearCart: () => set({ cart: [] }),

      toggleFavorite: (sku) => {
        const favorites = get().favorites;
        if (favorites.includes(sku)) {
          set({ favorites: favorites.filter(id => id !== sku) });
        } else {
          set({ favorites: [...favorites, sku] });
        }
      },

      isFavorite: (sku) => get().favorites.includes(sku),

      setSearchQuery: (query) => set({ searchQuery: query }),

      setSelectedCategory: (categoria) => set({ selectedCategory: categoria }),

      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
      },

      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.cantidad, 0);
      },

      getFormattedCartTotal: () => formatPrice(get().getCartTotal()),

      getCartItemImage: (sku) => {
        const producto = getProductoBySku(sku);
        return producto?.imagen || null;
      },
    }),
    {
      name: 'papeleri-a-digital-storage',
      storage: createJSONStorage(() => AsyncStorage),
      version: 2,
      migrate: async (persistedState, version) => {
        if (version < 2) {
          return { ...persistedState, cart: [] };
        }
        return persistedState;
      },
      partialize: (state) => ({
        cart: state.cart,
        favorites: state.favorites,
      }),
    }
  )
);

export default useStore;
