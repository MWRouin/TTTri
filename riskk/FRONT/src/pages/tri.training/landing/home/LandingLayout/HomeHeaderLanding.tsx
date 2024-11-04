import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Dropdown from '../../../../../components/Dropdown';
import IconArrowWaveLeftUp from '../../../../../components/Icon/IconArrowWaveLeftUp';
import IconBellBing from '../../../../../components/Icon/IconBellBing';
import IconCaretDown from '../../../../../components/Icon/IconCaretDown';
import IconInfoCircle from '../../../../../components/Icon/IconInfoCircle';
import IconLaptop from '../../../../../components/Icon/IconLaptop';
import IconLockDots from '../../../../../components/Icon/IconLockDots';
import IconLogout from '../../../../../components/Icon/IconLogout';
import IconMail from '../../../../../components/Icon/IconMail';
import IconMenu from '../../../../../components/Icon/IconMenu';
import IconMoon from '../../../../../components/Icon/IconMoon';
import IconSun from '../../../../../components/Icon/IconSun';
import IconUser from '../../../../../components/Icon/IconUser';
import IconXCircle from '../../../../../components/Icon/IconXCircle';
import IconMenuApps from '../../../../../components/Icon/Menu/IconMenuApps';
import { IRootState } from '../../../../../Redux/store';
import { toggleRTL, toggleSidebar, toggleTheme } from '../../../../../store/themeConfigSlice';


