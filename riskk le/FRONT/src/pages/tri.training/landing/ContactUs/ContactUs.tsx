import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPageTitle, toggleRTL } from '../../../../store/themeConfigSlice';
import FormClaim from '../../workspace/Feedbacks/Claims/FormClaim';
import IconArrowWaveLeftUp from '../../../../components/Icon/IconArrowWaveLeftUp';
import TCard from './TCard';  // Import the TCard component

const ContactUs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formParams, setFormParams] = useState({
    id: '',
    title: '',
    tag: '',
    description: '',
  });

  useEffect(() => {
    dispatch(setPageTitle('Contact Us'));
  }, [dispatch]);

  const handleClaimClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/Claims');
  };
  

  const handlePassClaimClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsFormOpen(true);
  };
  

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormParams((prev) => ({ ...prev, [id]: value }));
  };
  

  const handleFormSave = () => {
    console.log('Form data saved:', formParams);
    setIsFormOpen(false);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="content">
      <div className="w-full flex flex-row items-end -mt-[200px] h-[700px] bg-primary-light bg-[url('/assets/images/contt.jpg')] bg-cover bg-left-top bg-no-repeat dark:bg-black">
        <div className="relative text-black mt-20 w-full">
          <div className="flex flex-col items-center justify-center mt-20 sm:-ms-32 sm:flex-row xl:-ms-60">
            <div className="mb-2 flex gap-1 text-end text-base leading-5 sm:flex-col xl:text-xl">
              <span>Connecting people </span>
              <span>With knowledge</span>
            </div>
            <div className="me-4 ms-2 hidden sm:block text-[#0E1726] rtl:rotate-y-180">
              <IconArrowWaveLeftUp className="w-16 xl:w-28" />
            </div>
            <div className="mb-2 text-center text-2xl font-bold text-black md:text-5xl">
              Contact Us
            </div>
          </div>
        </div>
      </div>




      <div className="panel text-center mt-20">
  {/* Why TRI-TRAINING Section Header */}
  <div className="mb-12 text-3xl font-bold text-black md:text-5xl">
    Why TRI-TRAINING
  </div>

  {/* Explanation Text */}
  <h3 className="mb-14 text-lg font-normal leading-relaxed text-gray-700 md:text-xl md:leading-relaxed max-w-2xl mx-auto">
    We aspire to be as vibrant and dynamic as the communities we serve, as inquisitive as those who use our platform, and as revolutionary as the future we strive to open for everyone.
  </h3>

  {/* TCard Components */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
    {/* Inclusive Card */}
    <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center">
      <img
        src="/assets/images/conta1.jpg"
        alt="Inclusive"
        className="w-full h-56 object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-black mb-4">Inclusive</h2>
      <p className="text-gray-600 text-base">
        When people feel supported, everyone benefits. We are building teams as diverse as the people who use our platform.
      </p>
    </div>

    {/* Curious Card */}
    <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center">
      <img
        src="/assets/images/conta2.jpg"
        alt="Curious"
        className="w-full h-56 object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-black mb-4">Curious</h2>
      <p className="text-gray-600 text-base">
        Learning is who we are — inside and out. We never stop evolving, and neither do you.
      </p>
    </div>

    {/* Revolutionary Card */}
    <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center">
      <img
        src="/assets/images/conta3.jpg"
        alt="Revolutionary"
        className="w-full h-56 object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-black mb-4">Revolutionary</h2>
      <p className="text-gray-600 text-base">
        We improve the lives of learners and instructors we serve — using our talents to empower theirs.
      </p>
    </div>
  </div>

  {/* Add Margin to Increase Space Between Sections */}
  <div className="mt-24"></div> {/* Added margin between the sections */}

  {/* Contact Information */}
  <div className="mt-4">
    <h3 className="mb-6 text-base font-bold md:text-xl">
      The quickest way to get in touch with us is by using the contact information below.
    </h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <h2 className="text-xl font-bold">Courses</h2>
      <hr className="border-t-2 border-black my-2" />
      <p>Email: <a href="mailto:TriTraining@gmail.com" className="text-blue-600">TriTraining@gmail.com</a></p>
    </div>
    <div>
      <h2 className="text-xl font-bold">Learners</h2>
      <hr className="border-t-2 border-black my-2" />
      <p>Visit our <a href="#" className="text-blue-600">Help Center</a></p>
      <p><a href="#" className="text-blue-600">Teaching Center</a></p>
    </div>
    <div>
      <h2 className="text-xl font-bold">Claims</h2>
      <hr className="border-t-2 border-black my-2" />
      <p>Claim: <a href="#" className="text-blue-600" onClick={handlePassClaimClick}>Pass your claim here</a></p>
      <p><a href="#" className="text-blue-600" onClick={handleClaimClick}>My claims</a></p>

      <FormClaim
        open={isFormOpen}
        onClose={handleFormClose}
        onSave={handleFormSave}
        params={formParams}
        changeValue={handleFormChange}
      />
    </div>
    </div>
    </div>
    </div>

  );
};

export default ContactUs;
