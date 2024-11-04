import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from '../coursecrad/CourseCard';
import { Link, useNavigate } from 'react-router-dom';
import { GetAllUsers, GetUserById, GetAllLevels, GetAllCategories, GetAllFavorites, GetAllCourses, GetAllParticipations } from '../../../../../Redux/actions';
import IconHeart from '../../../../../components/Icon/IconHeart';
import { GetAllFeedbacks } from '../../../../../Redux/feedback/actions';
import { setPageTitle } from '../../../../../store/themeConfigSlice';
import { useUser } from '../../../../../hooks';
import { calculateAverageRating } from '../../../../../util/calculateAverageRating';

export default function Mylearning() {
    const dispatch = useDispatch();
    const courses = useSelector((state: any) => state.Course.ListCourses);
    const categories = useSelector((state: any) => state.Categorie.ListCategories);
    const users = useSelector((state: any) => state.User.ListUsers);
    const [levels, setLevels] = useState<any>([]);
    const [formers, setFormers] = useState<any>([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const listLevels = useSelector((state: any) => state.Level.ListLevels);
    const participants = useSelector((state: any) => state.Participation.ListParticipations);
    const feeds = useSelector((state: any) => state.Feedback.ListFeedbacks);

    useEffect(() => {
        dispatch(GetAllUsers());
        setFormers(users);
    }, [dispatch]);

    useEffect(() => {
        dispatch(GetAllFavorites());
        dispatch(GetAllFeedbacks());
        dispatch(GetAllCategories());
        dispatch(GetAllParticipations());
        setFeedbacks(feeds);
    }, [dispatch]);

    useEffect(() => {
        dispatch(GetAllLevels());
        setLevels(listLevels);
    }, [dispatch]);

    const getFeedback = (courseId: any) => {
        return feeds.filter((feedback: any) => feedback.courseId === courseId);
    };

    useEffect(() => {
        dispatch(GetAllCourses());
        dispatch(setPageTitle('Knowledge Base'));
    }, []);
    const [loggedInUser] = useUser();
    const navigate = useNavigate();

    const enrolledCourses = courses.filter((course: any) => participants.some((participant: any) => participant.userId === loggedInUser?.userId && participant.courseId === course.courseId));

    console.log(courses, 'participants', participants);

    return (
        <div className="flex flex-col justify-center container w-full py-16">
            <h1 className="text-3xl font-bold mb-10">My Enrolled Courses</h1>

            <div className=" w-full">
                <div className="flex flex-wrap gap-4">
                    {enrolledCourses.map((course: any) => {
                        const former = users.find((user: any) => user.userId === course.formerId);
                        const category = categories.find((category: any) => category.categorieId === course.categorieId);
                        const level = listLevels.find((level: any) => level.levelId === course.levelId);
                        const feeds = getFeedback(course.courseId);
                        return (
                            <div key={course.courseId}>
                                <CourseCard course={course} former={former} level={level} category={category} rating={calculateAverageRating(feeds)} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
