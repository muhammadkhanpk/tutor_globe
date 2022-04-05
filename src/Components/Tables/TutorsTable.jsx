import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./table.style.css";

// images
import Profile2 from "../../Assets/Images/Profile2.png";
//firebase
import { ref, child, get, set, update, remove } from "firebase/database";
import { database } from "../../firebase";
import { useHistory } from "react-router-dom";
const ConstructorTable = ({ data, currentPage, itemsPerPage, searchName }) => {
  const [menu, setMenu] = useState(null);

  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };

  const pageVisited = (currentPage - 1) * itemsPerPage;
  const history = useHistory();
  async function DeleteUser(id) {
    if (window.confirm("Are u sure to delete")) {
      await remove(child(ref(database), "Tutors/" + id + "/user"))
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
    <div className='table__container'>
      <ul className='responsive-table'>
        <li className='table-header'>
          <div className='col col-4'>Tutor Name</div>
          <div className='col col-2'>E-mail</div>
          <div className='col col-2'>PhoneNo</div>
          <div className='col col-2'>Level</div>
          <div className='col col-1'>Action</div>
        </li>
        {data &&
          data
            .filter((val) => {
              if (searchName == "") {
                return val;
              } else if (
                val.user.FirstName.toLowerCase().includes(
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
              return (
                <li className='table-row' key={index}>
                  <div className='col col-4 flex' data-label='Tutor Name'>
                    {!value.user.Profile_Image ? (
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar7.png'
                        alt='Tutor'
                        className='rounded-circle'
                        width={50}
                      />
                    ) : (
                      <img src={value.user.Profile_Image} alt='profile' />
                    )}
                    <p>
                      {" "}
                      {value.user.FirstName ? value.user.FirstName : "No Name"}
                    </p>
                  </div>
                  <div className='col col-2' data-label='E-mail'>
                    {value.user.Email ? value.user.Email : "No e-mail"}
                  </div>
                  <div className='col col-2' data-label='Phone No'>
                    {value.user.PhoneNo
                      ? value.user.PhoneNo
                      : "No Phone Number"}
                  </div>
                  <div className='col col-2' data-label='Level'>
                    {/* {new Date().toLocaleString()} */}
                    {/* {new Date().toDateString()} */}
                    {value.user.Level ? value.user.Level : "No Level defined"}
                    {/* {value.createdAt &&
                      new Date(value.createdAt.toDate()).toDateString()} */}
                  </div>
                  <div className='col col-1' data-label='Action'>
                    <div
                      className='menu__dots'
                      onClick={() => handleMenu(index)}
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    {menu === index && (
                      <div className='menu'>
                        <p>
                          <Link to={`tutors/${value.user.uid}`}>
                            View Profile
                          </Link>
                        </p>
                        <div className='horizontal__line'></div>
                        <button
                          className='btn danger'
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

export default ConstructorTable;
