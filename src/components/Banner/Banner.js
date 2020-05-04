import React from 'react';
import './Banner.css';
import CustomButtom from '../CustomButton/CustomButton';
import icon from '../../assets/images/reset-password-svg.PNG'

const Banner = () => {
    return (
        <div className="banner__container">
            <div className="banner__textContent">
                <h2>Post A Listing</h2>
                <p>The quick, fairer way to exchange currencies across borders</p>
                <CustomButtom loading={false} width="100px" fontSize="12px" padding="10px">Post a Listing</CustomButtom>
            </div>
            <div className="banner__image">
              <img src={icon} alt="banner image"/>
            </div>
        </div>
    )
}

export default Banner
