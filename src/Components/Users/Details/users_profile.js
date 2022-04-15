import React, { useState, useEffect } from "react";
// import "./user_profile.css";
import useUser from "../../../hooks/userUser";
import { useParams } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import { useHistory } from "react-router-dom";

//firebase
import { ref, child, get, set, update, remove } from "firebase/database";
import { database } from "../../../firebase";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  const { userId } = useParams();
  const { user } = useUser(userId);
  const history = useHistory();
  async function DeleteUser(id) {
    if (window.confirm("Are u sure to delete")) {
      await remove(child(ref(database), "Users/" + userId + "/user"))
        .then(() => {
          history.goBack();
          alert("Delete user Successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div>
      <div className="p_header_div">
        <span>
          <button
            className="btn danger"
            onClick={() => {
              DeleteUser(user.uid);
            }}
          >
            Delete
          </button>
        </span>
      </div>
      <div className="main-body">
        <div className="profile_main_body">
          <div className="p_pic_card">
            <div className="card">
              <div className="card-body pic_card_body">
                <div className="d-flex flex-column align-items-center text-center img_div">
                  <div className="rofile_pic_div">
                    {!user.Profile_Image ? (
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="user"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                    ) : (
                      <img
                        width={150}
                        height={150}
                        src={user.Profile_Image}
                        alt="https://bootdey.com/img/Content/avatar/avatar7.png"
                      />
                    )}
                  </div>

                  <div className="mt-3">
                    <h4>{user.Name}</h4>
                    <p className="text-secondary mb-1">{user.Email}</p>
                    <p className="text-muted font-size-sm">{user.City}</p>
                    {/* <button className="btn btn-primary bg-warning">Follow</button> */}
                    {/* <button className="btn btn-outline-primary danger"  onClick={()=>{DeleteUser(user.id)}}>
                      Delete
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p_detail_card">
            <div className="card mb-3">
              <div className="card-body detail_card_body">
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Full Name</h5>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.Name}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.Email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">City</h5>
                  </div>
                  <div> </div>
                  <div className="col-sm-9 text-secondary">{user.City}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    {/* <button className="btn">Edit</button> */}
                    {/* <a
                      className="btn btn-info "
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                    >
                      Edit
                    </a> */}
                    <span>
                      <button
                        className="btn"
                        onClick={() =>
                          history.push("/users/liberaries/" + user.uid)
                        }
                      >
                        View Scrap Book Liberaries
                      </button>
                    </span>
                    <span>
                      <button
                        className="btn"
                        onClick={() =>
                          history.push("/users/country_checklist/" + user.uid)
                        }
                      >
                        Country Checklist
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
