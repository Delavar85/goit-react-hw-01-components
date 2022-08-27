import { Profile } from "../Profile/Profile";
import user from "../Profile/user";
export const App = () => {
  const { userName, tag, location, avatar, stats } = user;
  return (
    <Profile
    userName={userName}
    tag={tag}
      location={location}
      avatar={avatar}
      stats={stats} />
    
  );
};
