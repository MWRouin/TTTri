import React, { useState } from 'react';

const ThirdCards = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-16 bg-white">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                 How to get started
            </h1>

            <div className="flex justify-center mb-8 space-x-8 text-lg font-medium text-gray-800">
                <div
                    className={`cursor-pointer ${activeTab === 1 ? 'border-b-4 border-black pb-2' : ''}`}
                    onClick={() => setActiveTab(1)}
                >
                    Plan your program
                </div>
                <div
                    className={`cursor-pointer ${activeTab === 2 ? 'border-b-4 border-black pb-2' : ''}`}
                    onClick={() => setActiveTab(2)}
                >
                    Record your video
                </div>
                <div
                    className={`cursor-pointer ${activeTab === 3 ? 'border-b-4 border-black pb-2' : ''}`}
                    onClick={() => setActiveTab(3)}
                >
                    Launch your course
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === 1 && (
                <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1200px] w-full gap-8">
                    {/* Text Content */}
                    <div className="flex flex-col w-full lg:w-1/2 ml-8"> {/* Added ml-8 for left margin */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Plan your program
                        </h2>
                        <p className="text-gray-700 mb-6 text-sm">
                            Start with your passion and knowledge. Then choose a promising topic using our Marketplace Insights tool. <br />
                            How you teach, what you bring to it, is up to you. </p>
                        <h3 className="text-lg font-semibold text-gray-800">TRI-TAINING helps you</h3>
                        <p className="text-gray-600 text-sm">
                            We have lots of resources on how to create your first course. Plus, our trainer dashboard and program pages help you stay organized. </p>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center w-full lg:w-1/2">
                        <img src="/assets/images/p3.jpg" alt="Planifiez votre programme" className="w-1/2 h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            )}

            {activeTab === 2 && (
                <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1200px] w-full gap-8">
                    {/* Illustration */}
                    <div className="flex justify-center w-full lg:w-1/2 order-2 lg:order-1">
                        <img src="/assets/images/p2.jpg" alt="Enregistrez votre vidéo" className="w-1/2 h-auto object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col w-full lg:w-1/2 order-1 lg:order-2 ml-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Record your video
                        </h2>
                        <p className="text-gray-700 mb-6 text-sm">
                            Use basic tools like a smartphone or DSLR camera. Add a good microphone and you're ready to go.                            <br />
                            If you don't like being filmed, simply capture your screen. We recommend at least two hours of video for a paid course.                        </p>
                        <h3 className="text-lg font-semibold text-gray-800">TRI-TAINING helps you</h3>
                        <p className="text-gray-600 text-sm">
                             Our support team is on hand to help you through the process and provide feedback on the test videos.                        </p>
                    </div>
                </div>
            )}

            {activeTab === 3 && (
                <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1200px] w-full gap-8">
                    {/* Text Content */}
                    <div className="flex flex-col w-full lg:w-1/2 ml-8"> {/* Added ml-8 for left margin */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                             Launch your course                        </h2>
                        <p className="text-gray-700 mb-6 text-sm">
                             Share your knowledge with the world. Once your course is ready, you can publish it and start reaching an audience.                            <br />
                             Use our marketing tools to attract attendees from around the world.                        </p>
                        <h3 className="text-lg font-semibold text-gray-800">TRI-TAINING helps you</h3>
                        <p className="text-gray-600 text-sm">
                             We provide you with advice on pricing and promoting your course to maximize your results.                        </p>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center w-full lg:w-1/2">
                        <img src="/assets/images/p1.jpg" alt="Lancez votre cours" className="w-1/2 h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThirdCards;
