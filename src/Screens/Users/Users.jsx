import React from "react";

// components
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UsersListing from "../../Components/Users/UsersListing";

const Clients = () => {
  return (
    <div>
      <Topbar heading='Users' />
      <Sidebar />
      <div className='container'>
        <UsersListing />
      </div>
    </div>
  );
};

export default Clients;
