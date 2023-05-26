import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <RouterProvider router={router} />;
    </AuthContext.Provider>
  );
}
