/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../utils/localStorage';
import { User } from '../../types/user';
import { LoginSchemaType } from '../../utils/validateForm';
import { AuthService } from '../../services/AuthService';

type UserState = {
  isLogin: boolean;
  user: User;
  pending?: boolean;
  error?: string;
};

const initialState: UserState = {
  isLogin: false,
  user: getItem('user') || ({} as User),
  error: '',
  pending: false,
};

export const registerUser = createAsyncThunk('auth/register', async (data: User) => {
  const user: User = await AuthService.register(data);
  return user;
});

export const login = createAsyncThunk('auth/login', async (data: LoginSchemaType) => {
  const user: User = await AuthService.login(data);
  return user;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLogin = false;
      state.pending = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogin = true;
      state.pending = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLogin = false;
      state.pending = false;
      state.error = action.error.message;
    });
    builder.addCase(login.pending, (state) => {
      state.isLogin = false;
      state.pending = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogin = true;
      state.pending = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLogin = false;
      state.pending = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
