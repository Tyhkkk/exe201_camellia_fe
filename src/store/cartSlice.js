import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // [{candleId, name, price, quantity, imgUrl}]
  },
  reducers: {
    addToCart: (state, action) => {
      const { candleId, name, price, quantity, imgUrl } = action.payload;
      const existingItem = state.items.find((item) => item.candleId === candleId);

      if (existingItem) {
        existingItem.quantity += quantity; // If product exists, update quantity
      } else {
        state.items.push({ candleId, name, price, quantity, imgUrl }); // Add new product
      }
    },

    updateQuantity: (state, action) => {
      const { candleId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.candleId === candleId);
      if (existingItem) {
        existingItem.quantity = quantity; // Update quantity for the existing item
      }
    },

    removeFromCart: (state, action) => {
      const { candleId } = action.payload;
      state.items = state.items.filter(item => item.candleId !== candleId); // Remove item by candleId
    },

    changeQuantity: (state, action) => {
      const { candleId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.candleId === candleId);
      if (existingItem) {
        if (quantity <= 0) {
          // If quantity is 0 or less, remove the item from the cart
          state.items = state.items.filter(item => item.candleId !== candleId);
        } else {
          // Otherwise, update the quantity
          existingItem.quantity = quantity;
        }
      }
    }
  },
});

export const { addToCart, updateQuantity, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
