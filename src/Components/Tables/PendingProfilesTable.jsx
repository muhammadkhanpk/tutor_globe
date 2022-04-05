import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./table.style.css";
import { ref, child, get, set, update, remove } from "firebase/database";
import { database } from "../../firebase";
// images
import Profile2 from "../../Assets/Images/Profile2.png";
import { useHistory } from "react-router-dom";
const ProjectsTable = ({
  data,
  openModal,
  openCommantriesModal,
  itemsPerPage,
  currentPage,
  setClientId,
  setProjectId,
  setClientName,
  userName,
  projectName,
  // status,
  date,
  searchName,
}) => {
  const [menu, setMenu] = useState(null);
  console.log(data);
  const [status, setStatus] = useState("");

  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };

  const compareDate = (date1, date2) => {
    if (date1 && date2) {
      const formatedDate = new Date(date1.toDate()).toDateString();
      const formatedDate2 = new Date(date2.toString()).toDateString();

      if (formatedDate === formatedDate2) {
        return true;
      }
    }
  };

  const pageVisited = (currentPage - 1) * itemsPerPage;
const history=useHistory();
  async function updatemyData(id,value) {
    await update(child(ref(database), "Tutors/" + id + "/user"), {
      Status: value,
    }).then(()=>{
      let path=window.location.pathname;
      // alert("status changed ");
      history.push(path);

    })

  }
  async function DeleteUser(id) {

    if( window.confirm("Are u sure to delete")){
      await remove(child(ref(database), "Tutors/" + id + "/user"))
      .then(()=>{
        let path=window.location.pathname;
        alert("Delete Successfully!");
        history.push(path);

      })
      .catch((error) => {
        console.log(error);
      });
    }

  }
  return (
    <div className="table__container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-2">Name of user</div>
          <div className="col col-2">Email</div>
          <div className="col col-3">Status</div>
          <div className="col col-2">Phone No</div>
          <div className="col col-1">Action</div>
        </li>
        {data &&
          data
            .filter((val) => {
              if (searchName == "") {
                return val;
              } else if (
                val.user.FirstName.toLowerCase().includes(
                  searchName.toLowerCase()
                ) ||
                val.user.Email.toLowerCase().includes(searchName.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(
              ...(searchName
                ? [0, data.length]
                : [pageVisited, pageVisited + itemsPerPage])
            )

            .map((value, index) => {
              return (
                <li className="table-row" key={index}>
                  <div
                    className="col col-4 flex "
                    data-label="Name"
                  >
                    {!value.user.Profile_Image ? (
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Parent"
                        className="rounded-circle"
                        width={50}
                      />
                    ) : (
                      <img src={value.user.Profile_Image} alt="profile" />
                    )}

                    <p>{value.user.FirstName && value.user.FirstName}</p>
                  </div>
                  <div className="col col-2" data-label="Email">
                    {value.user.Email}
                  </div>
                  <div className="col col-3" data-label="Status">
                    {value.user.Status === "active" ? (
                      <p className="status success">Active</p>
                    ) : value.user.Status === "reject" ? (
                      <p className="status warning">Reject</p>
                    ) : value.user.Status === "pending" ? (
                      <p className="status primary">Pending</p>
                    ) : (
                      <p className="status warning">No Status</p>
                    )}
                  </div>
                  <div className="col col-2" data-label="Phone No">
                    {value.user.PhoneNo}
                    {/* {value.project.date_time
                      ? new Date(
                          value.project.date_time.toDate()
                        ).toDateString()
                      : new Date(
                          value.project.createdAt.toDate()
                        ).toDateString()} */}
                  </div>
                  <div className="col col-1" data-label="Action">
                    <div
                      className="menu__dots"
                      onClick={() => handleMenu(index)}
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    {menu === index && (
                      <div className="menu">
                        <p>
                          <Link to={`pending_profiles/${value.user.uid}`}>
                            View Profile
                          </Link>
                        </p>
                        <div className="horizontal__line"></div>
                        {/* <p
                          onClick={() => {
                            openCommantriesModal();
                            setProjectId(value.projectId);
                            setClientId(value.client.id);
                            setClientName(
                              value.client.first_name +
                                " " +
                                value.client.last_name
                            );
                          }}
                        >
                          Voir les commentaires
                        </p> */}

                        <p>
                          <label class="custom-select">
                            <select
                              className="select"
                              name="options"
                              onChange={(e) => {
                                setStatus(e.target.value);
                                updatemyData(value.user.uid,e.target.value);
                              }}
                            >
                              <option value="0">{"Change Status"}</option>
                              <option value="pending">Pending</option>
                              <option value="reject">Reject</option>
                              <option value="active">Active</option>
                            </select>
                          </label>
                        </p>

                        <div className="horizontal__line"></div>

                        {/* <p
                          onClick={() => {
                            openModal();
                            setProjectId(value.projectId);
                            setClientId(value.client.id);
                          }}
                        >
                          Aperçu du projet
                        </p>
                        <div className="horizontal__line"></div>

                        */}
                        <button
                          className="btn danger"
                          onClick={() => {
                            DeleteUser(value.user.uid);
                          }}
                        >
                          Delete
                        </button>
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

export default ProjectsTable;

{
  /* data.length > 0 &&
          data
            .filter((val) => {
              if (
                userName == "" &&
                projectName === "" &&
                status === "" &&
                date === ""
              ) {
                return val;
              } else if (

                val.project &&
                compareDate(
                  val.project.date_time
                    ? val.project.date_time
                    : val.project.createdAt,
                  date
                ) &&
                val.client &&
                val.client.first_name &&
                val.client.first_name
                  .toLowerCase()
                  .includes(userName.toLowerCase()) &&
                val.project &&
                val.project.name_of_project &&
                val.project.name_of_project
                  .toLowerCase()
                  .includes(projectName.toLowerCase()) &&
                val.project &&
                val.project.project_status &&
                val.project.project_status
                  .toLowerCase()
                  .includes(status.toLowerCase())


              )
              {
                return val;
              }
            })
            .slice(
              ...(userName || projectName || status || date
                ? [0, data.length]
                : [pageVisited, pageVisited + itemsPerPage])
            ) */
}
