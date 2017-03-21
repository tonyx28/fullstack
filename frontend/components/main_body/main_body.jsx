import React from 'react';
import LeftSidebar from "../sidebar/left_sidebar";
import Center from "../center/center";
import RightSidebar from '../sidebar/right_sidebar';

const MainBody = () => {
  return (
    <div className="main-body">
      <LeftSidebar />
      <Center />
      <RightSidebar />
    </div>
  )
}



export default MainBody;
