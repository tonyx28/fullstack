import React from 'react';


class Bills extends from React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBills();
  }

  render() {
    <div>This is a bill</div>
  }
}
