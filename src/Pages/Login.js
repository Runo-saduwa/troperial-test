import React, {useContext, useState, useEffect} from 'react'
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
import {AppContext} from '../libs/contextLib';
import {useFormFields} from '../libs/useFormFields';
import {Auth} from 'aws-amplify';



export default function SignIn() {
    useEffect(() => {

    }, [])
    const { userHasAuthenticated } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });
    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        console.log(fields.email, fields.password)
        try {
          await Auth.signIn(fields.email, fields.password);
          userHasAuthenticated(true);
        } catch (e) {
          alert(e.message);
          setIsLoading(false);
        }
    }
    return (
        <OnboardingContainer>
            <OnboardingAside illustration={SignInSvg}/>
            <OnboardingMain>
                <OnboardingFormContainer>
                    <ContentContainer>
                        <img src={img} alt="troperial logo"/>
                        <h2>Sign In to <span className="troperial-green">Troperial</span></h2>
                        <p>Enter your email address and password<br/> to sign in to Troperial</p>
                    </ContentContainer>
                    <form onSubmit={handleSubmit}>
                     <CustomInput type="text" name="email" value={fields.email} onChange={handleFieldChange} label="Email" placeholder="Email"/>
                     <CustomInput name="password" type="password" value={fields.password} onChange={handleFieldChange} label="Password" placeholder="Password"/>
                     <CustomButton loading={isLoading} disable={!validateForm()}>
                        Sign In
                    </CustomButton>
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