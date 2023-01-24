/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getItem } from '../../utils/localStorage';
import { User } from '../../types/user';

type UserState = {
  isLogin: boolean;
  users: User[];
  currentUsers: User;
};

const initialState: UserState = {
  isLogin: false,
  users: getItem('users') || [],
  currentUsers: {} as User,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    getUser: (state, action: PayloadAction<User>) => {
      state.currentUsers = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const { id } = action.payload;
      state.users.map((user) => {
        if (user.id === id) {
          return action.payload;
        }
        return user;
      });
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
