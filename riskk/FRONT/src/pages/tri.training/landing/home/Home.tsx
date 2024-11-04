import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import CourseCard from '../../workspace/Course/coursecrad/CourseCard';
import { GetAllCourses, UpdateCourse } from '../../../../Redux/course/actions';
import { Link, useNavigate } from 'react-router-dom';
import { GetUrlFile } from '../../../../util/getFile';
import { GetAllUsers, GetUserById, GetAllLevels, GetAllCategories, GetAllFavorites } from '../../../../Redux/actions';
import FormerCard from './LandingLayout/FormerCard';
import { GetAllFeedbacks } from '../../../../Redux/feedback/actions';
import FeedbackCard from './FeedbackCard';
import IconArrowWaveLeftUp from '../../../../components/Icon/IconArrowWaveLeftUp';
import CategoryCard from '../../workspace/Category/CategoryCard';
import CategoryList from '../../workspace/Category/CategoryList';
import ClaimBar from '../../workspace/Feedbacks/Claims/ClaimBar';
import { calculateAverageRating } from '../../../../util/calculateAverageRating';
import { useUser } from '../../../../hooks';

const Home = () => {
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
        dispatch(GetAllUsers());
        setFormers(users);
    }, [dispatch]);

    useEffect(() => {
        dispatch(GetAllFavorites());
        dispatch(GetAllFeedbacks());
        dispatch(GetAllCategories());
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
    const handleBuyTriwebClick = () => {
        navigate('/Triwebusiness');
      };
    

    return (
        <div className="">
            <div className=" w-full flex flex-row  items-end -mt-[200px] h-[700px]   bg-primary-light bg-[url('/assets/images/2020.avif')] bg-cover  bg-no-repeat  dark:bg-black">
                <div className="relative text-white mt-20 w-full">
                    <div className="flex flex-col items-center justify-center mt-20 sm:-ms-32 sm:flex-row xl:-ms-60">
                        <div className="mb-2 flex gap-1 text-end text-base leading-5 sm:flex-col xl:text-xl">
                            <span>It's free </span>
                            <span>For everyone</span>
                        </div>
                        <div className="me-4 ms-2 hidden sm:block  text-white rtl:rotate-y-180">
                            <IconArrowWaveLeftUp className="w-16 xl:w-28" />
                        </div>
                        <div className="mb-2 text-center text-2xl font-bold text-white md:text-5xl">Tri Training</div>
                    </div>
                    <form action="" method="" className="mb-6 mt-20">
                        <div className="relative mx-auto max-w-[580px]">
                            <input type="text" placeholder="Ask a question" className="form-input py-3 ltr:pr-[100px] rtl:pl-[100px]" />
                            <button type="button" className="btn btn-primary absolute top-1 shadow-none ltr:right-1 rtl:left-1">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-col ">
                <div className="my-10">
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="max-w-[980px] w-full">
                            <h3 className="mb-6 text-xl font-bold md:text-3xl">Popular Courses</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                                {courses.slice(0, 6).map((course: any) => {
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
                            <div className="flex justify-end mr-10 mt-10">
                                <Link to="/allcourses" className="font-bold flex gap-3">
                                    <p className="tracking-wide font-mono">See more </p>
                                    <img src="assets\images\book-stack.png" className="w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full my-20">
                    <div className="max-w-[1300px] w-full">
                        <div className="flex items-center justify-between">
                            <h1 className="mb-6 text-xl font-bold md:text-3xl">Top Categories</h1>
                            {loggedInUser && loggedInUser.role.description.toLowerCase() !== 'user' && (
                                <div className="h-full hover:bg-black/10 p-2 flex items-center justify-center cursor-pointer rounded-sm" onClick={() => navigate('/GestionCategories')}>
                                    <img src="/assets/images/edit.svg" alt="edit button" />
                                </div>
                            )}
                        </div>

                        <CategoryList categories={categories} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
                <div className="  max-w-[600px] lg:max-w-[900px] w-full my-4">
                    <div className=" lg:grid  lg:grid-cols-2   lg:gap-3  lg:place-items-center flex flex-col-reverse ">
                        <div className="lg:pr-10 ">
                            <div className=" lg:gap-1  mb-4  flex max-lg:justify-center mt-4">
                                <img src="\assets\images\logo_-_triweb.png" className="w-[130px]" />
                                <p className="text-[#D92929] text-4xl  ">
                                    <span className="text-[#8C8C8C] font-semibold">u</span>siness
                                </p>
                            </div>
                            <p className="text-3xl font-semibold font-mono max-lg:text-center lg:leading-normal lg:pr-4 mb-4">Develop your team's skills with TRI-TAINING Business</p>
                            <ul className="list-disc ml-[20px] ">
                                <li className="font-semibold text-lg lg:leading-relaxed mb-2">Unlimited access to over 26,000 of the best TRI-TAINING courses, anytime and anywhere</li>
                                <li className="font-semibold text-lg lg:leading-relaxed  mb-2">International selection in 14 languages</li>
                                <li className="font-semibold text-lg lg:leading-relaxed  mb-2">The best certifications in technology and business fields</li>
                            </ul>
                            <div className="flex gap-2 text-center">
                            <button
                                 className="border bg-[#232526] border-black text-white font-semibold text-lg  w-1/2 lg:w-[200px] h-[45px] mt-4 lg:mr-4 hover:bg-black"
                                 onClick={handleBuyTriwebClick} // Step 4: Add onClick handler
                                    >
                                         Buy Triweb Business
                            </button>
                                <button className="border border-1 border-black  font-bold text-lg lg:w-40 w-1/2 h-[45px] mt-4 hover:bg-gray-200">Learn more</button>
                            </div>
                        </div>
                        <div className="h-full w-full">
                            <img src="\assets\images\triwebusiness.png" className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full mt-20">
                <div className="flex  flex-col-reverse max-w-[600px] lg:max-w-[900px]  w-full my-4">
                    <div className="lg:grid  lg:grid-cols-2   lg:gap-3  ">
                        <img src="\assets\images\formateur.png" />
                        <div className="flex flex-col mt-20 lg:pl-10  w-full">
                            <p className="text-4xl font-semibold font-mono leading-normal max-lg:text-center mb-4">Become an instructor</p>
                            <p className="font-semibold  text-xl leading-relaxed mb-4 max-lg:text-center">
                                Our instructors from around the world teach millions of learners on TRI-TAINING. We provide you with the tools and skills needed to teach what you love.
                            </p>
                            <button
                                className="border bg-[#232526] border-black text-white font-semibold text-lg w-[200px] max-lg:w-full h-[45px] mt-4 mr-4 hover:bg-black"
                                onClick={() => navigate('/addformer')}
                            >
                                Start teaching today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
