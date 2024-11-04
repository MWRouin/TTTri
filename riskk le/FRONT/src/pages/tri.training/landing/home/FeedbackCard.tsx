import React, { useState } from 'react';

interface FeedbackCardProps {
  name: string;
  comment: string;
  rating: number;
  designation: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, comment, rating, designation }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} className="text-yellow-500 text-2xl">
        {index < rating ? '★' : '☆'}
      </span>
    ));

  const initialImages = [
    'public/assets/images/profile-4.jpeg',
    'public/assets/images/profile-2.jpeg',
    'public/assets/images/profile-3.jpeg',

  ];

  const [images, setImages] = useState<string[]>(initialImages);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageChange = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Trigger the animation and update the images array after it completes
    setTimeout(() => {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const lastImage = newImages.pop() as string;
        newImages.unshift(lastImage);
        return newImages;
      });

      setIsAnimating(false);
    }, 1000); // Duration must match the CSS transition
  };

  return (
    <div className='flex flex-col relative justify-center gap-6 h-full pt-10 overflow-hidden'>
      <div className="flex justify-end w-full items-center h-full">
        <div className='flex gap-2 items-start relative left-[-40px] top-[-75px] max-w-[400px]'>
          {images.slice(1).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`profile-${index + 1}`}
              className={`object-cover border-white border-4 rounded-2xl transition-transform duration-1000 ease-in-out ${
                isAnimating && index === images.length - 2 ? 'translate-x-[400px] translate-y-[220px] scale-[3] h-[8rem] ' : 'h-[8rem]'
              }`}
            />
          ))}
        </div>
        <div className='h-full flex flex-col items-center gap-10 mb-10'>
          <h1 className='text-4xl font-bold lg:text-4xl mr-20 relative left-[70px]'>We Love Our Client Feedback</h1>
          <img
            src={images[0]} // Display the first image as the largest one
            alt="large-profile"
            className={`w-3/4 h-full object-cover border-white border-4 rounded-2xl relative left-[50px] transition-transform duration-1000 ease-in-out`}
          />
        </div>
        <div className="max-w-lg px-6 py-4 relative mr-48 w-1/2" style={{ backgroundColor: 'inherit' }}>
          <div className="mt-10 flex items-start mb-4">
            <div className="flex-grow">
              <p className="text-xl leading-relaxed text-gray-700 mb-4 break-all">{comment}</p>
            </div>
          </div>
          <div className="flex flex-col items-start mb-4">
            <div className="flex items-center mb-2">
              <div className="text-yellow-500 text-2xl">{stars}</div>
            </div>
            <div className="text-xl font-medium text-black">{name}</div>
          </div>
          <div className="text-md text-gray-500 mb-4">{designation}</div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 bg-gray-200 hover:bg-red-500 flex items-center justify-center rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M11.854 1.646a.5.5 0 0 1 0 .708L5.707 8.5l6.147 6.146a.5.5 0 0 1-.708.708l-6.5-6.5a.5.5 0 0 1 0-.708l6.5-6.5a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-200 hover:bg-red-500 flex items-center justify-center rounded" onClick={handleImageChange}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M4.146 1.646a.5.5 0 0 1 .708 0l6.5 6.5a.5.5 0 0 1 0 .708l-6.5 6.5a.5.5 0 1 1-.708-.708L10.293 8 4.146 1.854a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
