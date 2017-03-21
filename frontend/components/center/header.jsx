import React from 'react';
import DashboardButton from './dashboard_button';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="topbar">
          <h1 className="dashboard">Dashboard</h1>
          <DashboardButton />
        </div>
      </div>
    )
  }
}

export default Header;
