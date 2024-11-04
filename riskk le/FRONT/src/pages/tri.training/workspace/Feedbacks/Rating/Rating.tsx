import React, { useEffect, useState } from 'react';
import Star from './Start';

const StarRating = ({ avgRating }: any) => {
    return (
        <div className="flex space-x-1 w-20">
            {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} filled={index < Math.floor(avgRating)} />
            ))}
        </div>
    );
};

export default StarRating;
