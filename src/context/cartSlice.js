// src/context/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Danh sách các sản phẩm trong giỏ hàng
    totalQuantity: 0, // Tổng số lượng sản phẩm trong giỏ
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity--;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
