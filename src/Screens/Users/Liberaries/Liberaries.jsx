import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Topbar from "../../../Components/Topbar/Topbar";
import UserLiberaries from "../../../Components/Users/Liberaries/liberaries";
function Liberaries() {
  return (
    <div>
      <Topbar heading="Previous page" />
      <Sidebar />
      <div className="container">
        <UserLiberaries />
      </div>
    </div>
  );
}

export default Liberaries;
