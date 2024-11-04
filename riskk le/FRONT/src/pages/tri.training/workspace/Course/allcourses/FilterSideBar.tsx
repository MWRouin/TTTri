import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

export default function FilterSideBar({ onFilterChange, levels, categories }: any) {
    const [isDurationVisible, setIsDurationVisible] = useState<boolean>(false);
    const [isLevelVisible, setIsLevelVisible] = useState<boolean>(false);
    const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
    const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
    const [isRatingVisible, setIsRatingVisible] = useState<boolean>(false);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [search, setSearch] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('Most Recent');
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const { categoryId } = useParams<{ categoryId?: string }>();

    // Toggle visibility functions
    const toggleRatingVisibility = () => {
        setIsRatingVisible(!isRatingVisible);
        setIsDurationVisible(false);
        setIsLevelVisible(false);
    };

    const toggleDurationVisibility = () => {
        setIsDurationVisible(!isDurationVisible);
        setIsRatingVisible(false);
        setIsLevelVisible(false);
    };

    const toggleLevelVisibility = () => {
        setIsLevelVisible(!isLevelVisible);
        setIsRatingVisible(false);
        setIsDurationVisible(false);
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    };

    // Handlers to update the selected filters and pass them to parent
    const handleRatingSelect = (rating: number) => {
        setSelectedRating(rating);
        onFilterChange({ rating, level: selectedLevel, duration: selectedDuration });
    };

    const handleDurationSelect = (duration: number) => {
        setSelectedDuration(duration);
        onFilterChange({ rating: selectedRating, level: selectedLevel, duration });
    };

    const handleLevelSelect = (level: number) => {
        setSelectedLevel(level);
        onFilterChange({ rating: selectedRating, level, duration: selectedDuration });
    };

    const handleCategorySelect = (categoryId: string | null) => {
        const categoryNumber = categoryId ? parseInt(categoryId) : null;

        if (categoryNumber) {
            navigate(`/allcourses/${categoryNumber}`);
        } else {
            navigate(`/allcourses`);
        }
    };

    return (
        <div className="w-[300px] mt-1 px-5">
            {/* Filter by Rating */}

            <div className="border-b border-b-gray-300 m-0"></div>
            <div className="flex flex-col justify-between items-center border-b border-b-gray-300 w-full">
                <button onClick={toggleRatingVisibility} className="flex h-[55px] items-center justify-between w-full">
                    <p className="text-lg font-bold">Rating</p>
                    <svg
                        className={`w-3 h-4 ml-2 transition-transform duration-200 ${isRatingVisible ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            {isRatingVisible && (
                <div className="flex flex-col gap-2 mt-1">
                    {[4.5, 4, 3.5, 3].map((rating) => (
                        <label key={rating} className="flex items-center py-1 gap-1 cursor-pointer m-0">
                            <input type="radio" name="rating" value={rating} checked={selectedRating === rating} onChange={() => handleRatingSelect(rating)} />
                            <span>Starting from {rating}</span>
                        </label>
                    ))}
                </div>
            )}

            {/* Filter by Duration */}
            <div className="flex flex-col justify-between items-center border-b border-b-gray-300 w-full">
                <button onClick={toggleDurationVisibility} className="flex h-[55px] items-center justify-between w-full">
                    <p className="text-lg font-bold">Duration</p>
                    <svg
                        className={`w-3 h-4 ml-2 transition-transform duration-200 ${isDurationVisible ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            {isDurationVisible && (
                <div className="flex flex-col gap-2 mt-1">
                    {[1, 5, 10, 15, 20, 25].map((duration, index) => (
                        <label key={duration} className="flex items-center py-1 gap-1 cursor-pointer m-0">
                            <input type="radio" name="duration" value={duration} checked={selectedDuration === duration} onChange={() => handleDurationSelect(+duration)} />
                            <span>{duration} hours</span>
                        </label>
                    ))}
                </div>
            )}

            {/* Filter by Level */}
            <div className="flex justify-between items-center border-b border-b-gray-300">
                <button onClick={toggleLevelVisibility} className="flex h-[55px] items-center justify-between w-full">
                    <p className="text-lg font-bold">Level</p>
                    <svg
                        className={`w-3 h-4 ml-2 transition-transform duration-200 ${isLevelVisible ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {isLevelVisible && (
                <div className="flex flex-col gap-2 mt-1">
                    {levels.map((level: any) => (
                        <label key={level.levelId} className="flex items-center py-1 gap-1 cursor-pointer m-0">
                            <input type="radio" name="level" value={level.levelId} checked={selectedLevel === level.levelId} onChange={() => handleLevelSelect(level.levelId)} />
                            <span>{level.description}</span>
                        </label>
                    ))}
                </div>
            )}

            {/* Filter by Category */}
            <div className="flex justify-between items-center border-b border-b-gray-300">
                <button onClick={toggleCategoryDropdown} className="flex h-[55px] items-center justify-between w-full">
                    <p className="text-lg font-bold">Categories</p>
                    <svg
                        className={`w-3 h-4 ml-2 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            {isCategoryDropdownOpen && (
                <div className="space-y-4">
                    <ul className="py-1">
                        <label className="flex items-center py-1 gap-1 cursor-pointer m-0">
                            <input type="radio" name="category" value="All categories" checked={!categoryId} onChange={() => handleCategorySelect(null)} />
                            <span> All Categories</span>
                        </label>
                        {categories.map((category: any) => (
                            <label key={category.levelId} className="flex items-center py-1 gap-1 cursor-pointer m-0">
                                <input
                                    type="radio"
                                    name="category"
                                    value={category.categorieId}
                                    checked={categoryId == category.categorieId}
                                    onChange={() => handleCategorySelect(category.categorieId)}
                                />
                                <span>{category.description}</span>
                            </label>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
