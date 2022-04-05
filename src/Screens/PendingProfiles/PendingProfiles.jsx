import React, { useState,useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import {database} from "../../firebase";

// components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import ProjectsListing from "../../Components/PendingProfiles/PendingProfilesListing";
// import Filters from "../../Components/Projects/Filters";

const PendingProfiles = () => {
  const [project, setProject] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState("");



  return (
    <div>
      <Topbar heading="Pending Profiles" />
      <Sidebar />
      <div className="container">
        {/* <Filters
          setStatus={setStatus}
          setClient={setClient}
          setProject={setProject}
          setDate={setDate}
          project={project}
          client={client}
          status={status}
          date={date}
        /> */}
        <ProjectsListing
          projectName={project}
          userName={client}
          status={status}
          date={date}
        />
      </div>
    </div>
  );
};

export default PendingProfiles;
