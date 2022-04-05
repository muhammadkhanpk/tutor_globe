import React, { useState } from "react";
import "./constructormodal.style.css";
import { AiFillCloseSquare } from "react-icons/ai";
// components

// firebase
import { createConstructor } from "../../API/API";

const ConstructorModal = ({ setModal, data }) => {
  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div className='overlay__background' onClick={closeModal}></div>
      <div className='constructor__modal'>
        <div className='close-icon'>
          <button className='btn btn-outline-dark btn-sm' onClick={closeModal}>
            x
          </button>
        </div>

        <h1>Wishlist</h1>
        <div className='select__area'>
          {Object.values({ data }).map((item, index) => {
            console.log(item);
            return (
              <div key={index} className='img-size'>
                <img
                  className='img-fluid'
                  src={item.Picture}
                  alt='wishList-image'
                />

                <div className='row'>
                  <div className='col-sm-3'>
                    <h5 className='mb-0'>Name</h5>
                  </div>
                  <div className='col-sm-9 text-secondary'>{item.Name}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h5 className='mb-0'>GlobeExpedition</h5>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    {item.GlobeExpedition}
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h5 className='mb-0'>Description</h5>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    {item.Description}
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ConstructorModal;
