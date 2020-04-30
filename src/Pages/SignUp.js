import React, {useState} from 'react'
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
import {Link} from 'react-router-dom';
import {Auth} from 'aws-amplify';
import {useFormFields} from '../libs/useFormFields';

const SignUp = () => {
    const [newUser, setNewUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const validateForm = () => {
        return fields.email.length > 0 && fields.password.length > 0 && fields.confirmPassword.length >0;
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
          const {email, password} = fields;
          const newUser = await Auth.signUp({ username: email, password});
          setIsLoading(false);
          setNewUser(newUser);
        } catch (e) {
          alert(e.message);
          setIsLoading(false);
        }
    }

    const renderForm = () => {
        return (
            <OnboardingFormContainer>
            <ContentContainer>
                <img src={img} alt="troperial logo"/>
                <h2>Create a <span className="troperial-green">Troperial</span> Account</h2>
                <p>Create an account to gain access to a quick &amp; secure way to exchange currencies.</p>
            </ContentContainer>
            <form onSubmit={handleSubmit}>
             <CustomInput type="text" name="email" value={fields.email} onChange={handleFieldChange} label="Email" placeholder="Email"/>
             <CustomInput name="password" type="password" value={fields.password} onChange={handleFieldChange} label="Password" placeholder="Password"/>
             <CustomInput name="confirmPassword" type="password" value={fields.confirmPassword} onChange={handleFieldChange} label="Confirm Password" placeholder="Confirm Password"/>
             <CustomButton loading={isLoading} disable={!validateForm()}>
                Create An Account
            </CustomButton>
            </form>
                <ContentContainer>
                <p className="custom-cta">already got an account? <Link to="/signin">Sign In</Link></p>
                </ContentContainer>
        </OnboardingFormContainer>
        )
    }

    const renderVerficationNotification = () => {
        return (
            <div>
            <OnboardingNotification notificationIcon={notificationIcon} title="Check your email" message="click the link on the email we sent to you to verify your account"/>
           </div>
        )
    }
    return (
        <OnboardingContainer>
            <OnboardingAside illustration={troperialSvg}/>
            <OnboardingMain>
                {newUser === null ? renderForm() : renderVerficationNotification()}
                {newUser === null ? <OnboardingFooter/> : null}
            </OnboardingMain>
        </OnboardingContainer>
    )
}


export default SignUp;
