import React, {useState, useRef} from 'react'
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
import ProgressBar from '../components/ProgressBar/ProgressBar';
import CustomAlert from '../components/CustomAlert/CustomAlert';
import { useForm } from 'react-hook-form';
import InputError from '../components/InputError/InputError';

import validator from 'validator';
const SignUp = () => {
    const { register, handleSubmit, errors, watch } = useForm()
    const [showPasswordQuality, setShowPasswordQuality] = useState(false);
    const [newUser, setNewUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [passwordQuality, setPasswordQuality] = useState({ quality: "", percentage: ""});

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async (data) => {
        const {email, password} = data;
        setIsLoading(true); 
        try {
           const newUser = await Auth.signUp({username: email, password});
           setIsLoading(false);
           setNewUser(newUser);
        } catch(e) {
            setAuthError(e.message);
            console.log(e)
            setIsLoading(false);
        }
    }

    const match = (password) => {
        const reg = /^(?=.*[!@#$%^&*()\-_=+`~\[\]{}?|])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,20}$/;
        return validator.matches(password, reg);
    }
    const checkPasswordStrength = (password) => {
        if(match(password) && password.length ===6) {
            setShowPasswordQuality(true)
            setPasswordQuality({
                quality: 'Medium',
                percentage: '50'
            })
        }

        if(password.length > 6 && match(password)){
            setShowPasswordQuality(true)
            setPasswordQuality({
                quality: 'Strong',
                percentage: '80'
            })

        }
    }

    const renderForm = () => {
        return (
            <OnboardingFormContainer>
            <ContentContainer>
                <img src={img} alt="troperial logo"/>
                <h2>Create a <span className="troperial-green">Troperial</span> Account</h2>
                <p>Create an account to gain access to a quick &amp; secure way to exchange currencies.</p>
                {authError && <CustomAlert message={authError} onClick={() => setAuthError(false)}/>}
            </ContentContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
             <CustomInput showError={errors.email ? true : false} register={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} type="text" name="email" label="Email" placeholder="Email"/>
             {errors.email?.type === "required" && <InputError>Your email is required</InputError>}
             {errors.email?.type === "pattern" && <InputError>Please provide a valid email address</InputError>}
             <CustomInput hint="Password must be between 6 - 20 characters and must include atleast 1 Uppercase letter, 1 Lowercase letter, 1 numeric value and one special character." showError={errors.password ? true : false} register={register({required: true, pattern: /^(?=.*[!@#$%^&*()\-_=+`~\[\]{}?|])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,20}$/})} name="password" type="password" onChange={(e) => checkPasswordStrength(e.target.value)} label="Password" placeholder="Password"/>
             {errors.password?.type === "required" && <InputError>Your input is required</InputError>}
             {errors.password?.type === "pattern" && <InputError>Password must have 6 to 30 characters</InputError>}
             <CustomInput showError={errors.password_repeat ? true : false} register={register({required: true, validate: value => value === password.current || <InputError>The passwords do not match</InputError>})} name="password_repeat" type="password" label="Confirm Password" placeholder="Confirm Password"/>
             {errors.password_repeat && <div>{errors.password_repeat.message}</div>}
             {showPasswordQuality === true ? <ProgressBar grade={passwordQuality} /> : null}
             <CustomButton loading={isLoading}>
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
