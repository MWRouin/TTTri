import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconUsersGroup from '../../components/Icon/IconUsersGroup';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllFeedbacks } from '../../Redux/feedback/actions';
import { GetAllParticipations } from '../../Redux/participation/actions';
import { GetAllCourses } from '../../Redux/course/actions';
import ChartThree from './ChartThree';
import TableOne from './TableOne';
import IconOpenBook from '../../components/Icon/IconOpenBook';
import IconNotesEdit from '../../components/Icon/IconNotesEdit';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
import ChartFour from './ChartFour';
import ChartFive from './ChartFive';

const Analytic = () => {
    const dispatch = useDispatch();
    const participants = useSelector((state:any) => state.Participation.ListParticipations);
    const participant = useSelector((state:any) => state.Participation.Participation);
    const courses = useSelector((state:any) => state.Course.ListCourses);
    const course = useSelector((state:any) => state.Course.Course);
    const feedbackList = useSelector((state:any) => state.Feedback.ListFeedbacks);
    const [totalParticipants, setTotalParticipants] = useState(0);

    const [totalCourses, setTotalCourses] = useState<number>(0);
    const [totalFeedbacks, setTotalFeedbacks] = useState<number>(0);
   
    useEffect(() => {
        dispatch(setPageTitle('Analytics Admin'));
        dispatch(GetAllFeedbacks());
        dispatch(GetAllParticipations());
        dispatch(GetAllCourses());
    }, [dispatch]);

    useEffect(() => {
        setTotalCourses(calculateTotalCourses(courses));
    }, [courses]);

    const calculateTotalCourses = (courses:any) => {
        return courses ? courses.length : 0;
    };

    useEffect(() => {
        setTotalFeedbacks(calculateTotalFeedbacks(feedbackList));
    }, [feedbackList]);
     
    const calculateTotalFeedbacks = (feedbackList:any[]) => {
        return feedbackList ? feedbackList.length : 0;
    };

    useEffect(() => {
        const total = participants ? participants.length : 0;
        setTotalParticipants(total);
    }, [participants, courses]);


    const isDark = useSelector((state:any) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state:any) => state.themeConfig.rtlClass === 'rtl');

   
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Analytics</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-7">
                    <div className="panel h-full sm:col-span-1 lg:col-span-1">
                        {/* statistics */}
                        <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">Total participants</h5>
                        <IconUsersGroup/>
                        </div>
                        <div className=" flex justify-center text-[#e95f2b] text-3xl font-bold my-10">
                            <div>
                           <span>{totalParticipants}</span>
                         
                            </div>
                        </div>
                    </div>
                    <div className="panel h-full ">
                    <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg "> Total Courses</h5>
                            <IconOpenBook   className="fill-gray-200 dark:fill-white"/>
                      </div>
                        <div className="flex justify-center  text-[#e95f2b] text-3xl font-bold my-10">
                            <span> {totalCourses}</span>
                            
                        </div>
                       
                    </div>
                    <div className="panel h-full ">
                    <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">Total Reviews</h5>
                            <IconNotesEdit />
                        </div>
                      
                        <div className="flex justify-center text-[#e95f2b] text-3xl font-bold my-10">
                            <span> {totalFeedbacks}</span>
                        </div>
                        
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    <div className="panel h-full p-0 lg:col-span-2">
                        < ChartFive />
                    </div>
                    <div className="panel h-full p-0 lg:col-span-6">
                        <ChartThree/>
                    </div>
                    
                    <div className="panel h-full p-0 lg:col-span-2">
                    <ChartFour />
                    </div>
                   <div className="panel h-full p-0 lg:col-span-6">
                   <ChartTwo />
                 </div>
                   <div className="panel h-full p-0 lg:col-span-8">
                   <div className="flex items-start justify-between dark:text-white-light mb-1 p-5 ">
                  <h5 className="font-semibold text-lg">Participants Per Month For this Year</h5>
                  </div>
                   <ChartOne />
                   </div>
                    <div className="col-span-12 xl:col-span-8">
                   <TableOne />
                   </div>
            </div> 
        </div>
        </div>
       
    );
};

export default Analytic;
