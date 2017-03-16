import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  sessionLinks() {
    return (
      <SessionFormContainer />
    )
  }

  dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  personalGreeting(currentUser) {
    return(
      <div className="dropdown">
        <button onClick={this.dropDown} className="dropbtn">{currentUser.username}</button>
          <div id="myDropdown" className="dropdown-content">
            <a href="" className="logout-btn" onClick={this.logout}>Log out</a>
          </div>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser) : this.sessionLinks()}
      </div>
    );
  }
}


export default Greeting;

window.onClick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}
