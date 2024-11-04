import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from '@material-tailwind/react';
import IconHeart from '../../../../../components/Icon/IconHeart';
import { AddFavorite, DeleteFavorite, GetAllFavorites } from '../../../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../../../../hooks';
import { useNavigate } from 'react-router-dom';

const CourseCard: React.FC<any> = ({ course, rating, former, category, level }) => {
    const dispatch = useDispatch();
    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;
    const [loggedUser] = useUser();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState<boolean>();
    const favorites = useSelector((state: any) => state.Favorite.ListFavorites);

    const [localFavorites, setLocalFavorites] = useState<any[]>(favorites);
    console.log(favorites);

    useEffect(() => {
        if (favorites) {
            const isFav = favorites.some((favorite: any) => favorite.courseId === course.courseId && favorite.userId === loggedUser?.userId);
            setIsFavorite(isFav);
        }
    }, [favorites]);

    const handleToggleFavorite = () => {
        if (!loggedUser) {
            alert('You need to log in to add favorites.');
            return;
        }

        if (isFavorite) {
            // Remove from favorites
            const favoriteToRemove = favorites.find((favorite: any) => favorite.courseId === course.courseId && favorite.userId === loggedUser.userId);
            dispatch(DeleteFavorite(favoriteToRemove.favoriteId));

            setIsFavorite(false);
        } else {
            const newFavorite = { userId: loggedUser.userId, courseId: course.courseId };
            dispatch(AddFavorite(newFavorite));
            setIsFavorite(true);
        }
    };

    const handleCardClick = () => {
        navigate(`/detailscourse/${course.courseId}`);
    };

    const isFavoriteRoute = location.pathname === '/favouritelist';

    if (isFavoriteRoute && !isFavorite) {
        return null;
    }

    return (
        <Card className="w-[20rem] h-full bg-white shadow-none border rounded-md" onClick={handleCardClick}>
            <CardHeader floated={false} color="blue-gray" className="relative h-48 my-0 mx-0.5 rounded-md">
                {course.image ? (
                    <img src={`${resourcesUrl}/${course.image}`} alt="course image" className="w-full h-full object-cover" />
                ) : (
                    <img src="/assets/images/book.jpg" alt="default image" className="w-full h-full object-cover" />
                )}
                <div
                    onClick={(e) => e.stopPropagation()} // Stop click propagation here
                    className="absolute w-7 h-7 rounded-xl top-3 right-3 bg-white flex justify-center items-center"
                >
                    <button className="flex justify-center items-center cursor-pointer" onClick={handleToggleFavorite}>
                        {isFavorite ? <IconHeart className={`w-4 ${'text-red-600'}`} fill={true} duotone={false} /> : <IconHeart className={`w-4 ${'text-gray-300'}`} fill={false} duotone={false} />}
                    </button>
                </div>
            </CardHeader>
            <CardBody onClick={(e) => e.stopPropagation()}>
                <figcaption className="flex items-center mb-1.5 bg-transparent">
                    <div className="text-black">
                        <div className="font-medium">
                            <div className="flex items-center gap-1">
                                {former?.imageUrl ? (
                                    <div className="h-10 w-10 rounded-full overflow-hidden">
                                        <img src={`${resourcesUrl}/${former?.imageUrl}`} alt="course image" className="w-full h-full object-cover" />
                                    </div>
                                ) : (
                                    <div>
                                        {/* <img src="/assets/images/book.jpg" alt="default image" className="w-full h-full object-cover" /> */}
                                    </div>
                                )}
                                <div className="flex items-center gap-1">
                                    {former?.firstname}
                                    <span className="ml-1 text-green-500">✓</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 font-bold text-base mt-2">{category?.description ?? 'Not Classed'}</div>
                    </div>
                </figcaption>
                <div className="text-md font-semibold tracking-wide text-black">{course.Title}</div>
                <div className="flex items-center mb-1.5">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-3 h-3 ${i <= rating - 1 ? 'text-[#BF6211]' : 'text-gray-300 dark:text-gray-500'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <p className="ml-1 text-xs font-medium text-gray-500 dark:text-gray-400">{rating?.toFixed(1)} / 5.0 User review</p>
                </div>
                <div className="text-gray-500 text-small" color="blue-gray">
                    <div className="flex items-center gap-1">
                        {/* <img src="/assets/images/level.png" className="w-4 opacity-60" /> */}
                        {level?.description}
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-4"></div>
                <div className="text-gray-500 text-xs mt-4">
                    <div className="flex items-center">
                        <img src="/assets/images/clock.png" className="w-5 mr-1" />
                        {`${course.duration ? course.duration : 0} hours`}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default CourseCard;
