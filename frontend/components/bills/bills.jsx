import React from 'react';
import CommentContainer from '../comment/comment_container';
import DateIcon from './date_icon';

class Bills extends React.Component {
  constructor(props){
    super(props);

    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount(){
    this.props.fetchBills();
    this.props.fetchComments();
  }

  showDetails(showId){
    return (
      e => {
        e.preventDefault();
        let details = document.getElementById(showId)
        if (details.style.display === 'none'){
          details.style.display = 'block';
        } else {
          details.style.display = 'none';
        }
      }
    )
  }

  render() {
    const { bills, session, friends, comments } = this.props;

    let billsList;
    if (bills[0] !== undefined){

      billsList = bills.map(bill => {
        let d = new Date(bill.date);
        let month = d.getMonth();
        let day = d.getDate();
        let paidBy, lentTo, friend, idName, showId;
        showId = "show-" + bill.id;
        if (friends[0] !== undefined){
          friend = friends.filter((friend) => (friend.id === bill.friend_id))
          if (bill.paid_by_friend === false){
            paidBy = "you";
            lentTo = friend[0].name;
            idName = "positive"
          } else {
            paidBy = friend[0].name;
            lentTo = "you";
            idName = "negative"
          }
        }

        return (
          <div className="bill" key={bill.id} >
            <div className="bill-click" onClick={this.showDetails(showId)} >
              <div className="bill-small">
                <div className="bill-header">
                  <DateIcon month={month} day={day} />
                  <div className="category-icon">
                    <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/slim/uncategorized/general.png"/>
                  </div>
                  <div className="bill-desc" value={showId} >{bill.description}</div>
                </div>

                <div className="paid">
                  <div className="paid-by">{paidBy} paid</div>
                  <div className="bill-cost">${bill.cost.toFixed(2)}</div>
                </div>
                <div className="lent">
                  <div className="lent-to">{lentTo} owes</div>
                  <div id={idName} className="bill-amt-owed" >${bill.owed_amt.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="bill-details" id={showId} style={{display:"none"}}>
              <div className="bill-table">
                <div>
                  <div className="bill-table-top">
                    <img className="bill-icon" src="https://s3.amazonaws.com/splitwise/uploads/category/icon/slim/uncategorized/general.png"/>
                    <div className="bill-dets-cost">
                      <div className="bill-dets">{bill.description}</div>
                      <div className="bill-cost">${bill.cost.toFixed(2)}</div>
                    </div>
                  </div>

                  <hr />

                  <div className="bill-table-bottom">
                    <div className="left-side">
                      <div className="payer">
                        <img className="avatar" src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/100-4c516cdaad9fa42b890727b03e49634a199eaba880df708835105dfa42fac74b.png" />
                        <div className="text">{this.props.currentUser.username} paid ${bill.cost} and owes ${bill.owed_amt}</div>
                      </div>
                      <div className="debtor">
                        <img className="avatar" src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/100-4c516cdaad9fa42b890727b03e49634a199eaba880df708835105dfa42fac74b.png" />
                        <div className="text">{lentTo} owes ${bill.owed_amt}</div>
                      </div>
                    </div>

                    <div className="comments">
                      <CommentContainer bill_id={bill.id} />
                    </div>
                  </div>
                </div>
              </div>
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
