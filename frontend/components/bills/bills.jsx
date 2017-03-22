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
    const { bills } = this.props;

    let billsList;

    if (bills[0] !== undefined){
      billsList = bills.map(bill => (
        <div className="bill" key={bill.id}>
          <a href="" className="bill-desc" onClick={this.disableDefault}
            >{bill.description}</a>
          <div className="cost">{bill.cost}</div>
          <div className="amt-owed">{bill.owed_amt}</div>
        </div>

      ))
    }

    return (
      <div>This is a bill
        <ul>
          {billsList}
        </ul>
      </div>
    )
  }
}

export default Bills;
