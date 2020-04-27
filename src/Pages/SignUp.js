import React from 'react'
import OnboardingContainer from '../components/OnboardingContainer/OnboardingContainer';
import OnboardingAside from '../components/OnboardingAside/OnboardingAside';
import OnboardingMain from '../components/OnboardingMain/OnboardingMain';
import OnboardingFormContainer from '../components/OnboardingFormContainer/OnboardingFormContainer';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import img from './../assets/images/Logo.png'

export default function SignUp() {
    return (
        <OnboardingContainer>
            <OnboardingAside/>
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
            </OnboardingMain>
        </OnboardingContainer>
    )
}
