import React, { useEffect, useState } from 'react';
import SectionList from './SectionList';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllLevels, GetAllParticipations, getAllSections, getAllSessions, GetAllUsers, GetCourseById } from '../../../../Redux/actions';
import Description from './Description';
import { Button, ButtonGroup } from '@material-tailwind/react';
import Feedback from '../Feedbacks/FeedBack';
import { useParams } from 'react-router-dom';
import { GetAllFeedbacks } from '../../../../Redux/feedback/actions';

export default function Formation() {
    const course = useSelector((state: any) => state.Course.Course);
    const sectionsList = useSelector((state: any) => state.Section.ListSections);
    const sessionsList = useSelector((state: any) => state.Session.ListSessions);
    const participantsList = useSelector((state: any) => state.Participation.ListParticipations);
    const feedbacksList = useSelector((state: any) => state.Feedback.ListFeedbacks);
    const users = useSelector((state: any) => state.User.ListUsers);
    const dispatch = useDispatch();
    const [activeView, setActiveView] = useState('description');
    const [averageRating, setAverageRating] = useState<number>(0);
    const [selectedSession, setSelectedSession] = useState<any>(null);
    const { courseId } = useParams<{ courseId?: string }>();
    const levels = useSelector((state: any) => state.Level.ListLevels);

    useEffect(() => {
        dispatch(GetCourseById(Number(courseId)));
        dispatch(getAllSections());
        dispatch(GetAllLevels());
        dispatch(getAllSessions());
        dispatch(GetAllFeedbacks());
        dispatch(GetAllUsers());
        dispatch(GetAllParticipations());
    }, [dispatch, courseId]);

    const sections =
        sectionsList?.filter((section: any) => {
            return courseId !== undefined && section.courseId == courseId;
        }) || [];
    const participants =
        participantsList?.filter((participant: any) => {
            return courseId !== undefined && participant.courseId == courseId;
        }) || [];
    const feedbacks =
        feedbacksList?.filter((feedback: any) => {
            return courseId !== undefined && feedback.courseId == courseId;
        }) || [];

    const sectionIds = sections.map((section: any) => section.sectionId);
    const sessions = sessionsList.filter((session: any) => sectionIds.includes(session.sectionId));

    const handleViewChange = (view: string) => {
        setActiveView(view);
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

    const renderFile = (fileUrl: string) => {
        const extension = fileUrl.split('.').pop();
        if (extension) {
            console.log(extension);
            switch (extension.toLowerCase()) {
                case 'jpg':
                case 'jpeg':
                case 'png':
                case 'gif':
                    return <img src={fileUrl} className="object-cover bg-gray-600 max-h-[500px] h-full w-full" alt="File" />;
                case 'mp4':
                case 'webm':
                case 'ogg':
                    return <video src={fileUrl} className="object-cover bg-gray-600 max-h-[500px] h-full w-full" controls />;
                case 'pdf':
                    return <embed src={fileUrl} className="object-cover bg-gray-600 max-h-[500px] h-full w-full" type="application/pdf" />;
                default:
                    return <p>Unsupported file format</p>;
            }
        }
        return <p>No file available</p>;
    };

    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;

    const fileUrl = selectedSession ? `${resourcesUrl}/${selectedSession.url}` : course ? `${resourcesUrl}/${course.image}` : '';

    return (
        <div className="flex mx-7 mt-5">
            <div className="w-3/4">
                {renderFile(fileUrl)}
                <div className="">
                    <ButtonGroup className="gap-4 border-b-2 mt-2">
                        <Button
                            onClick={() => handleViewChange('description')}
                            className={`bg-transparent text-black shadow-none rounded-none hover:border-b-2 hover:border-black text-md ${
                                activeView === 'description' ? 'border-b-2 border-black' : ''
                            }`}
                        >
                            Presentation
                        </Button>
                        <Button
                            onClick={() => handleViewChange('feedback')}
                            className={`bg-transparent text-black shadow-none rounded-none hover:border-b-2 hover:border-black text-md ${activeView === 'feedback' ? 'border-b-2 border-black' : ''}`}
                        >
                            Feedback
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="panel">
                    <h2 className="text-2xl lg:text-3xl font-extrabold ml-4 mt-4">{course?.title ?? 'New course'}</h2>
                    {activeView === 'description' && (
                        <Description course={course} sections={sections} students={participants?.length ?? 0} ratingAvg={calculateAverageRating(feedbacks)} sessions={sessions} />
                    )}
                    {activeView === 'feedback' && <Feedback feedbacks={feedbacks} users={users} ratingAvg={calculateAverageRating(feedbacks)} course={course} />}
                </div>
            </div>
            <div className="relative flex-1">
                <div className="sticky top-20 flex flex-col h-[calc(100vh-5rem)]">
                    <div className="border-t border-b w-full h-[5rem] flex items-center pl-4 text-lg font-extrabold">Course content</div>
                    <SectionList setSelectedSession={setSelectedSession} courseId={courseId} />
                </div>
            </div>
        </div>
    );
}
