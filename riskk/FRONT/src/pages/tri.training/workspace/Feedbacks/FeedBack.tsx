import React, { useRef, useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '@mantine/core';
import { DeleteFeedback, GetAllFeedbacks } from '../../../../Redux/feedback/actions';
import { GetAllUsers } from '../../../../Redux/user/actions';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Rating from './Rating/Rating';
import FeedbackForm from './FeedbckForm';
import { calculateAverageRating } from '../../../../util/calculateAverageRating';
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import IconTrash from '../../../../components/Icon/IconTrash';
import IconPencil from '../../../../components/Icon/IconPencil';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../../../components/Icon/IconX';
import FormEditFeedback from './FormEditFeedback';

const image = '/assets/images/profile-34.jpeg';

const Feedback = ({ course, feedbacks, users, ratingAvg }: any) => {
    const dispatch = useDispatch();
    const cardRef = useRef<HTMLDivElement>(null);
    const [editFeedback, setEditFeedback] = useState({ open: false, feedback: null });

    const userConnected = useSelector((state: any) => state.Auth.user);

    // Pagination state
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;

    const indexOfLastFeedback = currentPage * itemsPerPage;
    const indexOfFirstFeedback = indexOfLastFeedback - itemsPerPage;
    const paginatedFeedbackList = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

    const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const calculateRatingDistribution = (feedbacks: any[]) => {
        const distribution: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        feedbacks.forEach((feedback) => {
            if (feedback.rating >= 1 && feedback.rating <= 5) {
                distribution[feedback.rating] = (distribution[feedback.rating] || 0) + 1;
            }
        });
        return distribution;
    };

    const ratingDistribution = calculateRatingDistribution(feedbacks);
    const totalFeedbacks = feedbacks.length;
    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;

    return (
        <div className=" w-full flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="flex  justify-center items-center w-3/4">
                    <div className="flex flex-col justify-center mb-7">
                        <div className="text-8xl font-lg ">{ratingAvg}</div>

                        <div className="text-lg text-gray-500 flex justify-center">{`${totalFeedbacks} rating${totalFeedbacks > 1 ? 's' : ''}`}</div>
                        <div className="flex justify-center ">
                            <FeedbackForm initialRating={0} feedback={{}} averageRating={ratingAvg} />
                        </div>
                    </div>
                    <div className=" w-full dark:bg-[#1b2e4b] rounded-lg p-2">
                        <div className="mb-5">
                            {Object.keys(ratingDistribution).map((rating) => {
                                const count = ratingDistribution[parseInt(rating)];
                                const percentage = totalFeedbacks > 0 ? (count / totalFeedbacks) * 100 : 0;
                                return (
                                    <div key={rating} className="flex items-right mb-2">
                                        <div className=" text-right pr-2 font-semibold">{rating}</div>
                                        <div className="w-3/4 bg-gray-200 rounded-full h-4 overflow-hidden relative">
                                            <div className="absolute top-0 left-0 bg-yellow-400 h-full transition-width duration-100 ease-in-out" style={{ width: `${percentage}%` }} />
                                        </div>
                                        <div className="ml-2 text-sm">{`${percentage.toFixed(1)}%`}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-3/4 ">
                    {/* Render Feedbacks */}
                    {paginatedFeedbackList.map((feedback: any) => {
                        const user = users.find((user: any) => user.userId === feedback.userId);

                        return (
                            <Card key={feedback.feedBackId} className="border-b rounded-none border-gray-300 mb-5 flex gap-7">
                                <div>
                                    {user?.imageUrl ? (
                                        <img className="rounded-full w-10 h-10 object-cover" src={`${resourcesUrl}/${user?.imageUrl}`} alt="userProfile" />
                                    ) : (
                                        <img className="rounded-full w-10 h-10 object-cover" src={'/assets/images/userplaceholder.png'} alt="userProfile" />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col">
                                        {/* If user is found, display their name */}
                                        {user && (
                                            <h6 className="text-lg text-fourthly font-bold">
                                                {user?.firstname} {user?.lastname}
                                            </h6>
                                        )}

                                        <div className="flex gap-1">
                                            {/* Rating component */}
                                            <Rating avgRating={feedback?.rating} />
                                        </div>
                                    </div>
                                    {/* Display feedback text */}
                                    <p className="text-sm font-normal text-wrap break-words">{feedback.feedBackText || 'No feedback text provided.'}</p>
                                </div>
                                {/* If the connected user is the one who left the feedback, show Edit/Delete menu */}
                                {userConnected.userId === feedback.userId && (
                                    <Menu>
                                        <MenuHandler>
                                            <button>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90 opacity-70 hover:opacity-100">
                                                    <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                                                    <circle opacity="0.5" cx="12" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                                                    <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                                                </svg>
                                            </button>
                                        </MenuHandler>
                                        <MenuList className="flex flex-col justify-center items-center gap-4 bg-transparent border-none shadow-none">
                                            <MenuItem
                                                className="border-b border-grag-300 rounded-none w-3/4 bg-white h-full flex justify-center items-center gap-2 hover:scale-110"
                                                onClick={() => {
                                                    setEditFeedback({ open: true, feedback: feedback });
                                                }}
                                            >
                                                <IconPencil />
                                                Edit
                                            </MenuItem>
                                            <MenuItem
                                                className="border-b border-gray-300 rounded-none w-3/4 bg-white h-full flex justify-center items-center gap-2 hover:scale-110"
                                                onClick={() => dispatch(DeleteFeedback(feedback.feedBackId))}
                                            >
                                                <IconTrash />
                                                Delete
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                )}
                            </Card>
                        );
                    })}

                    <Transition appear show={editFeedback.open} as={Fragment}>
                        <Dialog as="div" open={editFeedback.open} onClose={() => setEditFeedback({ open: false, feedback: null })} className="relative z-[51]">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-[black]/60" />
                            </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center px-4 py-8">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                            <button
                                                type="button"
                                                onClick={() => setEditFeedback({ open: false, feedback: null })}
                                                className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                            >
                                                <IconX />
                                            </button>
                                            <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Edit FeedBack</div>
                                            <div className="p-5">
                                                <FormEditFeedback
                                                    initialValues={editFeedback.feedback}
                                                    onsubmit={() => {
                                                        console.log('closed');
                                                        setEditFeedback({ open: false, feedback: null });
                                                    }}
                                                />
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-5">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 mx-2 border rounded-full">
                            <FaChevronLeft size={14} color="#808080" />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`w-10 h-10 mx-1 border rounded-full flex items-center justify-center text-xs ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 mx-2 border rounded-full">
                            <FaChevronRight size={14} color="#808080" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
