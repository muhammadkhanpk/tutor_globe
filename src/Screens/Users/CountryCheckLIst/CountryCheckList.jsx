import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Topbar from "../../../Components/Topbar/Topbar";
import CountryCheckList from "../../../Components/Users/CountryCheckList/country_checklist";

function CountryCheckLists() {
  return (
    <div>
      <Topbar heading="Previous page" />
      <Sidebar />
      <div className="container">
        <CountryCheckList />
      </div>
    </div>
  );
}

export default CountryCheckLists;
