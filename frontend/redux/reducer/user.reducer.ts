import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '../../types/user.types';
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
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
