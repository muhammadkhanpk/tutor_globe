import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./topbar.style.css";
// svg and images
import { BsChevronDown } from "react-icons/bs";
import Profile from "../../Assets/Images/Profile.png";

// firebase
import { auth } from "../../firebase";

// redux
import { useDispatch } from "react-redux";
import { userSuccess } from "../../Redux/Actions/userActions";
import useUser from "../../hooks/userUser";

const Topbar = ({ heading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const authUser = auth.currentUser;
  const { user } = useUser(authUser.uid);

  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch(userSuccess({}));
      history.push("/signin");
    });
  };
  return (
    <div className="topbar">
      {heading === "Previous page" ? (
        <h1 onClick={() => history.goBack()}>&#60; {`${heading}`}</h1>
      ) : (
        <h1 className="heading">{heading}</h1>
      )}

      <div className="profile">
        {user.ScrapPicture ? (
          <img src={user.ScrapPicture} alt="profile" />
        ) : (
          <img src={Profile} alt="profile" />
        )}
        <p>{user.Name}</p>
        <span onClick={() => setMenu(!menu)}>
          <BsChevronDown style={{ cursor: "pointer" }} />
        </span>
        {menu && (
          <div className="menu">
            <p onClick={handleLogout}>Sign out</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
