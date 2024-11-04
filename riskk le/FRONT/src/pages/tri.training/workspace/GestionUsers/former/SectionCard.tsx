import React, { useState } from 'react';

const SectionCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
               <div className="flex items-center mb-5"> {/* Align items in a row */}
                 <img className="w-16 flex-none" src="/assets/images/logolil.png" alt="Logo" /> {/* Keep logo size the same */}
                 <h2 className="text-3xl font-bold ml-4">Sign Up to Teach</h2> {/* Increased text size */}
               </div>
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
              {/* Centering the button */}
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

      {/* Section Card */}
      <div className={`flex flex-col lg:flex-row max-w-[1200px] w-full my-8 ${isModalOpen ? 'blur-md' : ''}`}>
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center lg:justify-end order-1 lg:order-2">
          <img
            src="/assets/images/u.jpg"
            alt="Instructor"
            className="w-full h-auto object-cover max-w-[600px] rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start lg:items-start mt-4 lg:mt-0 lg:pl-10 lg:w-1/2 order-2 lg:order-1">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4 max-lg:text-center">
            Become an instructor
          </h1>
          <p className="text-lg font-medium text-gray-600 leading-relaxed mb-6 max-lg:text-center">
            Our instructors from around the world teach millions of learners on TRI-TRAINING. We provide you with the tools and skills needed to teach what you love.
          </p>
          <button
            onClick={toggleModal} // Open the modal on button click
            className="bg-gray-800 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-900 transition-colors w-[250px] max-lg:w-full"
          >
            Start teaching today
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
