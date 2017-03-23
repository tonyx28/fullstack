import React from 'react';


class Bills extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchBills();
  }

  disableDefault(e){
    e.preventDefault();
  }

  render() {
    const { bills, session, friends } = this.props;
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL",
                        "AUG", "SEP", "OCT", "NOV", "DEC"]

    let billsList;
    if (bills[0] !== undefined){

      billsList = bills.map(bill => {
        let d = new Date(bill.date);
        let month = d.getMonth();
        let day = d.getDate();
        let paid_by, lent_to;
        let friend;
        if (friends[0] !== undefined){
          friend = friends.filter((friend) => (friend.id === bill.friend_id))
        }

        if (bill.paid_by_friend === false){
          paid_by = "you";
          lent_to = friend[0].name;
        } else {
          paid_by = friend[0].name;
          lent_to = "you";
        }

        return (
          <div className="bill" key={bill.id} onClick={this.disableDefault}>

            <div className="bill-header">
              <div className="bill-date" >
                <div className="month">
                  {monthNames[month]}
                </div>
                <div className="day">
                  {day}
                </div>
              </div>
              <div className="category-icon">
                <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/slim/uncategorized/general.png"/>
              </div>
              <div className="bill-desc" >{bill.description}</div>
            </div>

            <div className="paid">
              <div className="paid-by">{paid_by} paid</div>
              <div className="bill-cost">${bill.cost.toFixed(2)}</div>
            </div>
            <div className="lent">
              <div className="lent-to">{lent_to} owes</div>
              <div className="bill-amt-owed">${bill.owed_amt.toFixed(2)}</div>
            </div>
          </div>
        )
      })
    }

    return (
      <div className="bills-container">
        <ul>
          {billsList}
        </ul>
      </div>
    )
  }
}

export default Bills;
