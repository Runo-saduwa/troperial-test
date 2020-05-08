import React from 'react';
import './BackDrop.css';
import VerifiedNotification from '../VerifiedNotification/VerifiedNotification';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import PostTrade from '../PostTrade/PostTrade';
const BackDrop = ({ handleBackDrop }) => {
  return (
    <div className="backdrop">
      <div
        className="backdrop__background"
        onClick={handleBackDrop}
      ></div>
      <div className="backdrop__content-container">
        <div className="mobile__close-btn-container">
          <button onClick={handleBackDrop}>X</button>
        </div>
        {/* <UpdateProfile/> */}
        <PostTrade/>
        {/* <VerifiedNotification/> */}
      </div>
    </div>
  );
};

export default BackDrop;
