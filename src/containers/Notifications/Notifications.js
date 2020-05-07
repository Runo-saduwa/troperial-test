import React, {useState} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Notifications.css';


import Notification from '../../components/Notification/Notification';

import ListingsAside from '../../components/ListingsAside/ListingsAside';
import ListingsMain from '../../components/ListingsMain/ListingsMain';

import verfiedNotification from '../../components/VerifiedNotification/VerifiedNotification';
import HybridInput from '../../components/HybridInput/HybridInput';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import profileImg from '../../assets/images/troperial-profile-aside.PNG';
import VerifiedNotification from '../../components/VerifiedNotification/VerifiedNotification';
import { Route, Switch } from 'react-router-dom';
const Notifications = () => {
    const [showBackDrop, setShowBackDrop] = useState(false);
    const handleBackDrop = () => {
      const show = showBackDrop;
      setShowBackDrop(!show);
    };
    const renderBackDrop = () => {
        return (
          <div className="backdrop">
            <div
              class="backdrop__background"
              onClick={handleBackDrop}
            ></div>
            <div className="backdrop__form-container">
              {/* <VerifiedNotification/> */}
              <div className="post__listing-container">
                <h2>Post a Listing</h2>
                <HybridInput line={true}/>
                <HybridInput line={true}/>
    
                <h4>Prefferd exchange rate</h4>
                <HybridInput />
                <div>
                </div>
                <HybridInput />
    
                <CustomButton loading={false}>
                  Post this Trade
                </CustomButton>
    
              </div>
              {/* <form className="backdrop__form" action="">
                <div className="backdrop__profile-heading">
                  <img src={profileImg} alt="update profile" />
                  <h2>Update Your profile to post your first listing</h2>
                </div>
                <div className="backdrop__form--grid-input">
                  <CustomInput
                    name="firstname"
                    type="text"
                    label="First name"
                    placeholder="first name"
                  />
                  <CustomInput
                    name="lastname"
                    type="text"
                    label="lastname"
                    placeholder="last name"
                  />
                </div>
                <CustomInput
                  name="username"
                  type="text"
                  label="username"
                  placeholder="username"
                  hint="Any listings you post will bear this username"
                />
                <CustomInput
                  name="Phone Number"
                  type="text"
                  label="Phone Number"
                  placeholder="Phone Number"
                />
                <CustomButton loading={false}>
                  Update Profile
                </CustomButton>
              </form> */}
            </div>
          </div>
        );
      };
  return (
    <div
      className={`notications__container ${
        showBackDrop ? 'maxHeight' : 'minHeight'
      }`}
    >
      <NavBar />
      {showBackDrop ? renderBackDrop() : null}
      <div className="notificationsCustom__container">
        <ListingsAside onClick={handleBackDrop} />
        <ListingsMain>
        <h2>Notifications</h2>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        </ListingsMain>
      </div>
    </div>
  );
};
export default Notifications;
