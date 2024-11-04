import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllParticipations } from '../../Redux/participation/actions';
import { GetAllCourses } from '../../Redux/course/actions';


interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const dispatch = useDispatch();
  const participants = useSelector((state: any) => state.Participation.ListParticipations);
  const courses = useSelector((state: any) => state.Course.ListCourses);

  const [participantsSeries, setParticipantsSeries] = useState<number[]>([]);
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Participants',
        data: [],
      },
    ],
  });

  useEffect(() => {
    dispatch(GetAllParticipations());
    dispatch(GetAllCourses());
    console.log(participants)
 
  }, [dispatch]);

  useEffect(() => {
    const total = participants ? participants.length : 0;
    setParticipantsSeries(calculateParticipantsPerMonth(participants));
  }, [participants]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: 'Participants',
          data: participantsSeries,
        },
      ],
    }));
  }, [participantsSeries]);

  const calculateParticipantsPerMonth = (participants: any[]) => {
    const currentYear = new Date().getFullYear();
    const months = Array(12).fill(0);
  if(participants){
    participants.forEach(participant => {
      const participationDate = new Date(participant.date);
      if (participationDate.getFullYear() === currentYear) {
          const month = participationDate.getMonth();
          months[month]++;
      }
  });
  }
   

    return months;
};

  const options: ApexOptions = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 335,
      type: 'area',
      dropShadow: {
        enabled: true,
        color: '#623CEA14',
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: 'straight',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: '#fff',
      strokeColors: ['#3056D3', '#80CAEE'],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
      min: 0,
      max: 10,
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
