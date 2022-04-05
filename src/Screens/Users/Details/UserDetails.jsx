import React from "react";

// components
import Topbar from "../../../Components/Topbar/Topbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import DetailedProfile from "../../../Components/Users/Details/users_profile";

const ClientDetails = () => {
  return (
    <div>
      <Topbar heading='Previous page' />
      <Sidebar />
      <div className='container'>
        <DetailedProfile />
      </div>
    </div>
  );
};

export default ClientDetails;
