import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import Swiperr from './Swiper';
import { IRootState } from '../../../../Redux/store'; 

const AboutUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Swiperr'));

    document.body.classList.add('hide-footer');

    return () => {
      document.body.classList.remove('hide-footer');
    };
  }, [dispatch]);

  const items = ['33.jpg', '20.jpg', '1.jpg'];
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  return (
    <div className="aboutus-page">
      <div className="content">
        <Swiperr items={items} rtlClass={themeConfig.rtlClass} />
        <div className="panel text-center">
          <h3 className="mb-6 text-4xl md:text-5xl font-bold text-red-700">
            Tri-Training
          </h3>
          <div className="mt-13">
            <h3 className="mb-6 text-base font-bold md:text-xl text-red-800">
              Your Gateway to Infinite Learning Possibilities!
            </h3>
          </div>
          <div className="mt-14">
            <p className="mb-6 font-bold">
              Tri-Training explores new ways to enhance online learning. Using
              innovative techniques, this project aims to personalize the
              learning experience, providing course recommendations tailored to
              individual needs.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 pr-4">
              <h3 className="mb-6 text-xl font-bold md:text-3xl text-red-500">
                triweb
              </h3>
              <h3 className="mb-6 text-base font-bold md:text-xl text-red-800">
                Offshore WEB Production Agency
              </h3>
              <p className="font-bold">Triweb, a young, professional, and cohesive team</p>
              <p>
                Operating since 2014, Triweb stands out in the digital marketing and
                turnkey website design domain. We carefully study your specifications
                to develop your project according to your goals and web marketing
                requirements. Throughout each stage of your project's development, we
                focus on both technical and aesthetic aspects to enhance your
                visibility online. Professionals and committed, we leverage our
                expertise to deliver a production worthy of our brand within agreed
                timelines.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="/assets/images/ab.jpg" alt="Triweb" className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
