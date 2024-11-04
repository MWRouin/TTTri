import React, { useEffect, useState } from 'react'
import { calculateAverageRating } from '../../../../../util/calculateAverageRating';
import { useDispatch, useSelector } from 'react-redux';
import IconSearch from '../../../../../components/Icon/IconSearch';
import ReactStars from 'react-stars';
import FilterSideBar from './FilterSideBar';
import themeConfig from '../../../../../theme.config';

export default function FilterCourses({isSidebarVisible,setIsSidebarVisible}:any) {
    const dispatch = useDispatch();
    const courses = useSelector((state: any) => state.Course.ListCourses);
    const listLevels=useSelector((state:any)=>state.Level.ListLevels)
    const feeds=useSelector((state:any)=>state.Feedback.ListFeedbacks)
    const [isDurationVisible, setIsDurationVisible] = useState<boolean>(false);
    const [isLevelVisible, setIsLevelVisible] = useState<boolean>(false);
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
    const [isRatingVisible, setIsRatingVisible] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('All categories');
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [filteredItems, setFilteredItems] = useState<any[]>([]);
    const [sortOption, setSortOption] = useState<string>('Most Recent');
    const [search, setSearch] = useState<string>('');
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState<boolean>(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const categories = useSelector((state: any) => state.Categorie.ListCategories);

    
      useEffect(() => {
        if (!courses || !feeds) return;
    
        const courseFeedbackStats = courses.map((course: any) => {
          const courseFeedbacks = feeds.filter((feedback: any) => feedback.courseId === course.courseId);
          const commentsCount = courseFeedbacks.length;
          const averageRating = calculateAverageRating(courseFeedbacks);
          return {
            ...course,
            commentsCount,
            averageRating,
          };
        });
    
        // Filter logic
        let filtered = courseFeedbackStats.filter((course: any) => {
          const isCategoryMatch = selectedCategory === 'All categories' || course.categorieId?.toString() === selectedCategory;
          const isLevelMatch = selectedLevel === null || course.levelId?.toString() === selectedLevel;
          return isCategoryMatch &&
            isLevelMatch &&
            (course.title.toLowerCase().includes(search.toLowerCase()) || 
             course.description.toLowerCase().includes(search.toLowerCase())) &&
            (selectedDuration === null || course.duration >= selectedDuration);
        });
    
        // Rating filter
        if (selectedRating !== null) {
          filtered = filtered.filter((course: any) => course.averageRating >= selectedRating);
        }
    
        // Sorting
        if (sortOption === 'Most Rated') {
          filtered = filtered.sort((a: any, b: any) => b.averageRating - a.averageRating);
        } else if (sortOption === 'Most Recent') {
          filtered = filtered.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (sortOption === 'Most Commented') {
          filtered = filtered.sort((a: any, b: any) => b.commentsCount - a.commentsCount);
        }
    
        setFilteredItems(filtered);
      }, [search, selectedCategory, selectedRating, selectedDuration, courses, feeds, sortOption, selectedLevel]);
      const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };
      const toggleSortDropdown = () => {
        setIsSortDropdownOpen(!isSortDropdownOpen);
      };
      const handleSortSelect = (option: string) => {
        setSortOption(option);
        setIsSortDropdownOpen(false);
      };
      const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
        setIsSortDropdownOpen(false); // Close the sort dropdown if open
      };
      const handleCategorySelect = (categoryId: number | null) => {
        setSelectedCategory(categoryId === null ? 'All categories' : categoryId.toString());
        setIsDropdownOpen(false);
      };
    

  return (
    <div className='flex flex-row-reverse'> 
     <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
    {/* Left Side: Filter Button, Most Recent */}
    <div className="flex items-center gap-4 flex-grow">
      {/* Filter Button */}
      <button onClick={toggleSidebarVisibility}  className="flex h-[55px] items-center justify-center border border-black w-[100px] shadow-none  ">
        Filter
      </button>

      {/* Sort Dropdown */}
      <div className="">
        <button
          onClick={toggleSortDropdown}
          className="flex h-[55px] items-center justify-around border border-black w-[150px] shadow-none"
        >
          {sortOption}
          <svg
            className={`w-3 h-4 ml-2 transition-transform duration-200 ${
              isSortDropdownOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isSortDropdownOpen && (
          <div className="absolute flex justify-center mt-2  bg-white shadow-lg rounded-lg z-50">
            <ul className="py-1">
              {['Most Recent', 'Most Rated', 'Most Commented'].map(
                (option) => (
                  <li
                    key={option}
                    onClick={() => handleSortSelect(option)}
                    className={`px-4 py-2 cursor-pointer ${
                      sortOption === option
                        ? 'bg-gray-200'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>

   </div>
  )
}
