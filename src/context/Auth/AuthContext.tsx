import { createContext, useReducer, useEffect, ReactNode } from "react";

interface AuthState {
  user: any | null;
}

interface AuthContextValue extends AuthState {
  dispatch: React.Dispatch<AuthAction>;
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  payload?: any;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  dispatch: () => {},
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  const value = { ...state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
