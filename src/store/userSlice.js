/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { isUserLoggedIn: false, userDetails: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isUserLoggedIn = true;
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
      state.userDetails = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
// eslint-disable-next-line import/no-default-export
export default userSlice.reducer;
