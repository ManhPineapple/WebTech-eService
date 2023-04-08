import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TState = {
  refreshToken: string | null;
};

const initialState: TState = { refreshToken: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefreshToken(state, action: PayloadAction<string | null>) {
      state.refreshToken = action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});

export const { setRefreshToken } = authSlice.actions;

export default authSlice.reducer;
