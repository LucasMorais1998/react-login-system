import { api } from "../services/Api/api";
import { User } from "../types/User";

import { InputsTypes } from "./../types/Input";

type validateTokenTypes = {
  token: string;
  user: User;
};

export const useApi = () => ({
  validateToken: async (token: string): Promise<validateTokenTypes> => {
    return {
      token,
      user: {
        id: 1,
        email: "john.doe@email.com",
        firstName: "John",
        lastName: "Doe",
        company: "Lorem Ipsum",
      },
    };

    const response = await api.post("/validate", {
      token,
    });

    return response.data;
  },

  signin: async ({
    email,
    password,
  }: InputsTypes): Promise<validateTokenTypes> => {
    return {
      user: {
        id: 1,
        email: "john.doe@email.com",
        firstName: "John",
        lastName: "Doe",
        company: "Lorem Ipsum",
      },
      token: "12345678",
    };

    const response = await api.post("/signin", {
      email,
      password,
    });

    const user: User = await response.data.user;

    return {
      user: {
        id: 1,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company,
      },
      token: "token",
    };
  },

  logout: async (): Promise<Boolean> => {
    return false;

    const response = await api.post("/logout");

    return response.data;
  },
});
