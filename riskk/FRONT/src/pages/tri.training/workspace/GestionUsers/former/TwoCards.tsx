import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const TwoCards = () => {
    return (
        <div className="bg-white w-full py-16 flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center max-w-[1400px] w-full">
                {/* Left Image */}
                <div className="lg:w-1/4 flex justify-center items-center lg:justify-start">
                    <img
                        src="/assets/images/p5.jpg"
                        alt="Left Illustration"
                        className="w-[220px] lg:w-[300px] h-auto"
                    />
                </div>

                {/* Center Text */}
                <div className="lg:w-2/4 text-center lg:text-center px-4">
                    <h1 className="text-5xl font-bold text-gray-800 mb-8">
                        You won't have to go it alone
                    </h1>
                    <p className="text-xl font-medium text-gray-600 mb-8">
                        Our TRI-TRAINING support team is here to answer your questions and offers many resources to help you along the way. Plus, get support from experienced trainers in our <span className="font-bold">online community.</span>
                    </p>
                    <Link to="/contactus" className="text-blue-600 font-semibold hover:underline mb-6">
                        Do you need more information before getting started? Contact us.
                    </Link>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/4 flex justify-center items-center lg:justify-end">
                    <img
                        src="/assets/images/p4.jpg"
                        alt="Right Illustration"
                        className="w-[220px] lg:w-[300px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default TwoCards;
