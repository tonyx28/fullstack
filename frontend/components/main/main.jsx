import React from 'react';
import Welcome from '../welcome/welcome';
// import Friends from '../friends/friends';
// import LeftSidebar from '../left_sidebar/left_sidebar';
import MainBody from '../main_body/main_body';

class Main extends React.Component {
  render () {
    return (
      <div className="main">
        { this.props.currentUser ? <MainBody /> : <Welcome /> }
      </div>

    )
  }
}


export default Main;
