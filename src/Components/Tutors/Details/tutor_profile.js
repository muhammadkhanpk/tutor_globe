import React, { useState, useEffect } from "react";
// import "./tutor_profile.css";

import { useParams } from "react-router-dom";
import useTutor from "../../../hooks/useTutor";
import { useHistory } from "react-router-dom";

//firebase
import { ref, child, get, set, update, remove } from "firebase/database";
import { database } from "../../../firebase";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  const { userId } = useParams();
  const { tutor } = useTutor(userId);

  const history = useHistory();
  async function DeleteUser(id) {
    if (window.confirm("Are u sure to delete")) {
      await remove(child(ref(database), "Tutors/" + userId + "/user"))
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
              DeleteUser(tutor.uid);
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
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="rofile_pic_div">
                    {!tutor.Profile_Image ? (
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="tutor"
                        className="rounded-circle"
                        width={150}
                      />
                    ) : (
                      <img
                        width={150}
                        src={tutor.Profile_Image}
                        alt="profile"
                      />
                    )}
                  </div>
                  <div className="mt-3">
                    <h4>
                      {tutor.FirstName} {tutor.LastName}
                    </h4>
                    <p className="text-secondary mb-1">{tutor.Level}</p>
                    <p className="text-muted font-size-sm">
                      {tutor.Monthly_Price}
                    </p>
                    {/* <button className="btn btn-primary bg-warning">Follow</button> */}
                    {/* <button
                      className="btn btn-outline-primary danger"
                      onClick={() => {
                        DeleteUser(tutor.uid);
                      }}
                    >
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
                  <div className="col-sm-9 text-secondary">
                    {tutor.FirstName} {tutor.LastName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>
                  <div className="col-sm-9 text-secondary">{tutor.Email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Phone</h5>
                  </div>
                  <div> </div>
                  <div className="col-sm-9 text-secondary">{tutor.PhoneNo}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Gender</h5>
                  </div>
                  <div className="col-sm-9 text-secondary">{tutor.Gender}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Address</h5>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {tutor.BusinessAddress}
                  </div>
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
