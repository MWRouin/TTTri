import React from 'react';

const Star: React.FC<any> = ({ filled, onClick, disabled }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill={filled ? '#FFBF00' : 'none'}
            stroke="#FFBF00"
            strokeWidth="1"
            onClick={disabled ? undefined : onClick} // Only call onClick if not disabled
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }} // Change cursor style based on disabled state
        >
            <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 
        9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 
        4.73L5.82 21z"
            />
        </svg>
    );
};

export default Star;
