import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Catalogues = () => {
    const navigate = useNavigate();

    const handleClickbusiness = () => {
      navigate('/Triwebusiness');
    };
  return (
    <div className="container mx-auto py-12">
      {/* Page Title */}
      <h1 className="text-center text-3xl font-bold mb-8">
           Scalable learning for businesses of all sizes
      </h1>

      {/* Pricing Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Abonnement Enterprise */}
        <div className="bg-gray-50 border rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Enterprise Subscription</h2>
          <p className="text-sm text-gray-700 mb-4">For your entire team</p>
          <p className="text-sm text-gray-700 mb-2">More than 20 people</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"     
               onClick={handleClickbusiness}
          >
                Request a demo
          </button>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>Access 27,000+ of the best courses</li>
            <li>Certification preparation for over 200 exams</li>
            <li>AI-powered hands-on and coding exercises</li>
            <li>Goal-based recommendations and customizable content</li>
            <li>Advanced analytics and insights</li>
            <li>International course selections</li>
            <li>Customer Success Team</li>
          </ul>
        </div>

        {/* Abonnement Team */}
        <div className="bg-gray-50 border rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Team subscription</h2>
          <p className="text-sm text-gray-700 mb-4">For your team</p>
          <p className="text-sm text-gray-700 mb-2">5-20 people</p>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
           onClick={handleClickbusiness}
              >
             Try it for free
          </button>
          <p className="text-sm text-gray-700 mt-4">$30 per month per user</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>Access 12,000+ of the best courses</li>
            <li>Certification preparation for more than 200 exams</li>
            <li>AI-powered hands-on and coding exercises</li>
            <li>Recommendations based on objectives</li>
            <li>Analytical and adoption reports</li>
          </ul>
        </div>

        {/* Leadership Academy */}
        <div className="bg-gray-900 text-white border rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Leadership Academy</h2>
          <p className="text-sm mb-4">For your development leaders</p>
          <p className="text-sm mb-2">Groups of 25 or more</p>
          <button className="bg-white text-gray-700 px-4 py-2 rounded hover:bg-gray-800 hover:text-white"
                    onClick={handleClickbusiness}
             >
          Contact the sales department
          </button>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Leadership training led by experts</li>
            <li>Research-based content selection</li>
            <li>Applied learning, skills and group coaching</li>
            <li>Asynchronous learning with collaborative discussions</li>
            <li>Virtual live events</li>
            <li>AI-powered analytics and insights</li>   
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catalogues;
