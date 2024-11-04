// Features.js
import React from 'react';

const Features = () => {
    return (
        
        <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1200px] w-full gap-12">
            {/* Reason 1 */}
            <div className="flex flex-col items-center text-center lg:w-1/3">
                <img src="/assets/images/af1.jpg" alt="Create Courses" className="mb-6" />
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Create courses that suit you
                </h2>
                <p className="text-gray-600">
                    Publish the course you want, the way you want, and always maintain control over your own content.
                </p>
            </div>

            {/* Reason 2 */}
            <div className="flex flex-col items-center text-center lg:w-1/3">
                <img src="/assets/images/af2.jpg" alt="Inspire Participants" className="mb-6" />
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Inspire participants
                </h2>
                <p className="text-gray-600">
                    Teach what you know and help participants explore their interests, learn new skills, and advance their careers.
                </p>
            </div>

            {/* Reason 3 */}
            <div className="flex flex-col items-center text-center lg:w-1/3">
                <img src="/assets/images/af3.jpg" alt="Get Rewarded" className="mb-6" />
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Get rewarded
                </h2>
                <p className="text-gray-600">
                    Build your professional network and expertise, and earn money for every paid listing.
                </p>
            </div>
        </div>
    );
};

export default Features;
