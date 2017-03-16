import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Navbar from './navbar/navbar_container';

const App = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      { children }
    </div>
  )
};

export default App;
