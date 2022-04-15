import React from "react";
import { useLocation } from "react-router-dom";

import "./questions.css";
function Questions({ countryName }) {
  const location = useLocation();
  //console.log(location.state);
  return (
    <>
      <div className="country">
        <h1>{location.state}</h1>
      </div>
      <div class="question_box">
        <span>What is Your Favourite Place here?</span>
        <input type="checkbox" />
      </div>
      <div class="question_box">
        <span>What is Your You favourite food here?</span>
        <input type="checkbox" />
      </div>
      <div class="question_box">
        <span>What is Your Favourite university here?</span>
        <input type="checkbox" />
      </div>
      <div class="question_box">
        <span>What is Your Favourite sports here?</span>
        <input type="checkbox" />
      </div>
      <div class="question_box">
        <span>What is Your Favourite personality here?</span>
        <input type="checkbox" />
      </div>
    </>
  );
}

export default Questions;
