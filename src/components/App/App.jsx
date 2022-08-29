import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics"
import user from "../Profile/user";
import data from "../Statistics/data.json"
export const App = () => {
  const { userName, tag, location, avatar, stats } = user;
  return (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
      >
    <Profile
    userName={userName}
    tag={tag}
    location={location}
    avatar={avatar}
    stats={stats} />
    
    <Statistics 
    titel="Upload stats"
    stats={data} 
      />
    </div>
  );
};
