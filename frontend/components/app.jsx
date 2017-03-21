import React from 'react';
import Navbar from './navbar/navbar_container';
// import Welcome from './welcome/welcome';
// import Friends from './friends/friends';
import Main from './main/main_container';

const App = ({ children }) => {
  return (
    <div className="app">
        <Navbar />
        <Main />
      { children }
    </div>
  )
};

export default App;
