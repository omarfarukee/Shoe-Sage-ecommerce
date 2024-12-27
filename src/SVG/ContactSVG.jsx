// eslint-disable-next-line no-unused-vars
import React from 'react';

const ContactSVG = () => {
    return (
        <div className='w-full absolute object-contain '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 400" preserveAspectRatio="none" width="100%" height="550">
                <defs>
                    <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="#c3001063" opacity="0.8" />
                    </pattern>
                    <radialGradient id="fadeGradient" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="fadeMask">
                        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotPattern)" mask="url(#fadeMask)" />
            </svg>

        </div>
    );
}

export default ContactSVG;
