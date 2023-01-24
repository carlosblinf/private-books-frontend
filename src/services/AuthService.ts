import { User } from '../types/user';
import { getItem, setItem, deleteItem } from '../utils/localStorage';
import { LoginSchemaType } from '../utils/validateForm';

export const AuthService = {
  register: (user: User): User => {
    const newUser: User = {
      ...user,
      id: crypto.randomUUID(),
    };
    setItem('user', newUser);
    return newUser;
  },
  login: ({ userName, password }: LoginSchemaType) => {
    const localStorageUser = getItem('user');
    if (localStorageUser) {
      const user: User = JSON.parse(localStorageUser);
      if (user.userName === userName && user.password === password) return user;
      throw new Error('Username or password incorrect!');
    } else throw new Error('You need to register!');
  },
  logout: async () => {
    deleteItem('user');
    // call api
  },
};
