import React from "react";

// components
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ParentsListing from "../../Components/Parents/ParentsListing";

const Clients = () => {
  return (
    <div>
      <Topbar heading='Parents' />
      <Sidebar />
      <div className='container'>
        <ParentsListing />
      </div>
    </div>
  );
};

export default Clients;
