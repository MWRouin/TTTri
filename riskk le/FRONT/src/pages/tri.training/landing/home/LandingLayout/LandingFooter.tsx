import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGoogle, FaTwitter, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import IconLinkedin from '../../../../../components/Icon/IconLinkedin';

const LandingFooter = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/auth/boxed-signup');
  }


  return (
    <div className="dark:text-white-dark text-center mt-auto">
      <section className="relative py-16 overflow-hidden bg-zinc-700 dark:bg-neutral-900">
        <div className="container mx-auto">
          <div className="grid items-center grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-7">
              <div className="text-center lg:text-start">
              <h4 className="text-white">Get New Courses Notification!</h4>
              <p className="mt-1 mb-0 text-white/50 dark:text-gray-300">Subscribe &amp; get all related courses notification.</p>
              </div>
            </div>
            <div className="z-40 col-span-12 lg:col-span-5">
              <form className="flex" action="#">
                <input
                  type="text"
                  className="w-full text-gray-100 bg-transparent rounded-md border-gray-50/30 ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none placeholder:text-13 placeholder:text-gray-100 dark:text-gray-100 dark:bg-white/5 dark:border-neutral-600 focus:ring-0 focus:ring-offset-0"
                  id="subscribe"
                  placeholder="Enter your email"
                />
                <button
                  className="text-white border-transparent btn ltr:rounded-l-none rtl:rounded-r-none group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 focus:ring focus:ring-custom-500/30"
                  type="button"
                  id="subscribebtn"
                  onClick={handleClick}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute right-0 -top-10 -z-0 opacity-20">
          <img src="assets/images/subscribe.png" alt="" className="img-fluid" />
        </div>
      </section>

      <footer className="footer ">
        <section className="py-12 bg-zinc-800 dark:bg-neutral-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 lg:gap-10">
              <div className="col-span-12 xl:col-span-4">
                <div className="mr-12">
                  <h4 className="text-white mb-6 text-[23px]">triweb</h4>
                  <p className="text-white/50 dark:text-gray-300">Your success, our mission...</p>
                  <p className="mt-3 text-white dark:text-gray-50">Follow Us on:</p>
                  <div className="mt-5">
                <ul className="flex gap-3">
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent flex items-center justify-center">
                    <a href="#" onClick={() => window.open('https://www.linkedin.com/company/tri-web/')}>
                       <IconLinkedin className="text-xl" />
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent flex items-center justify-center">
                    <a href="#" onClick={() => window.open('https://www.tri-web.com/qui-sommes-nous/')}>
                       <FaGoogle className="text-xl" />
                    </a>
                  </li>
                 <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent flex items-center justify-center">
                    <a href="#" onClick={() => window.open('https://www.instagram.com/triweb_/')}>
                      <FaInstagram className="text-xl" />
                    </a>
                 </li>
                 <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent flex items-center justify-center">
                    <a href="#" onClick={() => window.open('https://www.tiktok.com/@triweb?_t=8lqm8rbqybF&_r=1&fbclid=IwAR2iYYFEe_UE-jim9q2HPXPBVxPpb0qp9haRzg705TVknFYIdaNCW34gxHs')}>
                      <FaTiktok className="text-xl" />
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent flex items-center justify-center">
                    <a href="#" onClick={() => window.open('https://www.facebook.com/Triwebagenceweb?locale=fr_FR')}>
                      <FaFacebookF className="text-xl" />
                    </a>
                 </li>
                 </ul>
                </div>
                </div>
                </div>
              <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0"> 
              </div>
              <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">  
              <p className="mb-6 text-white text-16">Company</p>
                <ul className="space-y-4">
                  <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                 <Link to="/contactus">
                <i className="mdi mdi-chevron-right"></i> Contact Us
                 </Link>
                   </li>
                  <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link to="/aboutus">
                  <i className="mdi mdi-chevron-right"></i> About Us
                  </Link>
                  </li>
                  <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link to="/AddFormer">
                   <i className="mdi mdi-chevron-right"></i> Teach On TRI-TRAINING
                  </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default LandingFooter;
