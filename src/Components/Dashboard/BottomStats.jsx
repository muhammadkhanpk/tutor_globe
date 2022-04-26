import React from "react";
import "./bottomstats.style.css";

// components
import BarChart from "./BarChart";

// icon
import Icon4 from "../../Assets/SVG/Dashboard/icon-4.svg";
import Icon5 from "../../Assets/SVG/Dashboard/icon-5.svg";
import icon__5 from "../../Assets/SVG/Dashboard/teacher .png";

import { FaChalkboardTeacher } from "react-icons/fa";
// firebase

import useUsers from "../../hooks/useUsers";

const BottomStats = () => {
  const { users } = useUsers("Users");
  return (
    <div className="bottom__stats">
      <div className="left__side">
        <BarChart />
      </div>
      <div className="right__side">
        <div className="inner__box">
          <div className="icon icon__5">
            {/* <i className="cil-chalkboard-teacher"></i> */}
            <img src={icon__5} alt="icon5" />
          </div>
          <div className="data">
            <h2>
              Number of total Users
              {/* Nombre total de constructeurs */}
            </h2>
            <h1>{users ? users.length : 0} Users</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomStats;
