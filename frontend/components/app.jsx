import React from 'react';
import GreetingContainer from './greeting/greeting_container'
const App = ({ children }) => {
  return (
    <div>
      <div>
      <h1 className="site-name">Trip Split</h1>
      <GreetingContainer />
      </div>
      { children }
    </div>
  )
};

export default App;
