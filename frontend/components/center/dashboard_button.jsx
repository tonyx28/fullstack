import React from 'react';

class DashboardButton extends React.Component {
  render() {
    return(
      <div className="dash-btns">
        <button className="dashbtn" id="dashbtn-orange">Add a bill</button>
        <button className="dashbtn" id="dashbtn-mint">Settle up</button>
      </div>
    )
  }
}

export default DashboardButton;
