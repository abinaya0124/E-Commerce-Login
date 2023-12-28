import React, { useContext } from "react";
import "./Profile.css";
import { UserContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { token, logout } = useContext(UserContext);

  const handleLogout=()=>{
    logout()
    localStorage.removeItem("authToken");
  }

  return (
    <div className="profile__container">
      {token ? (
        <>
          <div className="profile__subcontainer">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <>
          <div className="profile__subcontainer">
            <Link to="/login" className="">
              Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
