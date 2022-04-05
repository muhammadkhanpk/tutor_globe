import React from "react";
import "./countbox.style.css";

// svg and icons
import Icon1 from "../../Assets/SVG/Dashboard/icon-1.svg";
import Icon2 from "../../Assets/SVG/Dashboard/icon-2.svg";
import Icon3 from "../../Assets/SVG/Dashboard/icon-3.svg";

// firebase
import useCount from "../../hooks/useCount";
import useParents from "../../hooks/useParents";
import useTutors from "../../hooks/useTutors";
const CountBox = () => {
  const { pendingProjects, activeProjects, reviewdProjects } =
    useCount("user_profile");
    const { parents } = useParents("Parents");
    const { tutors } = useTutors("Parents");

  let activeP=tutors.filter(e => e.user.Status==="active");
  let pendingP=tutors.filter(e => e.user.Status==="pending");

    const profilesHook={
      pendingTutorProfiles:pendingP.length,
      activeTutorProfiles:activeP.length,
      allTutorProfiles:tutors.length,
      allParentsProfiles:parents.length,
      BanProfiles:3,
      active:7,
    }
  return (
    <div>
    <div className="count__box">

      <div className="inner__box">
        <div className="icon icon__1">
          <img src={Icon1} alt="icon1" />
        </div>
        <div className="data">
          <h2>Pending Tutor Profiles</h2>
          <h1>{profilesHook.pendingTutorProfiles}</h1>
        </div>
      </div>

      <div className="vertical__line"></div>

      <div className="inner__box">
        <div className="icon icon__2">
          <img src={Icon2} alt="icon2" />
        </div>
        <div className="data">
          <h2>Active Tutor Profiles</h2>
          <h1>{profilesHook.activeTutorProfiles}</h1>
        </div>
      </div>
      <div className="vertical__line"></div>
      <div className="inner__box">
  <div className="icon icon__3">
    <img src={Icon3} alt="icon3" />
  </div>
  <div className="data">
    <h2>Tutor All Profiles</h2>
    <h1>{profilesHook.allTutorProfiles}</h1>
  </div>
</div>


<div className="vertical__line"></div>
<div className="inner__box">
        <div className="icon icon__3">
          <img src={Icon3} alt="icon3" />
        </div>
        <div className="data">
          <h2>Parents All Profiles</h2>
          <h1>{profilesHook.allParentsProfiles}</h1>
        </div>
      </div>
    </div>






    </div>
  );
};

export default CountBox;
