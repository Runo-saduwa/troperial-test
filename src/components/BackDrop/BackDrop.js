import React, { useState } from 'react';
import './BackDrop.css';
import VerifiedNotification from '../VerifiedNotification/VerifiedNotification';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import PostTrade from '../PostTrade/PostTrade';
const BackDrop = ({ handleBackDrop }) => {
  const [step, setStep] = useState(1);

  const renderView = (step) => {
    if (step === 1) {
      return <UpdateProfile onClick={() => {setStep(2)}} />;
    } else if (step === 2) {
      return <VerifiedNotification onClick={() => setStep(3)} />;
    } else {
      return <PostTrade />;
    }
  };
  return (
    <div className="backdrop">
      <div
        className="backdrop__background"
        onClick={handleBackDrop}
      ></div>
      <div className="backdrop__content-container">
        <div className="mobile__close-btn-container">
          <button onClick={handleBackDrop}><i className="fas fa-times-circle"></i></button>
        </div>
        {renderView(step)}
      </div>
    </div>
  );
};

export default BackDrop;
