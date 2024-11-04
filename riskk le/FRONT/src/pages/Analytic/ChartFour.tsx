import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllParticipations } from '../../Redux/participation/actions';
import { GetAllUsers } from '../../Redux/user/actions';

const ChartFour: React.FC = () => {
    const dispatch = useDispatch();
    const participants = useSelector((state: any) => state.Participation.ListParticipations);
    const users = useSelector((state: any) => state.User.ListUsers);

    const [ageCounts, setAgeCounts] = useState<{ [key: string]: number }>({});
    const [participantsSeries, setParticipantsSeries] = useState<{ name: string; data: { x: string; y: number }[] }[]>([]);

    useEffect(() => {
        dispatch(GetAllParticipations());
        dispatch(GetAllUsers());
    }, [dispatch]);

    useEffect(() => {
        // Count number of participants per age range (15-80) ensuring unique user IDs
        const ageCountMap: { [key: string]: number } = {};
        const processedUserIds = new Set<number>();
        if(participants){
            participants.forEach((participation: any) => {
                if (!processedUserIds.has(participation.userId)) {
                    const user = users.find((user: any) => user.userId === participation.userId);
                    if (user && user.age !== undefined && user.age >= 15 && user.age <= 80) {
                        const ageRangeStart = Math.floor((user.age - 15) / 5) * 5 + 15;
                        const ageRangeEnd = ageRangeStart + 4; // Correcting the end range to make it inclusive
                        const ageRange = `${ageRangeStart}-${ageRangeEnd}`;
    
                        if (!ageCountMap[ageRange]) {
                            ageCountMap[ageRange] = 0;
                        }
                        ageCountMap[ageRange]++;
                        processedUserIds.add(participation.userId);
                    }
                }
            });
    
        }
       
        setAgeCounts(ageCountMap);
    }, [participants, users]);

    useEffect(() => {
        // Convert age counts to chart series data and sort by age range
        const chartData = Object.entries(ageCounts)
            .map(([ageRange, count]) => ({
                x: ageRange,
                y: count,
            }))
            .sort((a, b) => {
                const [aStart] = a.x.split('-').map(Number);
                const [bStart] = b.x.split('-').map(Number);
                return aStart - bStart;
            });

        setParticipantsSeries([{ name: 'Participants', data: chartData }]);
    }, [ageCounts]);

    const isDark = useSelector((state: any) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: any) => state.themeConfig.rtlClass === 'rtl');

    const chartOptions = {
        chart: {
            height: 360,
            type: 'bar' ,
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
        colors: ['#AA32DD'],
        dropShadow: {
            enabled: true,
            blur: 3,
            color: '#AA32DD',
            opacity: 0.4,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
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
            categories: Object.keys(ageCounts).sort((a, b) => {
                const [aStart] = a.split('-').map(Number);
                const [bStart] = b.split('-').map(Number);
                return aStart - bStart;
            }),
            axisBorder: {
                show: true,
                color: isDark ? '#3b3f5c' : '#e0e6ed',
            },
        },
        yaxis: {
            tickAmount: 6,
            opposite: isRtl,
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
    };

    return (
        <div>
            <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b border-white-light dark:border-[#1b2e4b]">
                <h5 className="font-semibold text-lg">Total Participants by Age Range</h5>
            </div>
            <ReactApexChart
                options={chartOptions}
                series={participantsSeries}
                type="bar"
                height={360}
            />
        </div>
    );
};

export default ChartFour;
