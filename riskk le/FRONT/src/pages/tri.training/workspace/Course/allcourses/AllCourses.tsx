import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from '../coursecrad/CourseCard';
import { Link, useParams, useLocation } from 'react-router-dom';
import { GetAllCategories, GetAllCourses, GetAllFavorites, GetAllLevels, GetAllUsers } from '../../../../../Redux/actions';
import { calculateAverageRating } from '../../../../../util/calculateAverageRating';
import FilterCourses from './FilterCourses';
import FilterSideBar from './FilterSideBar';
import { GetAllFeedbacks } from '../../../../../Redux/feedback/actions';

export default function AllCourses() {
    const dispatch = useDispatch();

    const { categoryId } = useParams<{ categoryId?: string }>();

    const courses = useSelector((state: any) => state.Course.ListCourses);
    const users = useSelector((state: any) => state.User.ListUsers);
    const location = useLocation();

    const listLevels = useSelector((state: any) => state.Level.ListLevels);
    const feeds = useSelector((state: any) => state.Feedback.ListFeedbacks);
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
    const categories = useSelector((state: any) => state.Categorie.ListCategories);
    const [filterValues, setFilterValues] = useState({
        rating: null,
        level: null,
        duration: null,
    });

    useEffect(() => {
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

    const handleFilterChange = (filters: any) => {
        setFilterValues(filters);
    };

    const filteredCourses = useMemo(() => {
        return courses.filter((course: any) => {
            const ratingMatches = filterValues.rating ? calculateAverageRating(getFeedback(course.courseId)) >= filterValues.rating : true;
            const levelMatches = filterValues.level ? course.levelId === filterValues.level : true;
            const durationMatches = filterValues.duration ? course.duration <= filterValues.duration : true;
            const categoryMatches = categoryId ? course.categorieId == categoryId : true;
            console.log(filterValues.duration);

            return ratingMatches && levelMatches && durationMatches && categoryMatches;
        });
    }, [courses, filterValues, categoryId]);

    return (
        <div className="flex justify-center w-full mt-10">
            {isSidebarVisible && <FilterSideBar courses={courses} onFilterChange={handleFilterChange} levels={listLevels} categories={categories} />}

            <div className="max-w-[980px] w-full">
                {/* Filter button */}
                <div className="flex justify-start">
                    <FilterCourses setIsSidebarVisible={setIsSidebarVisible} isSidebarVisible={isSidebarVisible} />
                </div>

                {/* Course List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                    {filteredCourses.map((course: any) => {
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
