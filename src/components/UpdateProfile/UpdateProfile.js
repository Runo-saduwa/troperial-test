import React from 'react';
import './UpdateProfile.css';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import profileImg from '../../assets/images/troperial-profile-aside.PNG';
const UpdateProfile = () => {
  return (
    <form className="backdrop__form" action="">
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
      <CustomButton loading={false}>Update Profile</CustomButton>
    </form>
  );
};

export default UpdateProfile;
