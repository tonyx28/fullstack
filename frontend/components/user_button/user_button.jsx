import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';

class UserButton extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div className="user-dropdown">
        <button onClick={this.dropDown} className="dropbtn"
          id="dropbtn-user">{this.props.currentUser.username}</button>
        <div id="myDropdown" className="user-dropdown-content">
          <a href="" className="dropdown-item" id="settings-btn" >Settings</a>
          <a href="" className="dropdown-item" id="logout-btn" onClick={this.logout}>Log out</a>
        </div>
      </div>
    );
  }
}


export default UserButton;

window.onClick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementByClassName("user-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}
