import Logout from "../features/auth/Logout";
import PostsList from "../features/post/PostsList";
import UserInfo from "../features/user/UserInfo";

export default function HomePage() {
  return (
    <div>
      <h1>This is HomePage</h1>

      {/* <UserInfo /> */}
      <PostsList />

      <br />
      <br />

      {/* <Logout /> */}
    </div>
  );
}
