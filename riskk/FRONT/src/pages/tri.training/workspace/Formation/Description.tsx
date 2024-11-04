import React from 'react';
import CountUp from 'react-countup';

const Description: React.FC<any> = ({ course, sections, students, ratingAvg, sessions }) => {
    return (
        <div className="mb-5 w-full">
            {/* Section Title */}
            <div className="flex justify-center lg:justify-start font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse"></div>

            {/* Counters (Participants, Stars, Hours) */}
            <div className="flex flex-wrap justify-center lg:justify-start font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse">
                {/* Participants */}
                <div className="flex flex-col items-center mb-4 lg:mb-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center flex-col">
                        <CountUp start={0} end={students} duration={1} className="text-thirdly text-xl sm:text-2xl text-center" />
                        <p className="text-[#3b3f5c] text-xs sm:text-[15px] mt-2 text-center dark:text-white-dark font-semibold">Participants</p>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex flex-col items-center mb-4 lg:mb-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center flex-col">
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-yellow-500">
                                <path d="M12 2l2.45 7.47h7.786l-6.305 4.577 2.45 7.47L12 17.664 5.619 21.514l2.45-7.47-6.306-4.577h7.786z" />
                            </svg>
                            <CountUp start={0} end={ratingAvg} decimals={1} duration={1} className="text-thirdly text-xl sm:text-2xl text-center" />
                        </div>
                        <p className="text-[#3b3f5c] text-xs sm:text-[15px] mt-2 text-left dark:text-white-dark font-semibold">Stars</p>
                    </div>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center mb-4 lg:mb-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center flex-col">
                        <CountUp start={0} end={parseInt(course?.duration, 10)} duration={1} className="text-thirdly text-xl sm:text-2xl text-center" />
                        <p className="text-[#3b3f5c] text-xs sm:text-[15px] mt-2 text-left dark:text-white-dark font-semibold">Hours</p>
                    </div>
                </div>
            </div>

            {/* Content Card */}
            <div className="bg-white shadow-md rounded-lg mt-4 lg:flex">
                {/* Left Column (Description) */}
                <div className="lg:w-1/5 p-4">
                    <h3 className="text-lg lg:text-xl font-semibold mb-2">Description</h3>
                </div>
                {/* Right Column */}
                <div className="flex-1 p-4">
                    <h3 className="text-lg lg:text-xl font-semibold mb-2">{course?.title}</h3>
                    <p className="text-gray-600 mb-4">{course?.description}</p>

                    <h3 className="text-lg lg:text-xl font-semibold mt-4">What will you learn in this course</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        {sections?.map((section: any) => (
                            <li key={section?.sectionId}>{section?.title}</li>
                        ))}
                    </ul>

                    <h3 className="text-lg lg:text-xl font-semibold mt-4">First sessions you will start with</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        {sessions?.slice(0, 6)?.map((session: any) => (
                            <li key={session?.sessionId}>{session?.title}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className="border-b border-gray-300 w-full my-4"></div>
        </div>
    );
};

export default Description;
