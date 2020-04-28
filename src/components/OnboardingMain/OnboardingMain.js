import React from 'react';
import './OnboardingMain.css';
import OnboardingFooter from '../OnboardingFooter/OnboardingFooter';

const OnboardingMain = ({children}) => {
    return (
        <main className="onboardingContainer__main">
            {/* Form */}
            <div className="onboardingContainer__main--header">
                {children}
            </div>
        </main>
    )
}

export default OnboardingMain
