import React from 'react'
import PropTypes from 'prop-types'
import img from '../../assets/images/troperial-money-bag.PNG'
import troperialLogo from '../../assets/images/Logo.png'
import './OnboardingAside.css';

const OnboardingAside = ({illustration}) => {
    return (
        <aside className="onboardingContainer__aside">
           <div className="onboardingContainer__aside-top">
            <img className="onboardingContainer__troperialLogo" src={troperialLogo}/>
            <h3>
                Exchange money <img src={img} alt="money-bag"/>,<br/>
                no matter where you are.
            </h3>
           </div>
           <div className="onboardingContainer__aside-bottom">
               <img src={illustration} alt="troperial-illustration"/>
           </div>
        </aside>
    )
}

OnboardingAside.propTypes = {

}

export default OnboardingAside
