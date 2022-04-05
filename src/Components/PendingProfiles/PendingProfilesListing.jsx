import React, { useState } from "react";
//icons
import { AiOutlineSearch } from "react-icons/ai";
// components
import ProjectsTable from "../Tables/PendingProfilesTable";
import CommantriesModal from "../Modals/CommantriesModal";
import ProjectDetailsModal from "../Modals/ProjectDetailsModal";
import Pagination from "../Pagination/Pagination";


// firebase
import useProjects from "../../hooks/usePendingProfiles";
import usePendingProfiles from "../../hooks/usePendingProfiles";
import useTutors from "../../hooks/useTutors";

const ProjectsListing = ({ userName, projectName, status, date }) => {
  const {tutorProfiles}=usePendingProfiles("Tutors");
  const {tutors}=usePendingProfiles("Tutors");

  // const projects=pendingProfileData;
  const projects=tutorProfiles;

  // const { projects } = useProjects("user_profile");
  const [modal, setModal] = useState(false);
  const [commantriesModal, setCommantriesModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [clientId, setClientId] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [clientName, setClientName] = useState(null);
  const [search, setSearch] = useState("");

  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  const openCommantriesModal = () => {
    setCommantriesModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {modal && (
        <ProjectDetailsModal
          setModal={setModal}
          clientId={clientId}
          projectId={projectId}
        />
      )}


        <div className="table__top">
          <h2>
            Total Number of Profiles (
            {projects && projects.length > 0 ? projects.length : 0}
            )
          </h2>
          <div className="search">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      {commantriesModal && (
        <CommantriesModal
          setModal={setCommantriesModal}
          clientId={clientId}
          projectId={projectId}
          clientName={clientName}
        />
      )}
      {projects.length > 0 && (
        <ProjectsTable
          data={projects}
          openModal={openModal}
          openCommantriesModal={openCommantriesModal}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setClientId={setClientId}
          setProjectId={setProjectId}
          setClientName={setClientName}
          userName={userName}
          projectName={projectName}
          status={status}
          date={date}
          searchName={search}
        />
      )}
      {projects.length > 5 && !userName && !projectName && !status && !date && (
        <Pagination
          data={projects}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default ProjectsListing;
