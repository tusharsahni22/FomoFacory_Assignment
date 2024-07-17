import { createSlice } from '@reduxjs/toolkit';

export const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    coins: [],
    selectedCoin: 'Bitcoin',
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
});

export const { setCoins, setSelectedCoin } = coinSlice.actions;

export default coinSlice.reducer;