import ActivityFeedClass from "./ActivityFeedClass";
import MutualFriends from "./MutualFriends";
import MyProfileClass from "./MyProfileClass";
 

const LeftBar = () => {
  return (
    <>
        <MyProfileClass/>
        <MutualFriends/>
        <ActivityFeedClass/>
    </>
  );
};

export default LeftBar;
