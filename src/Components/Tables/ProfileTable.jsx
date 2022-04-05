import React from "react";
import "./table.style.css";

const ProfileTable = ({
  handleMenu,
  openModal,
  data,
  menu,
  setSelectedProject,
}) => {
  return (
    <div className="table__container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-2">Name of Profile</div>
          <div className="col col-3">Status</div>
          <div className="col col-2">Date of Creation</div>
          <div className="col col-1">Action</div>
        </li>
        {data &&
          data.map((value, index) => {
            return (
              <li className="table-row" key={index}>
                <div className="col col-2" data-label="Nom du projet">
                  {value &&
                    value.projectData &&
                    value.projectData.name_of_project}
                </div>
                <div className="col col-3" data-label="Status">
                  {value &&
                  value.projectData &&
                  value.projectData.project_status === "completed" ? (
                    <p className="status success">Finalisé</p>
                  ) : value &&
                    value.projectData &&
                    value.projectData.project_status === "active" ? (
                    <p className="status warning">En cours</p>
                  ) : value &&
                    value.projectData &&
                    value.projectData.project_status === "examine" ? (
                    <p className="status primary">Examiné</p>
                  ) : (
                    <p className="status warning">Non Statut</p>
                  )}
                </div>
                <div className="col col-2" data-label="Date of creation">
                  {value &&
                    value.projectData &&
                    value.projectData.date_time &&
                    new Date(
                      value.projectData.date_time.toDate()
                    ).toDateString()}
                  {value &&
                    value.projectData &&
                    value.projectData.createdAt &&
                    new Date(
                      value.projectData.createdAt.toDate()
                    ).toDateString()}
                </div>
                <div className="col col-1" data-label="Action">
                  <div className="menu__dots" onClick={() => handleMenu(index)}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  {menu === index && (
                    <div className="menu">
                      {/* {!constructor && (
                        <> */}
                      <p
                        onClick={() => {
                          openModal();
                          setSelectedProject(value.id);
                        }}
                      >
                        Mettre à jour
                      </p>
                      <div className="horizontal__line"></div>
                      {/* </>
                      )} */}
                      <p>Effacer</p>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProfileTable;
