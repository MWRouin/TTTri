import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const GrayCard = () => {
  return (
    <Card className="hidden lg:w-full rounded-none ml-0 mr-0 lg:block lg:bg-gray-800 lg:text-white lg:pb-5 lg:pt-5 lg:shadow-lg lg:w-full lg:mb-4">
      <CardBody className='wrap break-words  max-w-[1140px] mx-auto pr-[22rem]'>
        <Typography variant="h1">Tableau 2024 Advanced: Master Tableau in Data Science</Typography>
        <Typography variant="h4" className="mt-3">
          Master Tableau in Data Science by solving Real-Life Analytics Problems. Learn Visualization and Data Mining by doing!
        </Typography>
        <Typography variant="paragraph" className="mt-3">
          Créé par Kirill Eremenko, SuperDataScience Team, Ligency Team
        </Typography>
        <Typography variant="paragraph" className="mt-3">
          Dernière mise à jour : 07/2024
        </Typography>
      </CardBody>
    </Card>
  );
};

export default GrayCard;
