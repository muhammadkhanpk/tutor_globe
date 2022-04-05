import React from "react";

// components
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TutorsListing from "../../Components/Tutors/TutorsListing";

const Tutors = () => {
  return (
    <div>
      <Topbar heading="Tutors" />
      <Sidebar />
      <div className="container">
        <TutorsListing />
      </div>
    </div>
  );
};

export default Tutors;
