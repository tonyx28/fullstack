import React from 'react';
import { Link } from 'react-router';
import UserButtonContainer from '../user_button/user_button_container';
import SessionFormContainer from '../session_form/session_form_container';


class Navbar extends React.Component {

  render() {
    // debugger;
    return(
      <div className='navbar'>
        <h1 className="site-name">TripSplit</h1>
        {this.props.currentUser ? <UserButtonContainer /> : <SessionFormContainer />}
      </div>
    )
  }
}



export default Navbar;
