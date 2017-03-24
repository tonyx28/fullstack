import React from 'react';
import FriendsContainer from '../friends/friends_container';
import { fetchBills } from '../../actions/bill_actions';

class LeftSidebar extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e){
    return e => {
      e.preventDefault();
      fetchBills();
    }
  }
  render() {
    return (
      <div className="left-sidebar">
        <a href="" className="all-expenses-link" onClick={this.handleClick}><i className="fa fa-list" aria-hidden="true"></i>All expenses</a>
        <FriendsContainer />
      </div>
    )
  }
}

export default LeftSidebar;
