import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../user/userSlice";
import { logout } from "./authSlice";

export default function Logout() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <button aria-label="Decrement value" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
