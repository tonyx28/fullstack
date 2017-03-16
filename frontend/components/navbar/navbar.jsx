import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';


class Navbar extends React.Component {

  render() {
    return(
      <div className='navbar'>
        <h1 className="site-name">TripSplit</h1>
        <GreetingContainer />
      </div>
    )
  }
}



export default Navbar;
