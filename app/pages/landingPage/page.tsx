import React from "react"
import Header from './components/Header';
import ReasonSection from './components/ReasonSection';
import HowSection from './components/HowSection';
import Download from './components/Download';

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <Header />

            {/* Reason Section */}
            <ReasonSection />

            {/* How Section */}
            <HowSection />

            {/* Download */}
            <Download />
        </div>
    )
};

export default LandingPage;
