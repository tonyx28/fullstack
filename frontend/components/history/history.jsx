import React from 'react';
import { fetchBills } from '../../util/bill_api_util';

class History extends React.Component {
  constructor(){
    super();

    this.state = {}
  }

  componentWillMount(){
    fetchBills(null,true).then(obj => history = JSON.parse(obj).responseText);
    debugger;
  }

  render() {
    let history;

    return(
      <div className="transaction-history">
          this is for transactions

      </div>
    )
  }



}

export default History;
