import React from 'react'
import OnboardingContainer from '../components/OnboardingContainer/OnboardingContainer';
import OnboardingAside from '../components/OnboardingAside/OnboardingAside';
import OnboardingMain from '../components/OnboardingMain/OnboardingMain';
import OnboardingFormContainer from '../components/OnboardingFormContainer/OnboardingFormContainer';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import img from './../assets/images/Logo.png'

import forgotpasswordIllustration from '../assets/images/forgot-password-svg.PNG';
import {Link} from "react-router-dom"
import OnboardingFooter from '../components/OnboardingFooter/OnboardingFooter';
export default function ForgotPassword() {
    return (
        <OnboardingContainer>
            <OnboardingAside illustration={forgotpasswordIllustration}/>
            <OnboardingMain>
                <OnboardingFormContainer>
                    <ContentContainer>
                        <img src={img} alt=""/>
                        <h2>Forgot Your Password</h2>
                        <p>Enter your Troperial email address and we'll<br/> send you a link to reset your password</p>
                    </ContentContainer>
                    <form action="">
                     <CustomInput label="Email Address" placeholder="Email Address"/>
                     <CustomButton>Reset Password</CustomButton>
                    </form>
                        <ContentContainer>
                        <p class="sendToNewPage">Remember Your password? <Link to="/signin">Sign In</Link></p>
                        </ContentContainer>
                </OnboardingFormContainer>
                <OnboardingFooter/>
            </OnboardingMain>
        </OnboardingContainer>
    )
}
