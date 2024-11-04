import React, { useState, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import Category from './Category';


export default function CategoryCourse() {
  const [categories, setCategories] = useState([
    'Web development',
    'Design',
    'Web integration',
    'Soft Skills',
  ]);

  return (
    <div>
     <div className="h-px border-b border-white-light  dark:border-[#1b2e4b] "></div>
      <div className="panel p-0 flex-1 overflow-x-hidden h-full">
        <div className="flex flex-col h-full">
          <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

          <div className="flex flex-wrap flex-col md:flex-row xl:w-auto justify-between items-center px-4 pb-4">
            <div className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {categories.map((item, index) => (
                <Category key={index} category={item} />
              ))}
            </div>
          </div>

          <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>
        </div>
      </div>
    </div>
  );
}
