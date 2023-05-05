import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '../../types/user.types';
import { authApi } from '../query/auth.query';
type TState = { data: TUser | null };
const initialState: TState = {
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, {payload}) {
      if (payload == null) state.data = null;
      else state.data = { ...state.data, ...payload }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.data = payload.data;
    });
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state, action) => {
      state.data = null;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
