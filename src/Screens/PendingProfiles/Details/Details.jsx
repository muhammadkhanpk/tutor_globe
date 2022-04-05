import React from "react";

// components
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Topbar from "../../../Components/Topbar/Topbar";
import PendingProfilesDetails from "../../../Components/PendingProfiles/Details/PendingProfilesDetails";
import ProfileDetail from "./Profile/profile";
const Details = () => {
  return (
    <div>
      <Topbar heading="Previous page" />
      <Sidebar />
      <div className="container">
        <ProfileDetail />
      </div>
    </div>
  );
};

export default Details;
