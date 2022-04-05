import React, { useState, useEffect, useLayoutEffect } from "react";
import "./profile.css";

import { useParams } from "react-router-dom";
//hooks
import useTutor from "../../../../hooks/useTutor";
import useProfileDetail from "../../../../hooks/useProjectDetail";
//components
import SelectField from "../../../../Components/InputFields/SelectField2";
import { statusOptions } from "../../../../Data/Data";

//firebase
import { ref, child, get, set, update, remove } from "firebase/database";
import { database } from "../../../../firebase";
import { useHistory } from "react-router-dom";
import Select from "react-select";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  // const [tutor, setTutor] = useState({});
  const history = useHistory();
  const { userId } = useParams();
  const { tutorProfile } = useProfileDetail(userId);
  // const { tutor } = useTutor(userId);
  let tutor = tutorProfile;
  const [status, setStatus] = useState(tutor.Status);
  const [disable, setDisable] = useState("false");

  // useEffect(() => {
  // tutor={...tutor}

  // }, {tutor})

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
  async function updatemyData(id, value) {
    await update(child(ref(database), "Tutors/" + id + "/user"), {
      Status: value,
    })
      .then(() => {
        // alert("status changed ");
        let path = window.location.pathname;
        history.push(path);
      })

      .catch((error) => {
        console.error(error);
      });
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
                    {/* <button className="btn btn-outline-primary danger"

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
                    <h5 className="mb-0">Status</h5>
                  </div>
                  <div className="col-sm-9 status_div text-secondary">
                    <span>{tutor.Status}</span>

                    <label class="custom-select ">
                      <select
                        className="select"
                        name="options"
                        onChange={(e) => {
                          setStatus(e.target.value);
                          updatemyData(tutor.uid, e.target.value);
                        }}
                      >
                        <option value="0">{"Change Status"}</option>
                        <option value="pending">Pending</option>
                        <option value="reject">Reject</option>
                        <option value="active">Active</option>
                      </select>
                    </label>
                  </div>
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
                {/* <div className="row">

                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
