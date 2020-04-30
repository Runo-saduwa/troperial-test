import React, {useState} from 'react'
import OnboardingContainer from '../components/OnboardingContainer/OnboardingContainer';
import OnboardingAside from '../components/OnboardingAside/OnboardingAside';
import OnboardingMain from '../components/OnboardingMain/OnboardingMain';
import OnboardingFormContainer from '../components/OnboardingFormContainer/OnboardingFormContainer';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import img from './../assets/images/Logo.png'
import notificationIcon from '../assets/images/reset-password-illus.PNG'
import OnboardingNotification from '../components/OnboardingNotification/OnboardingNotification';
import forgotpasswordIllustration from '../assets/images/forgot-password-svg.PNG';
import {Link} from "react-router-dom"
import OnboardingFooter from '../components/OnboardingFooter/OnboardingFooter';
import {Auth} from 'aws-amplify';
import {useFormFields} from '../libs/useFormFields';
export default function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        code: ""
    });

    const handleEmailForm = async (e) => {
        e.preventDefault();
        try {
            await Auth.forgotPassword(fields.email);
            setStep(2);
        } catch(e) {
            console.log(e)
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if(fields.email.length < 0 && fields.code.length < 0 && fields.confirmPassword < 0) return '';
        try {
            await Auth.forgotPasswordSubmit(fields.email, fields.code, fields.password);
            console.log('success');
            setStep(4);
        } catch(e) {
            console.log(e)
        }
        
    }
    const renderEmailForm = () => {
        return (
            <OnboardingFormContainer>
                    <ContentContainer>
                        <img src={img} alt="troperial-logo"/>
                        <h2>Forgot Your Password</h2>
                        <p>Enter your Troperial email address and we'll<br/> send you a link to reset your password</p>
                    </ContentContainer>
                    <form action="" onSubmit={handleEmailForm}>
                    <CustomInput type="text" name="email" value={fields.email} onChange={handleFieldChange} label="Email" placeholder="Email"/>
                     <CustomButton loading={false}>Next</CustomButton>
                    </form>
                        <ContentContainer>
                        <p className="sendToNewPage">Remember Your password? <Link to="/signin">Sign In</Link></p>
                    </ContentContainer>
        </OnboardingFormContainer>
        )
    }

    const renderResetPasswordForm = () => {
        return (
            <OnboardingFormContainer>
            <ContentContainer>
                <img src={img} alt="troperial logo"/>
                <h2>Set a password</h2>
                <p>Make sure to set a password that's<br/> unique to you, difficult and not easy to guess</p>
            </ContentContainer>
            <form action="" onSubmit={handleResetPassword}>
            <CustomInput name="code" type="text" value={fields.code} onChange={handleFieldChange} label="Verfication Code" placeholder="Verification Code"/>
            <CustomInput name="password" type="password" value={fields.password} onChange={handleFieldChange} label="Password" placeholder="Password"/>
             <CustomInput name="confirmPassword" type="password" value={fields.confirmPassword} onChange={handleFieldChange} label="Confirm Password" placeholder="Confirm Password"/>
             <CustomButton loading={false}>Set Password</CustomButton>
            </form>
                <ContentContainer>
                <p className="custom-cta">Remember Your Password? <Link to="/signin">Sign In</Link></p>
                </ContentContainer>
        </OnboardingFormContainer>
        )
    }

    const renderNotification = (title, message, link) => {
        return (
            <div>
            <OnboardingNotification notificationIcon={notificationIcon} title={title} message={message}>
            
        <CustomButton onClickHandler={link ? null : () => setStep(3)} loading={false}>{ link ? <Link to="/signin">Get back in </Link> : "Reset Password"}</CustomButton>
           
            </OnboardingNotification>
           </div>
        )
    }

    const checkStep = (step) => {
        if(step === 1) {
            return renderEmailForm();
        } else if (step === 2){
            return renderNotification("Check Your Mail!", "Check your mail to see the verification mail we sent to you and come back to click next", false);
        } else if(step === 3) {
            return renderResetPasswordForm();
        } else {
            return renderNotification("Your Password's been reset!", "Now you can get back into your account to make the trades you want.", true);
        }
    }
      return (
        <OnboardingContainer>
            <OnboardingAside illustration={forgotpasswordIllustration}/>
            <OnboardingMain>
                {
                checkStep(step)
                }
                <OnboardingFooter/>
            </OnboardingMain>
        </OnboardingContainer>
    )
}
