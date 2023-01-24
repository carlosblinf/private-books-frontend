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
    const user = getItem('user');
    if (user) {
      if (user.userName === userName && user.password === password) {
        setItem('login', true);
        return;
      }
      throw new Error('Username or password incorrect!');
    } else throw new Error('You need to register!');
  },
  logout: async () => {
    // call api
    deleteItem('login');
  },
};
