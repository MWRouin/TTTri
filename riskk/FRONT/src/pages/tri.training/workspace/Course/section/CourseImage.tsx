// components/CourseImage.tsx
import React from 'react';

interface CourseImageProps {
  imageUrl: string;
  title:string
}

const CourseImage: React.FC<CourseImageProps> = ({ imageUrl,title }) => (
  <div className="relative h-[16rem] bg-black">
    <img src={`http://localhost:5000/Resources/${imageUrl}`} alt="Course" className="h-full w-full blur-sm object-cover" />
   
    <div className="absolute top-40 left-20">
      <div></div>
      <img src={`http://localhost:5000/Resources/${imageUrl}`} alt="Course Thumbnail" className=" object-cover  w-[100px] h-[100px] border-4 z-50 mt-10" />
      <h1 className='text-xl font-bold '>{title}</h1>
    </div>
   
 
  </div>
);

export default CourseImage;
