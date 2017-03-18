import React from 'react';
import Navbar from './navbar/navbar_container';
import Welcome from './welcome/welcome';

const App = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Welcome />
      </div>
      { children }
    </div>
  )
};

export default App;
