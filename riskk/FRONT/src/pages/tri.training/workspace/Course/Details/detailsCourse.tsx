import React, { useEffect } from 'react';
import { CardBody, Typography } from '@material-tailwind/react';
import { FiVideo, FiCode, FiChrome, FiFile, FiDownload, FiPhoneCall, FiEye } from 'react-icons/fi';
import GrayCard from './GrayCard';
import BodyCard from './BodyCard';
import FixedCard from './FixedCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllLevels, getAllSections, getAllSessions, GetAllUsers, GetCourseById } from '../../../../../Redux/actions';
import { Card } from '@mantine/core';
import { GetAllFeedbacks } from '../../../../../Redux/feedback/actions';

const CourseDetailsPage = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const dispatch = useDispatch();
    const course = useSelector((state: any) => state.Course.Course);
    const users = useSelector((state: any) => state.User.ListUsers);
    const levels = useSelector((state: any) => state.Level.ListLevels);
    const sectionsList = useSelector((state: any) => state.Section.ListSections);
    const sessionsList = useSelector((state: any) => state.Session.ListSessions);
    const participantsList = useSelector((state: any) => state.Participation.ListParticipations);
    const feedbacksList = useSelector((state: any) => state.Feedback.ListFeedbacks);

    useEffect(() => {
        const id = Number(courseId);
        dispatch(GetCourseById(id));
        dispatch(GetAllUsers());
        dispatch(GetAllLevels());
        dispatch(getAllSections());
        dispatch(getAllSessions());
        dispatch(GetAllFeedbacks());
    }, [dispatch, courseId]);

    const former = users.find((user: any) => user.userId === course?.formerId);
    const level = levels.find((level: any) => level.levelId === course?.levelId);
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

    if (!course) {
        return <div>Loading...</div>;
    }

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            year: 'numeric',
        };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate.replace(',', ' /');
    };

    return (
        <div className="relative">
            <Card className="hidden lg:w-full rounded-none ml-0 mr-0 lg:block lg:bg-gray-800 lg:text-white lg:pb-5 lg:pt-5 lg:shadow-lg lg:w-full lg:mb-4">
                <CardBody className="wrap break-words  max-w-[1140px] mx-auto pr-[22rem]">
                    <Typography variant="h1">{course.title}</Typography>
                    <Typography variant="h4" className="mt-3">
                        {course.description ?? 'No descriptio yet for this course'}
                    </Typography>
                    <Typography variant="paragraph" className="mt-3">
                        Created By {former?.firstname} {former?.lastname}
                    </Typography>
                    <Typography variant="paragraph" className="mt-3">
                        Last Update : {formatDate(course.date)}
                    </Typography>
                </CardBody>
            </Card>
            <div className="w-2/3  mx-auto lg:w-full lg: max-w-[1100px] relative">
                <div className="lg:absolute lg:top-[-22rem] lg:right-[1rem] lg:w-[20rem]  transition-transform duration-1000">
                    <FixedCard course={course} level={level} sections={sections?.length ?? 0} sessions={sessions?.length ?? 0} students={participants?.length ?? 0} />
                </div>
                <div className="lg:w-[50rem] ">
                    <BodyCard course={course} sections={sections} feedbacks={feedbacks} users={users} />
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
