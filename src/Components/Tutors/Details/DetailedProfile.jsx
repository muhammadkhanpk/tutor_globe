import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./detailedprofile.style.css";

// icons and images
import { FcBusinessman } from "react-icons/fc";

// components
import ProfileModal from "../../Modals/ProfileModal";
import ProfileTable from "../../Tables/ProfileTable";
import EmptyLinkBtn from "../../Buttons/EmptyLinkBtn";

// firebse
import useConstructor from "../../../hooks/useTutor";

const Table = () => {
  const { userId } = useParams();
  const { constructor, projects } = useConstructor(userId);
  const [menu, setMenu] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modal, setModal] = useState(false);

  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };

  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {modal && (
        <ProfileModal setModal={setModal} selectedProject={selectedProject} />
      )}
      <div className="constructor__details">
        <div className="constructor__profile">
          {!constructor.image ? (
            <FcBusinessman />
          ) : (
            <img src={constructor.image} alt="profile" />
          )}
          <div className="data">
            <h2>{"Yasir Munir"}</h2>
            <h4>{"Yasir@gmail.com"}</h4>
          </div>
        </div>
        <div>
          <button className="danger">Wipe off</button>
          <EmptyLinkBtn
            path="/assignProject"
            size="medium"
            title="Detail of Projects"
          />
        </div>
        <ProfileTable
          handleMenu={handleMenu}
          openModal={openModal}
          data={projects}
          menu={menu}
          setSelectedProject={setSelectedProject}
          constructor={true}
        />
      </div>
    </>
  );
};

export default Table;
