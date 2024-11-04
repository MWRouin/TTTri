import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllParticipations } from '../../Redux/participation/actions';
import { GetAllCourses } from '../../Redux/course/actions';
import { GetAllCategories } from '../../Redux/categorie/actions';



const ChartFive: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: any) => state.Categorie.ListCategories);
    const categorie = useSelector((state: any) => state.Categorie.Categorie);
    const participants = useSelector((state:any) => state.Participation.ListParticipations);
    const courses = useSelector((state:any) => state.Course.ListCourses);
    const [totalParticipants, setTotalParticipants] = useState(0);
    const [totalCourses, setTotalCourses] = useState<number>(0);
    const [categoryParticipation, setCategoryParticipation] = useState<Record<number, number>>({});
    const [participantsSeries, setParticipantsSeries] = useState<number[]>([]);
    const [courseCategories, setCourseCategories] = useState<number[]>([]); 
  useEffect(() => {
    dispatch(GetAllParticipations());
    dispatch(GetAllCourses());
    dispatch(GetAllCategories());
}, [dispatch]);

useEffect(() => {
    setTotalCourses(calculateTotalCourses(courses));
}, [courses]);

const calculateTotalCourses = (courses:any) => {
    return courses ? courses.length : 0;
};

useEffect(() => {
    if (courses && categories) {
      setCourseCategories(calculateCoursesByCategory(courses, categories));
    }
  }, [courses, categories]);


useEffect(() => {
    const total = participants ? participants.length : 0;
    setTotalParticipants(total);
    setCategoryParticipation(calculateCategoryParticipation(participants, courses));
    setParticipantsSeries(calculateParticipantsPerMonth(participants));
}, [participants, courses]);


const isDark = useSelector((state:any) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
const isRtl = useSelector((state:any) => state.themeConfig.rtlClass === 'rtl');

const calculateParticipantsPerMonth = (participants: any[]) => {
    const months = Array(12).fill(0);
    if(participants){
        participants.forEach(participant => {
            const month = new Date(participant.date).getMonth();
            months[month]++;
        });
    }
  
    return months;
};
const calculateCategoryParticipation = (participants: any[], courses: any[]) => {
    const categoryCounts: Record<number, number> = {};

    if(participants){
        participants.forEach(participant => {
            const course = courses.find(course => course.CourseId === participant.courseId);
            if (course && course.categoryId !== undefined) {
                const categoryId = course.categoryId;
                if (categoryCounts[categoryId]) {
                    categoryCounts[categoryId]++;
                } else {
                    categoryCounts[categoryId] = 1;
                }
            }
        });
    }



   return categoryCounts;
};
const calculateCoursesByCategory = (courses: any[], categories: any[]) => {
    const categoryCounts = categories.map((categorie: any) => {
      return courses.filter((course: any) => course.categorieId === categorie.categorieId).length;
    });
    return categoryCounts;
  };
const CourseCategoriesSeries: any = {
    series: [
        {
            name: 'Participants',
            data: courseCategories,
        }
    ],
    options: {
        chart: {
            height: 360,
            type: 'bar',
            fontFamily: 'Nunito, sans-serif',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            colors: ['transparent'],
        },
        colors: ['#5c1ac3', '#ffbb44'],
        dropShadow: {
            enabled: true,
            blur: 3,
            color: '#515365',
            opacity: 0.4,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 8,
                borderRadiusApplication: 'end',
            },
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            itemMargin: {
                horizontal: 8,
                vertical: 8,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
            padding: {
                left: 20,
                right: 20,
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            categories: categories.map((category: any) => category.description),
            axisBorder: {
                show: true,
                color: isDark ? '#3b3f5c' : '#e0e6ed',
            },
        },
        yaxis: {
            tickAmount: 6,
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: isDark ? 'dark' : 'light',
                type: 'vertical',
                shadeIntensity: 0.3,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 100],
            },
        },
        tooltip: {
            marker: {
                show: true,
            },
        },
    },
};    

  return (
    <div>
    <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
    <h5 className="font-semibold text-lg ">Total Courses By Categories </h5>
</div>
<ReactApexChart
    options={CourseCategoriesSeries.options}
    series={CourseCategoriesSeries.series}
    type="bar"
    height={360}
/>
</div>
);
};
export default ChartFive ;



