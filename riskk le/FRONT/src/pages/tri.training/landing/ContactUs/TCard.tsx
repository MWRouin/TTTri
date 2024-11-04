import React from 'react';

interface TCardProps {
  image: string;
  title: string;
  description: string;
}

const TCard: React.FC<TCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={image} alt={title} className="w-full object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
};

export default TCard;
