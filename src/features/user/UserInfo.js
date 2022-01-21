import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

export default function UserInfo() {
  const user = useSelector(selectUser);

  return (
    <div>
      <p>UserName: {user?.name}</p>
      <p>Avatar</p>

      <img src={user?.avatar} alt="" />
    </div>
  );
}
