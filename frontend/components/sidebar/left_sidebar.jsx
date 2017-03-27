import React from 'react';
import FriendsContainer from '../friends/friends_container';


class LeftSidebar extends React.Component {
  constructor(){
    super()

  }

  render() {
    return (
      <div className="left-sidebar">
        <FriendsContainer />
      </div>
    )
  }
}

export default LeftSidebar;
