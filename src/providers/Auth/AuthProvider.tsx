import { useEffect, useState } from "react";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import { useApi } from "../../hooks/useApi";

import { InputsTypes } from "../../types/Input";

import { User } from "../../types/User";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");

      if (storageData) {
        const { user } = await api.validateToken(storageData);

        if (user) setUser(user);
      }
    };

    validateToken();
  }, []);

  const signin = async ({ email, password }: InputsTypes) => {
    const { user, token } = await api.signin({ email, password });

    if (user && token) {
      setUser(user);
      setToken(token);

      return true;
    }

    return false;
  };

  const signout = async () => {
    await api.logout();

    setUser(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
