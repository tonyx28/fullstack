import React from 'react';
import GreetingContainer from './greeting/greeting_container'
const App = ({ children }) => (
  <div>
    <div>
    <h1>Trip Split</h1>
    <GreetingContainer />
    </div>
    { children }
  </div>
);

export default App;
