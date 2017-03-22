import React from 'react';
import Header from './header';
import BillsContainer from '../bills/bills_container';

class Center extends React.Component {
  render() {
    return (
      <div className="center">
        <Header />
        <BillsContainer />
      </div>
    )
  }
}

export default Center;
