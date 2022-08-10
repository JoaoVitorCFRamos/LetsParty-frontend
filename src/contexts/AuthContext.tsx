import jwt_decode from "jwt-decode";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  email: string;
  role: 'CUSTOMER' | 'COMPANY';
};

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signInCustomer(credentials: SignInCredentials): Promise<void>;
  signInCompany(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('@LPAuth:user');
      const storagedToken = localStorage.getItem('@LPAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signInCustomer({ email, password }: SignInCredentials): Promise<void> {
    const response = await api.post("auth/customer", {
      email,
      password,
    });

    const { accessToken } = response.data;

    const userInfo: any = jwt_decode(accessToken)

    setUser({
      id: userInfo.id,
      email: userInfo.email,
      role: userInfo.role
    })

    localStorage.setItem('@LPAuth:user', JSON.stringify(userInfo));
    localStorage.setItem('@LPAuth:token', accessToken);
    
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  async function signInCompany({ email, password }: SignInCredentials): Promise<void> {
    const response = await api.post("auth/company", {
      email,
      password,
    });

    const { accessToken } = response.data;

    const userInfo: any = jwt_decode(accessToken)

    setUser({
      id: userInfo.id,
      email: userInfo.email,
      role: userInfo.role
    })

    localStorage.setItem('@LPAuth:user', JSON.stringify(userInfo));
    localStorage.setItem('@LPAuth:token', accessToken);
    
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  function signOut() {
    localStorage.removeItem('@LPAuth:user')
    localStorage.removeItem('@LPAuth:token')
    setUser(null);
    navigate('/')
  }
  
  return (
    <AuthContext.Provider value={{signed: !!user, user, loading, signInCompany, signInCustomer, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth }