import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../../../store/themeConfigSlice';
import CourseCard from '../coursecrad/CourseCard';
import { GetAllCategories, GetAllCourses, GetAllFavorites, GetAllLevels, GetAllUsers } from '../../../../../Redux/actions';
import { GetAllFeedbacks } from '../../../../../Redux/feedback/actions';
import { calculateAverageRating } from '../../../../../util/calculateAverageRating';

const FavouriteList = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state: any) => state.Course.ListCourses);
    const categories = useSelector((state: any) => state.Categorie.ListCategories);
    const users = useSelector((state: any) => state.User.ListUsers);
    const [levels, setLevels] = useState<any>([]);
    const [formers, setFormers] = useState<any>([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const listLevels = useSelector((state: any) => state.Level.ListLevels);
    const feeds = useSelector((state: any) => state.Feedback.ListFeedbacks);

    useEffect(() => {
        dispatch(setPageTitle('Favourite List'));
        dispatch(GetAllUsers());
        dispatch(GetAllCourses());
        dispatch(GetAllFeedbacks());
        dispatch(GetAllLevels());
        dispatch(GetAllCategories());
        dispatch(GetAllFavorites());
    }, [dispatch]);

    const getFeedback = (courseId: any) => {
        return feeds.filter((feedback: any) => feedback.courseId === courseId);
    };

    console.log(courses);

    return (
        <div className="content container py-10">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold md:text-3xl">Favourite List</h3>
                <form className="flex items-center max-w-sm">
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search branch name..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-2.5 ml-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
            <div className="mt-4">
                <div className="mt-10">
                    <div className="flex flex-wrap gap-3">
                        {courses.map((course: any) => {
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
        </div>
    );
};

export default FavouriteList;