const HomeHeaderLanding = () => {
  const location = useLocation();
  const [ShowTopNav, setShowTopNav] = useState(false);
  const [activeTab, setActiveTab] = useState<String>('general');
  const [active1, setActive1] = useState<any>(1);
  const [active2, setActive2] = useState<any>(1);

  const onScrollHandler = () => {
    // console.log('document.body.scrollTop' + document.body.scrollTop);
    // console.log('document.documentElement.scrollTop' + document.documentElement.scrollTop);
    // console.log('window.scrollY' + window.scrollY);

    if (window.scrollY >= 70) {
      setShowTopNav(true);
    } else {
      setShowTopNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('onscroll', onScrollHandler);
    };
  }, []);

  useEffect(() => {
    const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');

    if (selector) {
      console.log('selector');
      console.log(selector);
      console.log('selector.classList');
      console.log(selector.classList);

      selector.classList.add('active');
      const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');

      console.log('all');
      console.log(all);

      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove('active');
      }
      console.log(selector);

      const ul: any = selector.closest('ul.sub-menu');
      console.log(ul);

      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');

        console.log(ele);

        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add('active');
          });
        }
      } else {
        setTimeout(() => {
          selector?.classList.add('active');
        });
      }
    }
  }, [location]);

  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  function createMarkup(messages: any) {
    return { __html: messages };
  }
  const [messages, setMessages] = useState([
    {
      id: 1,
      image:
        '<span className="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
      title: 'Congratulations!',
      message: 'Your OS has been updated.',
      time: '1hr',
    },
    {
      id: 2,
      image:
        '<span className="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg g xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
      title: 'Did you know?',
      message: 'You can switch between artboards.',
      time: '2hr',
    },
    {
      id: 3,
      image:
        '<span className="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
      title: 'Something went wrong!',
      message: 'Send Reposrt',
      time: '2days',
    },
    {
      id: 4,
      image:
        '<span className="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
      title: 'Warning',
      message: 'Your password strength is low.',
      time: '5days',
    },
  ]);

  const removeMessage = (value: number) => {
    setMessages(messages.filter((user) => user.id !== value));
  };

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      profile: 'user-profile.jpeg',
      message: '<strong className="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
      time: '45 min ago',
    },
    {
      id: 2,
      profile: 'profile-34.jpeg',
      message: '<strong className="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
      time: '9h Ago',
    },
    {
      id: 3,
      profile: 'profile-16.jpeg',
      message: '<strong className="text-sm mr-1">Anna Morgan</strong>Upload a file',
      time: '9h Ago',
    },
  ]);

  const removeNotification = (value: number) => {
    setNotifications(notifications.filter((user) => user.id !== value));
  };

  const [search, setSearch] = useState(false);

  const setLocale = (flag: string) => {
    setFlag(flag);
    if (flag.toLowerCase() === 'ae') {
      dispatch(toggleRTL('rtl'));
    } else {
      dispatch(toggleRTL('ltr'));
    }
  };
  const [flag, setFlag] = useState(themeConfig.locale);

  const { t } = useTranslation();

  return (
    <>
      <>
        <header className={`z-40   sticky top-0  ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
          <div className={`shadow-sm ${ShowTopNav === false ? 'bg-transparent dark:bg-transparent   ' : 'dark:bg-black bg-white transition-all duration-300 animate__slideInDown animate__animated'} `}>
            <div className={`relative  flex w-full items-center px-5 py-2.5 ${ShowTopNav === false ? 'bg-transparent dark:bg-transparent  text-white-light' : 'dark:bg-black bg-white'} `}>
              <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                <Link to="/home" className="main-logo flex items-center shrink-0">
                  <img className="w-8 ltr:-ml-1 rtl:-mr-1 inline" src="/assets/images/logolil.png" alt="logo" />
                  <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline  dark:text-white-light transition-all duration-300">TRI-TRAINING</span>
                </Link>
                <button
                  type="button"
                  className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                  onClick={() => {
                    dispatch(toggleSidebar());
                  }}
                >
                  <IconMenu className="w-5 h-5" />
                </button>
              </div>

              <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
                <div>
                  {themeConfig.theme === 'light' ? (
                    <button
                      className={`${
                        themeConfig.theme === 'light' && 'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                      }`}
                      onClick={() => {
                        dispatch(toggleTheme('dark'));
                      }}
                    >
                      <IconSun />
                    </button>
                  ) : (
                    ''
                  )}
                  {themeConfig.theme === 'dark' && (
                    <button
                      className={`${
                        themeConfig.theme === 'dark' && 'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                      }`}
                      onClick={() => {
                        dispatch(toggleTheme('system'));
                      }}
                    >
                      <IconMoon />
                    </button>
                  )}
                  {themeConfig.theme === 'system' && (
                    <button
                      className={`${
                        themeConfig.theme === 'system' && 'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                      }`}
                      onClick={() => {
                        dispatch(toggleTheme('light'));
                      }}
                    >
                      <IconLaptop />
                    </button>
                  )}
                </div>
                <div className="dropdown shrink-0">
                  <Dropdown
                    offset={[0, 8]}
                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                    btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                    button={<img className="w-5 h-5 object-cover rounded-full" src={`/assets/images/flags/${flag.toUpperCase()}.svg`} alt="flag" />}
                  >
                    <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
                      {themeConfig.languageList.map((item: any) => {
                        return (
                          <li key={item.code}>
                            <button
                              type="button"
                              className={`flex w-full hover:text-primary rounded-lg ${i18next.language === item.code ? 'bg-primary/10 text-primary' : ''}`}
                              onClick={() => {
                                i18next.changeLanguage(item.code);
                                // setFlag(item.code);
                                setLocale(item.code);
                              }}
                            >
                              <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="w-5 h-5 object-cover rounded-full" />
                              <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </Dropdown>
                </div>

                <div className="dropdown shrink-0">
                  <Dropdown
                    offset={[0, 8]}
                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                    btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                    button={
                      <span>
                        <IconBellBing />
                        <span className="flex absolute w-3 h-3 ltr:right-0 rtl:left-0 top-0">
                          <span className="animate-ping absolute ltr:-left-[3px] rtl:-right-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-success/50 opacity-75"></span>
                          <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-success"></span>
                        </span>
                      </span>
                    }
                  >
                    <ul className="!py-0 text-dark dark:text-white-dark w-[300px] sm:w-[350px] divide-y dark:divide-white/10">
                      <li onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center px-4 py-2 justify-between font-semibold">
                          <h4 className="text-lg">Notification</h4>
                          {notifications.length ? <span className="badge bg-primary/80">{notifications.length}New</span> : ''}
                        </div>
                      </li>
                      {notifications.length > 0 ? (
                        <>
                          {notifications.map((notification) => {
                            return (
                              <li key={notification.id} className="dark:text-white-light/90" onClick={(e) => e.stopPropagation()}>
                                <div className="group flex items-center px-4 py-2">
                                  <div className="grid place-content-center rounded">
                                    <div className="w-12 h-12 relative">
                                      <img className="w-12 h-12 rounded-full object-cover" alt="profile" src={`/assets/images/${notification.profile}`} />
                                      <span className="bg-success w-2 h-2 rounded-full block absolute right-[6px] bottom-0"></span>
                                    </div>
                                  </div>
                                  <div className="ltr:pl-3 rtl:pr-3 flex flex-auto">
                                    <div className="ltr:pr-3 rtl:pl-3">
                                      <h6
                                        dangerouslySetInnerHTML={{
                                          __html: notification.message,
                                        }}
                                      ></h6>
                                      <span className="text-xs block font-normal dark:text-gray-500">{notification.time}</span>
                                    </div>
                                    <button
                                      type="button"
                                      className="ltr:ml-auto rtl:mr-auto text-neutral-300 hover:text-danger opacity-0 group-hover:opacity-100"
                                      onClick={() => removeNotification(notification.id)}
                                    >
                                      <IconXCircle />
                                    </button>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                          <li>
                            <div className="p-4">
                              <button className="btn btn-primary block w-full btn-small">Read All Notifications</button>
                            </div>
                          </li>
                        </>
                      ) : (
                        <li onClick={(e) => e.stopPropagation()}>
                          <button type="button" className="!grid place-content-center hover:!bg-transparent text-lg min-h-[200px]">
                            <div className="mx-auto ring-4 ring-primary/30 rounded-full mb-4 text-primary">
                              <IconInfoCircle fill={true} className="w-10 h-10" />
                            </div>
                            No data available.
                          </button>
                        </li>
                      )}
                    </ul>
                  </Dropdown>
                </div>
                <div className="dropdown shrink-0 flex">
                  <Dropdown
                    offset={[0, 8]}
                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                    btnClassName="relative group block"
                    button={<img className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src="/assets/images/user-profile.jpeg" alt="userProfile" />}
                  >
                    <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                      <li>
                        <div className="flex items-center px-4 py-4">
                          <img className="rounded-md w-10 h-10 object-cover" src="/assets/images/user-profile.jpeg" alt="userProfile" />
                          <div className="ltr:pl-4 rtl:pr-4 truncate">
                            <h4 className="text-base">
                              John Doe
                              <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">Pro</span>
                            </h4>
                            <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                              johndoe@gmail.com
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="/users/profile" className="dark:hover:text-white">
                          <IconUser className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/apps/mailbox" className="dark:hover:text-white">
                          <IconMail className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                          Inbox
                        </Link>
                      </li>
                      <li>
                        <Link to="/auth/boxed-lockscreen" className="dark:hover:text-white">
                          <IconLockDots className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                          Lock Screen
                        </Link>
                      </li>
                      <li className="border-t border-white-light dark:border-white-light/10">
                        <Link to="/auth/boxed-signin" className="text-danger !py-3">
                          <IconLogout className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </Dropdown>
                </div>
              </div>
            </div>
            <ul
              className={` horizontal-menu hidden font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse  border-t border-[#ebedf2] dark:border-[#191e3a] 
              ${ShowTopNav === false ? 'text-white-light' : 'text-black dark:text-white-light'}
              
              `}
            >
              <li className="menu nav-item relative">
                <NavLink className="nav-link" id="home" to="/home">
                  {t('home')}
                </NavLink>
              </li>
              <li className="menu nav-item relative">
                <button type="button" className="nav-link">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <IconMenuApps className="shrink-0" />
                      <span className="px-1">{t('Cours')}</span>
                    </div>
                    <div className="right_arrow">
                      <IconCaretDown />
                    </div>
                  </div>
                </button>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="/cours">{t('Cours')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/apps/mailbox">{t('mailbox')}</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
        {/* )} */}

        <div className=" w-full flex flex-row  items-end -mt-[200px] h-[700px]  bg-primary-light bg-[url('/assets/images/2020.avif')] bg-cover bg-left-top bg-no-repeat  dark:bg-black">
          <div className="relative text-white mt-20 w-full">
            <div className="flex flex-col items-center justify-center mt-20 sm:-ms-32 sm:flex-row xl:-ms-60">
              <div className="mb-2 flex gap-1 text-end text-base leading-5 sm:flex-col xl:text-xl">
                <span>It's free </span>
                <span>For everyone</span>
              </div> 
               <div className="me-4 ms-2 hidden sm:block text-[#0E1726] text-white rtl:rotate-y-180">
                <IconArrowWaveLeftUp className="w-16 xl:w-28" />
              </div>
              <div className="mb-2 text-center text-2xl font-bold text-white md:text-5xl">Tri Training</div>
            </div>
            <form action="" method="" className="mb-6 mt-20">
              <div className="relative mx-auto max-w-[580px]">
                <input type="text" placeholder="Ask a question" className="form-input py-3 ltr:pr-[100px] rtl:pl-[100px]" />
                <button type="button" className="btn btn-primary absolute top-1 shadow-none ltr:right-1 rtl:left-1">
                  Search
                </button>
              </div>
            </form> 
           <div className="flex flex-wrap  mt-20 mb-6 items-center justify-center gap-2 font-semibold text-[#2196F3] sm:gap-5">
              <div className="whitespace-nowrap font-medium text-black dark:text-white">Popular topics :</div>
              <div className="flex items-center justify-center gap-2 sm:gap-5">
                  <Link to="#" className="duration-300 hover:underline text-red-500">
                     Sales
                  </Link>
                  <Link to="#" className="duration-300 hover:underline text-red-500">
                     Charts
                  </Link>
                  <Link to="#" className="duration-300 hover:underline text-red-500">
                     Finance
                  </Link>
                  <Link to="#" className="duration-300 hover:underline text-red-500">
                     Trending
                  </Link>
              </div>
            </div> 
          </div>
        </div>
      </>
    </>
  );
};

export default HomeHeaderLanding;
