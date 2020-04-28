import React from 'react'
import OnboardingContainer from '../components/OnboardingContainer/OnboardingContainer';
import OnboardingAside from '../components/OnboardingAside/OnboardingAside';
import OnboardingMain from '../components/OnboardingMain/OnboardingMain';
import OnboardingNotification from '../components/OnboardingNotification/OnboardingNotification';
import OnboardingFormContainer from '../components/OnboardingFormContainer/OnboardingFormContainer';
import OnboardingFooter from '../components/OnboardingFooter/OnboardingFooter'
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import img from './../assets/images/Logo.png'
import {Link} from 'react-router-dom';

import forgotpasswordIllustration from '../assets/images/forgot-password-svg.PNG';
import notificationIcon from '../assets/images/reset-password-illus.PNG'

export default function ResetPassword() {
    return (
        <OnboardingContainer>
            <OnboardingAside illustration={forgotpasswordIllustration}/>
            <OnboardingMain>
                {/* <OnboardingFormContainer>
                    <ContentContainer>
                        <img src={img} alt=""/>
                        <h2>Set a password</h2>
                        <p>Make sure to set a password that's<br/> unique to you, difficult and not easy to guess</p>
                    </ContentContainer>
                    <form action="">
                     <CustomInput label="New Password" placeholder="New Password"/>
                     <CustomInput label="Confirm Password" placeholder="Confirm Password"/>
                     <CustomButton>Set Password</CustomButton>
                    </form>
                        <ContentContainer>
                        <p className="custom-cta">Remember Your Password? <Link to="/signin">Sign In</Link></p>
                        </ContentContainer>
                </OnboardingFormContainer> */}
                 <div>
                    <OnboardingNotification notificationIcon={notificationIcon} title="Your Password's been reset!" message="Now you can get back into your account to make the trades you want.">
                    <CustomButton>Get back in</CustomButton>
                    </OnboardingNotification>
                 </div>
                <OnboardingFooter/>
            </OnboardingMain>
        </OnboardingContainer>
    )
}
