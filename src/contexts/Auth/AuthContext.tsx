import { createContext } from 'react';

import { InputsTypes } from '../../types/Input';
import { User } from '../../types/User';

export type AuthContextType = {
  user: User | null;
  signin: ({ email, password }: InputsTypes) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
