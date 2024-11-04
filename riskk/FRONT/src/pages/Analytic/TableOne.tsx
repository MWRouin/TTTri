import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "../../Redux/user/actions";
import { GetAllFeedbacks } from "../../Redux/feedback/actions";
import { GetAllParticipations } from "../../Redux/participation/actions";
import { GetAllCourses } from "../../Redux/course/actions";
import { GetAllCategories } from "../../Redux/categorie/actions";
import ReactStars from "react-stars";


const TableOne = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.Categorie.ListCategories);
  const categorie = useSelector((state: any) => state.Categorie.Categorie);
  const participants = useSelector((state: any) => state.Participation.ListParticipations);
  const courses = useSelector((state: any) => state.Course.ListCourses);
  const users = useSelector((state: any) => state.User.ListUsers);
  const feedbackList = useSelector((state: any) => state.Feedback.ListFeedbacks);
  const feedback = useSelector((state: any) => state.Feedback.Feedback);
  const [topCourses, setTopCourses] = useState<{ course: any, participantCount: number }[]>([]);
  const [averageRatings, setAverageRatings] = useState<Record<number, number>>({});


  useEffect(() => {
    dispatch(GetAllUsers());
    dispatch(GetAllFeedbacks());
    dispatch(GetAllParticipations());
    dispatch(GetAllCourses());
    dispatch(GetAllCategories());
    console.log(topCourses)
  }, [dispatch]);

  useEffect(() => {
    if (participants.length && courses.length) {
      setTopCourses(calculateTopCourses(participants, courses));
    }
  }, [topCourses]);

  useEffect(() => {
    if (feedbackList.length > 0 && topCourses.length > 0) {
      const ratings = calculateRatings(feedbackList, topCourses);
      setAverageRatings(ratings);
    }
  }, [feedbackList, topCourses]);

  const calculateRatings = (feedbackList: any[], topCourses: { course: any }[]) => {
    const ratings: Record<number, number> = {};

    topCourses.forEach(({ course }) => {
      const filteredFeedbacks = feedbackList.filter(feedback => feedback.courseId === course.courseId);
      const total = filteredFeedbacks.reduce((sum, feedback) => sum + (feedback.rating || 0), 0);
      const average = filteredFeedbacks.length > 0 ? total / filteredFeedbacks.length : 0;
      ratings[course.courseId] = average;
    });

    return ratings;
  };

  const calculateTopCourses = (participants: any[], courses: any[]) => {
    const courseCounts: Record<number, number> = {};

    participants.forEach(participant => {
      const courseId = participant.courseId;
      if (courseCounts[courseId]) {
        courseCounts[courseId]++;
      } else {
        courseCounts[courseId] = 1;
      }
    });

    const topCoursesArray = Object.keys(courseCounts)
      .map(courseId => ({
        course: courses.find(course => course.courseId === Number(courseId))!,
        participantCount: courseCounts[Number(courseId)]
      }))
      .sort((a, b) => b.participantCount - a.participantCount)
      .slice(0, 5);

    return topCoursesArray;
  };

  const getCategoryName = (categorieId: number) => {
    const categorie = categories.find((categorie: any) => categorie.categorieId === categorieId);
    return categorie ? categorie.description : "Unknown";
  };

  const getFormerName = (userId: number) => {
    const user = users.find((user: any) => user.userId === userId);
    return user ? `${user.firstname} ${user.lastname}` : "Unknown";
  };

  const minutesToFloatHours = (minutes: number) => {
    const hours = (minutes / 60).toFixed(2);
    return parseFloat(hours);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top 5 Courses by participation 
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Courses
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Participants
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Duration
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Reviews Average
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Former
            </h5>
          </div>
        </div>

        {topCourses.map(({ course, participantCount }, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === topCourses.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full overflow-hidden object-cover" src={ `http://localhost:5000/Resources/${course.image}`} alt="Course" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {course?.title}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{ course? getCategoryName(course.categorieId): ''}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{participantCount}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{minutesToFloatHours(course?.duration).toFixed(2)} h</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <ReactStars 
                count={5}
                value={averageRatings[course?.courseId] || 0}
                size={24}
                edit={false}
                color2={'#ffd700'}
              />
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-6">{getFormerName(course?.userId)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;