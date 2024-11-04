import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { GetAllFeedbacks } from '../../Redux/feedback/actions';
import { GetAllParticipations } from '../../Redux/participation/actions';
import { GetAllUsers } from '../../Redux/user/actions';

interface ChartState {
    series: number[];
    labels: string[];
}

const ChartTwo: React.FC = () => {
    const [state, setState] = useState<ChartState>({
        series: [],
        labels: [],
    });

    const dispatch = useDispatch();
    const participants = useSelector((state: any) => state.Participation.ListParticipations);
    const users = useSelector((state: any) => state.User.ListUsers);

    useEffect(() => {
        dispatch(GetAllParticipations());
        dispatch(GetAllUsers());
    }, [dispatch]);

    useEffect(() => {
        const genderParticipation: { [key: string]: Set<number> } = {};

        users.forEach((user: { gender: string | number; userId: number; }) => {
            if (user.gender) {
                if (!genderParticipation[user.gender]) {
                    genderParticipation[user.gender] = new Set<number>();
                }
                if(participants){
                    const userParticipations = participants.filter((p: { userId: any; }) => p.userId === user.userId);
                    if (userParticipations.length > 0) {
                        genderParticipation[user.gender].add(user.userId);
                    }
                }
                
                
            }
        });

        const labels = Object.keys(genderParticipation);
        const series = Object.values(genderParticipation).map(set => set.size);

        setState({
            series,
            labels,
        });
    }, [participants, users]);

    const colors = state.labels.map(label => {
        if (label === 'Male') {
            return '#6577F3'; // Blue color for Male
        } else if (label === 'Female') {
            return '#9932CC'; // Pink color for Female
        } else {
            return '#000000'; // Default color for other labels
        }
    });

    const options: ApexOptions = {
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            type: 'donut',
        },
        colors,
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

    const totalParticipations = state.series.reduce((total, num) => total + num, 0);

    return (
        <div>
            <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b border-white-light dark:border-[#1b2e4b]">
                <h5 className="font-semibold text-lg">Participation By Gender</h5>
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
            <div className="flex flex-wrap items-start justify-start justify-center gap-y-8">
                {state.labels.map((label, index) => (
                    <div key={index} className="w-full sm:w-full px-4">
                        <div className="flex items-center space-x-2">
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: options.colors![index] }}
                            ></span>
                            <p className="text-sm font-small text-black dark:text-white">
                                <span>{label} : </span>
                                <span>{((state.series[index] / totalParticipations) * 100).toFixed(2)}%</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChartTwo;
