import { useContext } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAuth = () => {
    setAuth(!auth);
    navigate("/sign_in");
  };
  return (
    <nav className=" flex justify-end">
      <p
        onClick={handleAuth}
        className=" p-3 cursor-pointer underline hover:text-stone-600 text-2xl"
      >
        Sign Out
      </p>
    </nav>
  );
}
