import Logout from "../features/auth/Logout";
import UserInfo from "../features/user/UserInfo";

export default function HomePage() {
  return (
    <div>
      <h1>This is HomePage</h1>

      <UserInfo />

      <br />
      <br />

      <Logout />
    </div>
  );
}
