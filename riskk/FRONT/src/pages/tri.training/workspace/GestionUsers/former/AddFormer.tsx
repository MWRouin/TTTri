import StatSection from './StatSection';
import Features from './Features';
import ThirdCards from './ThirdCards';
import TwoCards from './TwoCards';
import SectionCard from './SectionCard';
import { useState } from 'react';


const AddFormer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    
    return (
        <div
            className="flex flex-col justify-center items-center w-full px-4"
            style={{ backgroundColor: '#F0F0F0', minHeight: '100vh', paddingTop: '0' }}
        >
            <SectionCard />
            <div
                className="flex flex-col items-center justify-center w-full px-4 py-16"
                style={{ backgroundColor: '#F8F9FA' }}
            >
                <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                    There are so many reasons to get started
                </h1>
                <Features />
                <StatSection />
                <ThirdCards />
                <TwoCards />

                {/* Add a blank space between TwoCards and the last section */}
                <div style={{ height: '100px' }} /> {/* Increased height for more space */}

                <div className="flex flex-col justify-center items-start lg:items-start lg:pl-10 lg:w-1/2 order-2 lg:order-1">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4 max-lg:text-center">
                            Become a trainer today
                        </h1>
                        <p className="text-lg font-medium text-gray-600 leading-relaxed mb-6 max-lg:text-center">
                            Join one of the best online learning platforms.
                        </p>
                        <button 
        onClick={toggleModal} 
        className="bg-gray-800 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-900 transition-colors w-[250px] max-lg:w-full"
      >
        Start teaching today
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            {/* Header with logo and title */}
            <div className="flex items-center mb-5">
              <img className="w-16 flex-none" src="/assets/images/logolil.png" alt="Logo" />
              <h2 className="text-3xl font-bold ml-4">Sign Up to Teach</h2>
            </div>

            {/* Form */}
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit button centered */}
              <div className="flex justify-center">
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                  Submit
                </button>
              </div>
            </form>

            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
          </div>
        </div>
      )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFormer;
