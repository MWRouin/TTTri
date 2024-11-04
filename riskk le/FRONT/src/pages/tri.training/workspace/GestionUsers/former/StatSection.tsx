// StatSection.js
import React from 'react';

const StatSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-around items-center max-w-[1200px] w-full mt-16 bg-gray-800 py-6">
            <div className="text-center">
                <h3 className="text-4xl font-bold text-white">73M</h3>
                <p className="text-gray-300">Participants</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-white">+ de 75</h3>
                <p className="text-gray-300">Langues</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-white">1B</h3>
                <p className="text-gray-300">Inscriptions</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-white">+ de 180</h3>
                <p className="text-gray-300">Pays</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-white">+ de 16 000</h3>
                <p className="text-gray-300">Clients Enterprise</p>
            </div>
        </div>
    );
};

export default StatSection;
