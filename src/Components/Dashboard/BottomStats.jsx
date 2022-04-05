import React from "react";
import "./bottomstats.style.css";

// components
import BarChart from "./BarChart";

// icon
import Icon4 from "../../Assets/SVG/Dashboard/icon-4.svg";
import Icon5 from "../../Assets/SVG/Dashboard/icon-5.svg";
import icon__5 from "../../Assets/SVG/Dashboard/teacher .png";

import { FaChalkboardTeacher } from "react-icons/fa"
// firebase
import useCount from "../../hooks/useCount";
import useParents from "../../hooks/useParents";
import useTutors from "../../hooks/useTutors";

const BottomStats = () => {
  const { clients, constructors } = useCount("user_profile");
  const { parents } = useParents("Parents");
  const { tutors } = useTutors("Parents");
  return (
    <div className="bottom__stats">
      <div className="left__side">
        <BarChart />
      </div>
      <div className="right__side">
        <div className="inner__box">
          <div className="icon icon__4">
            <img src={Icon4} alt="icon4" />
          </div>
          <div className="data">
            <h2>
Number of Total Parents
            {/* Nombre total de clients */}

            </h2>
            <h1>{parents ? parents.length : 0} Parents</h1>
          </div>
        </div>
        <div className="inner__box">
          <div className="icon icon__5">
          {/* <i className="cil-chalkboard-teacher"></i> */}
            <img  src={icon__5} alt="icon5" />
          </div>
          <div className="data">
            <h2>
            Number of total Tutors
            {/* Nombre total de constructeurs */}
            </h2>
            <h1>{tutors ? tutors.length : 0} Tutors</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomStats;
