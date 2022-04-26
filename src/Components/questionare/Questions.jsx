import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import RadioButtonUncheckedSharpIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import "./questions.css";

function Questions({ countryName }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const location = useLocation();
  const { country } = location.state;
  const handleShow = () => {
    setShow(!show);
  };
  const handleShow2 = () => {
    setShow2(!show2);
  };
  const handleShow3 = () => {
    setShow3(!show3);
  };
  const handleShow4 = () => {
    setShow4(!show4);
  };
  const handleShow5 = () => {
    setShow5(!show5);
  };
  const handleShow6 = () => {
    setShow6(!show6);
  };
  const handleShow7 = () => {
    setShow7(!show7);
  };
  return (
    <>
      <div className="country">
        <h1>
          {country.Country} {Math.round(country.percentage)}%
        </h1>
      </div>
      <div class="question_box">
        <span>
          Made a friend or read about a person from here (Word box to write
          details)
        </span>
        <div className="qA">
          {country.madeFriend ? (
            <CheckCircleOutlineSharpIcon />
          ) : (
            <RadioButtonUncheckedSharpIcon />
          )}
          <button className="btn btn-success" onClick={handleShow}>
            {show ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {show && (
          <div className="qAns">
            {country.madeFriend_Data
              ? country.madeFriend_Data
              : "There is no answer available"}
          </div>
        )}
      </div>
      <div class="question_box">
        <span>Tried food (Word box to write details)</span>
        <div className="qA">
          {country.triedFood ? (
            <CheckCircleOutlineSharpIcon />
          ) : (
            <RadioButtonUncheckedSharpIcon />
          )}
          <button className="btn btn-success" onClick={handleShow2}>
            {show2 ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {show2 && (
          <div className="qAns">
            {country.triedFood_Data
              ? country.triedFood_Data
              : "There is no answer available"}
          </div>
        )}
      </div>
      <div class="question_box">
        <span>Watched a video (Word box to write details)</span>
        <div className="qA">
          {country.watchedAVideo ? (
            <CheckCircleOutlineSharpIcon />
          ) : (
            <RadioButtonUncheckedSharpIcon />
          )}
          <button className="btn btn-success" onClick={handleShow3}>
            {show3 ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {show3 && (
          <div className="qAns">
            {country.watchedAVideo_Data
              ? country.watchedAVideo_Data
              : "There is no answer available"}
          </div>
        )}
      </div>
      <div class="question_box">
        <span>Read for 30 minutes (Word box to write details)</span>
        <div className="qA">
          {country.readFor30Minutes ? (
            <CheckCircleOutlineSharpIcon />
          ) : (
            <RadioButtonUncheckedSharpIcon />
          )}
          <button className="btn btn-success" onClick={handleShow4}>
            {show4 ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {show4 && (
          <div className="qAns">
            {country.readFor30Minutes_Data
              ? country.readFor30Minutes_Data
              : "There is no answer available"}
          </div>
        )}
      </div>
      <div class="question_box">
        <span>Listened to a song (Word box to write details)</span>
        <div className="qA">
          {country.listenedToAsong ? (
            <CheckCircleOutlineSharpIcon />
          ) : (
            <RadioButtonUncheckedSharpIcon />
          )}
          <button className="btn btn-success" onClick={handleShow5}>
            {show5 ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {show5 && (
          <div className="qAns">
            {country.listenedToAsong_Data
              ? country.listenedToAsong_Data
              : "There is no answer available"}
          </div>
        )}
      </div>

      <div class="question_box">
        <span>Finished Digital Passport Scrapbook</span>
        <div className="qA">
          {country.finishedDigitalPassport ? (
            <CheckCircleOutlineSharpIcon />
          ) : (
            <RadioButtonUncheckedSharpIcon />
          )}
          <button className="btn btn-success" onClick={handleShow6}>
            {show6 ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {show6 && (
          <div className="qAns">
            {country.finishedDigitalPassport_Data
              ? country.finishedDigitalPassport_Data
              : "There is no answer available"}
          </div>
        )}
      </div>

      <div class="question_box">
        <span>Find best place of this city/country</span>
        <div className="qA">
          {country.findBestPlace ? (
            <CheckCircleOutlineSharpIcon />
          ) : (
            <RadioButtonUncheckedSharpIcon />
          )}
          <button className="btn btn-success" onClick={handleShow7}>
            {show7 ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {show7 && (
          <div className="qAns">
            {" "}
            {country.findBestPlace_Data
              ? country.findBestPlace_Data
              : "There is no answer available"}
          </div>
        )}
      </div>
    </>
  );
}
export default Questions;
