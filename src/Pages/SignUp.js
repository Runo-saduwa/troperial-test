import React from 'react'
import OnboardingContainer from '../components/OnboardingContainer/OnboardingContainer';
import OnboardingAside from '../components/OnboardingAside/OnboardingAside';
import OnboardingMain from '../components/OnboardingMain/OnboardingMain';
import OnboardingFormContainer from '../components/OnboardingFormContainer/OnboardingFormContainer';
import OnboardingFooter from '../components/OnboardingFooter/OnboardingFooter'
import OnboardingNotification from '../components/OnboardingNotification/OnboardingNotification';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import ContentContainer from '../components/ContentContainer/ContentContainer';

import notificationIcon from '../assets/images/troperial-email-illus.PNG'

import img from './../assets/images/Logo.png'
import troperialSvg from '../assets/images/reset-password-svg.PNG'

export default function SignUp() {
    return (
        <OnboardingContainer>
            <OnboardingAside illustration={troperialSvg}/>
            <OnboardingMain>
            <OnboardingFormContainer>
                    <ContentContainer>
                        <img src={img} alt=""/>
                        <h2>Create a <span className="troperial-green">Troperial</span> Account</h2>
                        <p>Create an account to gain access to a quick &amp; secure way to exchange currencies.</p>
                    </ContentContainer>
                    <form action="">
                     <CustomInput label="Email" placeholder="Email"/>
                     <CustomInput label="Password" placeholder="Password"/>
                     <CustomInput label="Password" placeholder="Confirm Your Password"/>
                     <CustomButton>Create An Account</CustomButton>
                    </form>
                        <ContentContainer>
                        <p className="custom-cta">already got an account? <a href="#">Sign In</a></p>
                        </ContentContainer>
                </OnboardingFormContainer>

                {/* <div>
                    <OnboardingNotification notificationIcon={notificationIcon} title="Check your email" message="click the link on the email we sent to you to verify your account"/>
                </div> */}
                <OnboardingFooter/>
            </OnboardingMain>
            
        </OnboardingContainer>
    )
}
