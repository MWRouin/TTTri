import React, { useState, FC, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IconType } from 'react-icons';
import { Button, Typography } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddParticipation, GetAllParticipations, GetParticipationByCourseId } from '../../../../../Redux/participation/actions';
import { GetUrlFile } from '../../../../../util/getFile';
import { Participation } from '../../../../../Redux/participation/type';
import { FiVideo, FiCode, FiChrome, FiFile, FiDownload, FiPhoneCall, FiEye, FiUser } from 'react-icons/fi';
import { AiFillTrophy } from 'react-icons/ai';

interface CourseItem {
    icon: IconType;
    text: string;
}

const FixedCard: FC<any> = ({ course, level, sections, sessions, students }) => {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const { courseId } = useParams();
    const participation = useSelector((state: any) => state.Participation.ListParticipations);
    const userConnected = useSelector((state: any) => state.Auth.user);
    const [part, setPart] = useState();
    const naviagte = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllParticipations());
        console.log(participation);
    }, []);

    const handlePartcipate = () => {
        const newpart: Participation = {
            courseId: Number(courseId),
            userId: userConnected.userId,
            date: new Date(),
        };

        const exist = participation.some((item: any) => item.courseId === Number(courseId) && item.userId === userConnected.userId);
        console.log(exist, 'exist');
        if (!exist) {
            dispatch(AddParticipation(newpart));
        }
        naviagte(`/formation/${courseId}`);
    };

    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;

    return (
        <>
            <div className=" ">
                <div className="group cursor-pointer mx-2 overflow-hidden bg-white shadow-lg duration-200 hover:-translate-y-2">
                    <div className="h-64 sm:h-80 overflow-hidden">
                        <img src={`${resourcesUrl}/${course.image}`} className="group-hover:scale-110 h-full w-full object-cover duration-200" alt="video thumbnail" />
                    </div>
                    <div className="lg:hidden m-8">
                        <Typography variant="h2">Tableau 2024 Advanced: Master Tableau in Data Science</Typography>
                    </div>
                    <div className="bg-white px-6 lg:py-8">
                        <h5 className="group-hover:text-indigo-600 mb-4 text-2xl font-bold">{course.title}</h5>
                        <p className="mb-6 text-base text-gray-600">{course.description}</p>
                        <div className="w-full text-center">
                            <Button className="bg-red-500 rounded-none text-white xl:w-full w-2/3 mb-4" onClick={handlePartcipate}>
                                Start Course
                            </Button>
                        </div>
                        <p className="my-3 text-sm text-gray-500">Students with {level?.description} level</p>

                        <ul className="text-base text-gray-600 mb-4">
                            <li className="flex items-center gap-2 mb-2">
                                <FiUser className="w-5 h-5" />
                                {students} Students
                            </li>
                            <li className="flex items-center gap-2 mb-2">
                                <FiVideo className="w-5 h-5" />
                                {course.duration} hours on-demand video
                            </li>
                            <li className="flex items-center gap-2 mb-2">
                                <FiFile className="w-5 h-5" />
                                {sections} Sections
                            </li>
                            <li className="flex items-center gap-2 mb-2">
                                <FiChrome className="w-5 h-5" />
                                {sessions} Sessions
                            </li>

                            <li className="flex items-center gap-2 mb-2">
                                <FiPhoneCall className="w-5 h-5" />
                                Access on mobile and TV
                            </li>
                            <li className="flex items-center gap-2 mb-2">
                                <AiFillTrophy className="w-5 h-5" />
                                Certificate of completion
                            </li>
                        </ul>
                        <button onClick={openModal} className="group text-base font-bold focus:text-indigo-600 hover:text-indigo-600">
                            <span>▷</span>
                            <span className="underline">Watch Now</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        {'watch'}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <iframe
                                            width="100%"
                                            height="415"
                                            src={''}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default FixedCard;
