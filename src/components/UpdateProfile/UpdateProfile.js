import React from 'react';
import './UpdateProfile.css';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import profileImg from '../../assets/images/troperial-profile-aside.PNG';
const UpdateProfile = ({onClick}) => {
  return (
    <div className="backdrop__form" action="">
      <div className="backdrop__profile-heading">
        <img src={profileImg} alt="update profile" />
        <h2>Update Your profile to post your first listing</h2>
      </div>
      <div className="backdrop__form--grid-input">
        <CustomInput
          name="firstname"
          type="text"
          label="First name"
          placeholder="First name"
        />
        <CustomInput
          name="lastname"
          type="text"
          label="Last name"
          placeholder="Last name"
        />
      </div>
      <p className="firstname_lastname_assurance">Providing Your name is for identity purposes, we would not share this with anyone.</p>
      <CustomInput
        name="username"
        type="text"
        label="Username"
        placeholder="Username"
        hint="Any listings you post will bear this username"
      />
      <CustomInput
        name="Phone Number"
        type="text"
        label="Phone Number"
        placeholder="Phone Number"
      />
      <CustomButton loading={false} onClickHandler={onClick}>Update Profile</CustomButton>
    </div>
  );
};

export default UpdateProfile;
