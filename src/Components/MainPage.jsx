import React, { useState } from "react";
import Profile from "./Profile/Profile";
import TopMenu from './TopMenu/TopMenu'
import SideMenu from './SideMenu/SideMenu'
import Products from './Products/Products'

const MainPage = () => {
    const [count, setCount]=useState(0)
    const handleCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <TopMenu count={count}/>
      <SideMenu />
      <Profile />
      <Products handleCount={handleCount}/>
    </div>
  );
};

export default MainPage;
