import React from 'react';

class DateIcon extends React.Component {


  render(){
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL",
    "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    return (
      <div className="bill-date" >
        <div className="month">
          {monthNames[this.props.month]}
        </div>
        <div className="day">
          {this.props.day}
        </div>
      </div>
    )
  }

}

export default DateIcon;
