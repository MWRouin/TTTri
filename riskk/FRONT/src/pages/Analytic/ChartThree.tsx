import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { GetAllFeedbacks } from '../../Redux/feedback/actions';
import { GetAllParticipations } from '../../Redux/participation/actions';
import { GetAllCourses } from '../../Redux/course/actions';
import { GetAllCategories } from '../../Redux/categorie/actions';

interface ChartThreeState {
    series: number[];
    labels: string[];
}

const ChartThree: React.FC = () => {
    const [state, setState] = useState<ChartThreeState>({
        series: [],
        labels: [],
    });

    const dispatch = useDispatch();
    const participants = useSelector((state: any) => state.Participation.ListParticipations);
    const courses = useSelector((state: any) => state.Course.ListCourses);
    const categories = useSelector((state: any) => state.Categorie.ListCategories);

    useEffect(() => {
        dispatch(GetAllFeedbacks());
        dispatch(GetAllParticipations());
        dispatch(GetAllCourses());
        dispatch(GetAllCategories());
    }, [dispatch]);

    useEffect(() => {
        if (categories && participants && courses) {
            const categoryCounts = calculateCategoryParticipation(participants, courses, categories);
            const series = categories.map((category: any) => categoryCounts[category.categorieId] || 0);
            const labels = categories.map((categorie: any) => categorie.description);;

            setState({ series, labels });
        }
    }, [participants, courses, categories]);

    const calculateCategoryParticipation = (participants: any[], courses: any[], categories: any[]) => {
        const categoryCounts: Record<number, number> = {};

        // Initialize counts for all categories to 0
        categories.forEach(category => {
            categoryCounts[category.categorieId] = 0;
        });

        participants.forEach(participant => {
            const course = courses.find(course => course.courseId === participant.courseId);
            if (course && course.categorieId !== undefined) {
                const categorieId = course.categorieId;
                if (categoryCounts[categorieId] !== undefined) {
                    categoryCounts[categorieId]++;
                } else {
                   /*  console.warn(`Warning: Course with ID ${course.courseId} has an undefined or missing category ID.`); */
                }
            }
        });

        return categoryCounts;
    };

    const options: ApexOptions = {
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            type: 'donut',
        },
        colors: ['#3C50E0', '#8FD3EF', '#6577F3', '#8FD0EF', '#0FADCF', '#6577F3'],
        labels: state.labels,
        legend: {
            show: false,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    background: 'transparent',
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 2600,
                options: {
                    chart: {
                        width: 340,
                    },
                },
            },
            {
                breakpoint: 640,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
    };

    return (
        <div>
            <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b border-white-light dark:border-[#1b2e4b]">
                <h5 className="font-semibold text-lg">Categories By Participation</h5>
            </div>

            <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="donut"
                    />
                </div>
            </div>

            <div className="flex flex-wrap items-left justify-left gap-y-8">
                {state.labels.map((label, index) => (
                    <div key={index} className="w-full sm:w-1/2 px-4">
                        <div className="flex items-center">
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: options.colors![index] }}
                            ></span>
                            <p className="flex w-full justify-left text-sm font-small text-black dark:text-white">
                                <span>{label} : </span>
                                <span>{((state.series[index] / participants.length) * 100).toFixed(2)}%</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChartThree;
