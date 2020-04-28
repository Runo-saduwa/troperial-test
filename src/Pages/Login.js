import React from 'react'
import OnboardingContainer from '../components/OnboardingContainer/OnboardingContainer';
import OnboardingAside from '../components/OnboardingAside/OnboardingAside';
import OnboardingMain from '../components/OnboardingMain/OnboardingMain';
import OnboardingFooter from '../components/OnboardingFooter/OnboardingFooter'
import OnboardingFormContainer from '../components/OnboardingFormContainer/OnboardingFormContainer';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

import ContentContainer from '../components/ContentContainer/ContentContainer';
import img from './../assets/images/Logo.png'
import SignInSvg from '../assets/images/troperial-sign-in-svg.PNG'
import {Link} from 'react-router-dom'
export default function SignIn() {
    return (
        <OnboardingContainer>
            <OnboardingAside illustration={SignInSvg}/>
            <OnboardingMain>
                <OnboardingFormContainer>
                    <ContentContainer>
                        <img src={img} alt=""/>
                        <h2>Sign In to <span className="troperial-green">Troperial</span></h2>
                        <p>Enter your email address and password<br/> to sign in to Troperial</p>
                    </ContentContainer>
                    <form action="">
                     <CustomInput label="Email" placeholder="Email"/>
                     <CustomInput label="Password" placeholder="Password"/>
                     <CustomButton>Sign In</CustomButton>
                    </form>
                        <ContentContainer>
                        <p className="custom-cta">Forgot Your Password? <Link to="/forgotpassword">Click here</Link></p>
                        <p className="custom-cta">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </ContentContainer>
                </OnboardingFormContainer>
                <OnboardingFooter/>
            </OnboardingMain>
        </OnboardingContainer>
    )
}
