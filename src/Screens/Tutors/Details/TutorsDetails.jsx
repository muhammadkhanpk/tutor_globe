import React from "react";

// components
import Topbar from "../../../Components/Topbar/Topbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import DetailedProfile from "../../../Components/Tutors/Details/tutor_profile";

const ConstructorDetails = () => {
  return (
    <div>
      <Topbar heading="Previous page" />
      <Sidebar />
      <div className="container">
        <DetailedProfile />
      </div>
    </div>
  );
};

export default ConstructorDetails;
