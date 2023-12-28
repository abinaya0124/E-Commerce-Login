import { useState } from "react";
import "./TopMenu.css";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";
const TopMenu = ({ count }) => {
  const [profileShow, setProfileShow] = useState(false);
  const handleOpen = () => {
    setProfileShow(!profileShow);
  };
  return (
    <div>
      <div className="topbar__container">
        <h3>Logo</h3>
        <div className="topBar__right">
          <button>
            <Link to="/orders">Orders</Link>
          </button>
          <button>
            <Link to="/cart">Cart</Link>
            <span className="countValues" >{count}</span>
          </button>
          <button onClick={handleOpen}>Profile</button>
          {profileShow && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
