import React from 'react';
import './OnboardingMain.css';
import OnboardingFooter from '../OnboardingFooter/OnboardingFooter';

const OnboardingMain = ({footerContent, children}) => {
    return (
       <div>
        <main className="onboardingContainer__main">
            {/* Form */}
            <div className="onboardingContainer__main--header">
                {children}
            </div>
        </main>
        <OnboardingFooter>
            {footerContent}
        </OnboardingFooter>
       </div>
    )
}

export default OnboardingMain
