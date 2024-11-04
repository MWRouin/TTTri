import React, { PropsWithChildren, Suspense, useEffect, useState } from 'react';
import { Button, Dialog, Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox } from '@material-tailwind/react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import DialogWithForm from '../DialogWithForm';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCourses, GetAllFavorites } from '../../../../Redux/actions';
import CourseCard from './coursecrad/CourseCard';
import { calculateAverageRating } from '../../../../util/calculateAverageRating';

const AjoutCours = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const courses = useSelector((state: any) => state.Course.ListCourses);
    const userConnected = useSelector((state: any) => state.Auth.user);
    const listLevels = useSelector((state: any) => state.Level.ListLevels);
    const feeds = useSelector((state: any) => state.Feedback.ListFeedbacks);
    const categories = useSelector((state: any) => state.Categorie.ListCategories);
    const users = useSelector((state: any) => state.User.ListUsers);
    const dispatch = useDispatch();
    const link = 'ajoutcours';
    const file = useSelector((state: any) => state.File);
    useEffect(() => {
        console.log(file);
    });

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    useEffect(() => {
        dispatch(GetAllCourses());
        dispatch(GetAllFavorites());
    }, [dispatch]);

    const getFeedback = (courseId: any) => {
        return feeds.filter((feedback: any) => feedback.courseId === courseId);
    };

    return (
        <div className="mt-5">
            <div className="flex items-center justify-center flex-col gap-2 modal">
                {(!Array.isArray(courses) || courses.length === 0) && (
                    <div className="flex items-center justify-center flex-col gap-2 modal">
                        <img src="/assets/images/preview.png" alt="preview" className="w-[18rem]" />
                        <h2 className="text-lg lg:text-2xl font-bold">Take the first step!</h2>
                        <h3 className="lg:text-lg">Click on the + icon to create your first course.</h3>
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="max-w-[980px] w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                        {Array.isArray(courses) && courses.length > 0 && (
                            <>
                                {courses.map((course: any) => {
                                    // Find additional data for each course
                                    const former = users.find((user: any) => user.userId === course.formerId);
                                    const category = categories.find((category: any) => category.categorieId === course.categorieId);
                                    const level = listLevels.find((level: any) => level.levelId === course.levelId);
                                    const feeds = getFeedback(course.courseId); // Fetch feedback for each course

                                    // Return the CourseCard component inside a Link
                                    return (
                                        <div key={course.courseId} className="w-[20rem]">
                                            <CourseCard course={course} former={former} level={level} category={category} rating={calculateAverageRating(feeds)} />
                                        </div>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>
                <DialogWithForm />
            </div>
        </div>
    );
};

export default AjoutCours;
