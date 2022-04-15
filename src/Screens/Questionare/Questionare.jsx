import React from "react";
import Questions from "../../Components/questionare/Questions";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

function Questionare() {
  return (
    <div>
      <Topbar heading="Previous page" />
      <Sidebar />
      <div className="container">
        <Questions  />
      </div>
    </div>
  );
}

export default Questionare;
