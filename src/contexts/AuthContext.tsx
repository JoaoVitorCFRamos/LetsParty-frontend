import { createContext, ReactNode, useCallback, useState } from "react";
import api from "../services/api";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";

type AuthenticatedUser = {
  id: string;
  email: string;
  role: "CUSTOMER" | "COMPANY";
};

type Customer = {
  id: string;
  email: string;
  profile: {
    id: string;
    fullName: string;
  };
};

type Company = {
  id: string;
  email: string;
  profile: {
    id: string;
    name: string;
  };
};

type Profile = Customer | Company;

type SignInCredentials = {
  email: string;
  password: string;
};

interface IJwtPayload extends JwtPayload {
  id: string;
  email: string;
  role: "CUSTOMER" | "COMPANY";
}

type AuthContextData = {
  signInCustomer: (credentials: SignInCredentials) => Promise<void>;
  signInCompany: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  getProfile: () => Promise<Profile | undefined>;
  isAuthenticated: boolean;
  user: AuthenticatedUser | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storagedToken = localStorage.getItem("@LPAuth:token");

    if (storagedToken) {
      try {
        const userInfo = jwtDecode<IJwtPayload>(storagedToken);

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          role: userInfo.role,
        });

        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;

        return true;
      } catch (error) {
        signOut();
        return false;
      }
    } else {
      return false;
    }
  });

  const signInCustomer = useCallback(
    async ({ email, password }: SignInCredentials) => {
      try {
        const response = await api.post("auth/customer", {
          email,
          password,
        });

        const { accessToken } = response.data;

        localStorage.setItem("@LPAuth:token", accessToken);

        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        const userInfo = jwtDecode<IJwtPayload>(accessToken);

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          role: userInfo.role,
        });

        setIsAuthenticated(true);

        navigate("/app");
      } catch (error) {
        setIsAuthenticated(false);
      }
    },
    [navigate]
  );

  const signInCompany = useCallback(
    async ({ email, password }: SignInCredentials) => {
      try {
        const response = await api.post("auth/company", {
          email,
          password,
        });

        const { accessToken } = response.data;

        localStorage.setItem("@LPAuth:token", accessToken);

        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        const userInfo = jwtDecode<IJwtPayload>(accessToken);

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          role: userInfo.role,
        });

        setIsAuthenticated(true);

        navigate("/dashboard");
      } catch (error) {
        setIsAuthenticated(false);
      }
    },
    [navigate]
  );

  const getProfile = useCallback(async () => {
    try {
      switch (user?.role) {
        case "CUSTOMER":
          const { data: customer } = await api.get<Customer>("customers/me");
          return {
            id: customer.id,
            email: customer.email,
            profile: {
              id: customer.profile.id,
              fullName: customer.profile.fullName,
            },
          } as Customer;
        case "COMPANY":
          const { data: company } = await api.get<Company>("companies/me");
          return {
            id: company.id,
            email: company.email,
            profile: {
              id: company.profile.id,
            },
          } as Company;
        default:
          signOut();
          break;
      }
    } catch (error) {
      signOut();
    }
  }, [user?.role]);

  const signOut = () => {
    api.defaults.headers.common.Authorization = "";
    localStorage.removeItem("@LPAuth:token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signInCustomer,
        signInCompany,
        getProfile,
        signOut,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
