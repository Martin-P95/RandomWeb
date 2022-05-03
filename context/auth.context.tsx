import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import axios from "../lib/axios.client";
import Cookies from "js-cookie";

const AuthContext = createContext({
  user: null as User | null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    signIn();
  }, []);

  const signIn = async () => {
    if (Cookies.get("token")) {
      axios.post("/api/auth").then((res) => {
        setUser(res.data);
      });
    }
  };

  const signOut = async () => {
    Cookies.remove("token");
    setUser(null);
    window.location.reload();
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
