import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConstructorModal from "../Modals/userModal";
import "./table.style.css";

// images
import Profile2 from "../../Assets/Images/Profile2.png";
import { RiHeartsFill } from "react-icons/ri";

//firebase
import { ref, child, get, set, update, remove } from "firebase/database";
import { database } from "../../firebase";
import { useHistory } from "react-router-dom";
const ClientTable = ({ data, itemsPerPage, currentPage, searchName }) => {
  const [menu, setMenu] = useState(null);
  const [modal, setModal] = useState(false);

  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };
  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  const pageVisited = (currentPage - 1) * itemsPerPage;
  const history = useHistory();
  async function DeleteUser(id) {
    if (window.confirm("Are u sure to delete")) {
      await remove(child(ref(database), "Users/" + id))
        .then(() => {
          let path = window.location.pathname;
          alert("Delete Successfully!");
          history.push(path);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <div className="table__container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-4">Name</div>
            <div className="col col-2">Email</div>

            <div className="col col-2">City</div>
            <div className="col col-1">Action</div>
          </li>

          {data &&
            data
              .filter((val) => {
                if (searchName == "") {
                  return val;
                } else if (
                  val.Profile.Name.toLowerCase().includes(
                    searchName.toLowerCase()
                  ) ||
                  val.Profile.Email.toLowerCase().includes(
                    searchName.toLowerCase()
                  )
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
                //console.log("value data", value);
                return (
                  <li className="table-row" key={index}>
                    <div className="col col-4 flex" data-label="Parent Name">
                      {!value.Profile.ScrapPicture ? (
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Parent"
                          className="rounded-circle"
                          width={50}
                        />
                      ) : (
                        <img
                          src={value.Profile.ScrapPicture}
                          alt="profile"
                          className="rounded-circle"
                        />
                      )}

                      <p>
                        {value.Profile.Name ? value.Profile.Name : "No Name"}
                      </p>
                    </div>
                    {/* <div className="col col-2" data-label="Nom de famille">
                    {value.last_name ? value.last_name : "Non Nom de famille"}
                  </div> */}
                    <div className="col col-2" data-label="Email">
                      {value.Profile.Email ? value.Profile.Email : "No  Email"}
                    </div>
                    <div className="col col-2" data-label="Téléphone">
                      {value.Profile.City ? value.Profile.City : "No City"}
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
                            <Link to={`users/${value.Profile.uid}`}>
                              View Profile
                            </Link>
                          </p>
                          <p>
                            <Link to={`users/liberaries/${value.Profile.uid}`}>
                              View Libraries
                            </Link>
                          </p>
                          <div className="horizontal__line"></div>
                          <button
                            className="btn danger"
                            onClick={() => {
                              DeleteUser(value.Profile.uid);
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
    </>
  );
};

export default ClientTable;
