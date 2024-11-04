import React, { FC, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { MdOutlineDone } from 'react-icons/md';
import SectionList from '../../Formation/SectionList';
import { FaRegStar, FaStar } from 'react-icons/fa';

const BodyCard: FC<any> = ({ course, sections, feedbacks, users }) => {
    const [selectedSession, setSelectedSession] = useState(null);
    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;
    const renderStars = (rating: any) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    };

    const calculateAverageRating = (feedbacks: any[]) => {
        if (!feedbacks || feedbacks.length === 0) {
            return 0;
        }
        const totalRating = feedbacks.reduce((sum, feedback) => {
            return sum + feedback.rating;
        }, 0);

        const averageRating = totalRating / feedbacks.length;
        return averageRating.toFixed(1);
    };
    return (
        <div className="w-full xl:w-4/5 mx-1 mt-6">
            <div className="mb-6 border border-black p-4">
                <div className="ml-18">
                    <Typography variant="h5" className="text-2xl mb-6 text-gray-700">
                        What you'll learn
                    </Typography>

                    <ul className="w-full grid grid-cols-2 gap-2">
                        {sections?.map((section: any) => {
                            return (
                                <div key={section.sectionId} className="flex items-center gap-1 w-1/2">
                                    <MdOutlineDone />
                                    <li className="text-base font-semiBold">{section?.title}</li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="mt-6">
                <div className="sticky top-20 flex flex-col">
                    <div className="border-t border-b w-full h-[5rem] flex items-center pl-4 text-lg font-extrabold">Course content</div>
                    <SectionList setSelectedSession={setSelectedSession} courseId={course?.courseId} />
                </div>
            </div>

            <div className="mt-12">
                <div className="text-xl font-bold mb-4 flex items-center gap-1">
                    <FaStar className="text-yellow-500" /> <div>{calculateAverageRating(feedbacks)} course rating</div> <div> - {feedbacks?.length} ratings</div>
                </div>
                <div className="flex flex-col gap-3">
                    {feedbacks?.map((feedback: any) => {
                        const user = users?.find((user: any) => user.userId === feedback.userId);
                        return (
                            <div className="border p-4 rounded-md shadow-sm space-y-4" key={feedback.feedBackId}>
                                <div className="flex items-center gap-4">
                                    <div>
                                        {user?.imageUrl ? (
                                            <img className="rounded-full w-10 h-10 object-cover" src={`${resourcesUrl}/${user?.imageUrl}`} alt="userProfile" />
                                        ) : (
                                            <img className="rounded-full w-10 h-10 object-cover" src={'/assets/images/userplaceholder.png'} alt="userProfile" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {user?.firstname} {user?.lastname}
                                        </div>
                                        <div className="flex space-x-1">{renderStars(feedback?.rating)}</div>
                                    </div>
                                </div>

                                <div className="text-md font-medium">{feedback?.text ?? 'Empty Feedback'}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BodyCard;
