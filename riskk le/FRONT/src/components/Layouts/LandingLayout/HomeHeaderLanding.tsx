import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toggleRTL, toggleTheme, toggleSidebar } from '../../../store/themeConfigSlice';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Dropdown from '../../Dropdown';
import IconMenu from '../../Icon/IconMenu';
import IconCalendar from '../../Icon/IconCalendar';
import IconEdit from '../../Icon/IconEdit';
import IconChatNotification from '../../Icon/IconChatNotification';
import IconSearch from '../../Icon/IconSearch';
import IconXCircle from '../../Icon/IconXCircle';
import IconSun from '../../Icon/IconSun';
import IconMoon from '../../Icon/IconMoon';
import IconLaptop from '../../Icon/IconLaptop';
import IconMailDot from '../../Icon/IconMailDot';
import IconArrowLeft from '../../Icon/IconArrowLeft';
import IconInfoCircle from '../../Icon/IconInfoCircle';
import IconBellBing from '../../Icon/IconBellBing';
import IconUser from '../../Icon/IconUser';
import IconMail from '../../Icon/IconMail';
import IconLockDots from '../../Icon/IconLockDots';
import IconLogout from '../../Icon/IconLogout';
import IconMenuDashboard from '../../Icon/Menu/IconMenuDashboard';
import IconCaretDown from '../../Icon/IconCaretDown';
import IconMenuApps from '../../Icon/Menu/IconMenuApps';
import IconMenuComponents from '../../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../../Icon/Menu/IconMenuElements';
import IconMenuDatatables from '../../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../../Icon/Menu/IconMenuForms';
import IconMenuPages from '../../Icon/Menu/IconMenuPages';
import IconMenuMore from '../../Icon/Menu/IconMenuMore';
import IconArrowWaveLeftUp from '../../Icon/IconArrowWaveLeftUp';
import { IRootState } from '../../../Redux/store';
import IconStar from '../../Icon/IconStar';
import IconHeart from '../../Icon/IconHeart';
import IconShoppingCart from '../../Icon/IconShoppingCart';
import { useAxios } from '../../../hooks/useAxios';
import { GetAllCategories, logoutUser } from '../../../Redux/actions';
import { APICore } from '../../../helpers/api/apiCore';

const HomeHeaderLanding = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [ShowTopNav, setShowTopNav] = useState(false);
    const [activeTab, setActiveTab] = useState<String>('general');
    const [active1, setActive1] = useState<any>(1);
    const [active2, setActive2] = useState<any>(1);

    const onScrollHandler = () => {
        if (window.scrollY >= 70) {
            setShowTopNav(true);
        } else {
            setShowTopNav(false);
        }
    };

    const handleIconHeartClick = () => {
        navigate('/favouritelist'); 
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

    // Select the categories from the Redux state
    const { ListCategories, loading, error } = useSelector((state: IRootState) => state.Categorie);

    // Dispatch the fetch categories action when the component mounts
    useEffect(() => {
        dispatch(GetAllCategories());
    }, [dispatch]);

    function createMarkup(messages: any) {
        return { __html: messages };
    }
    const [messages, setMessages] = useState([
        {
            id: 1,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
            title: 'Congratulations!',
            message: 'Your OS has been updated.',
            time: '1hr',
        },

        {
            id: 2,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg g xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
            title: 'Did you know?',
            message: 'You can switch between artboards.',
            time: '2hr',
        },

        {
            id: 3,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
            title: 'Something went wrong!',
            message: 'Send Reposrt',
            time: '2days',
        },
        {
            id: 4,
            image: '<span className="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
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

    const { userConnected } = useSelector((state: IRootState) => ({
        userConnected: state.Auth.user,
    }));

    const api = new APICore();

    const [flag, setFlag] = useState(themeConfig.locale);

    const { t } = useTranslation();

    const [showDropdown, setShowDropdown] = useState(false);
    let timeoutId: any;
    const categories = ['Development', 'Business', 'Finance & Accounting', 'IT & Software', 'Personal Development', 'Design', 'Marketing', 'Health & Fitness'];

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setShowDropdown(false);
        }, 100);
    };

    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;

    const goToCategory = (categoryId: string | number) => {
        navigate(`/allcourses/${categoryId}`);
    };

    return (
        <>
            <>
                <header className={`z-40   sticky top-0  ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
                    <div
                        className={`shadow-sm ${
                            ShowTopNav === true ? 'bg-transparent dark:bg-transparent   ' : 'dark:bg-black bg-white transition-all duration-300 animate__slideInDown animate__animated'
                        } `}
                    >
                        <div className={`relative  flex w-full items-center px-5 py-2.5 ${ShowTopNav === false ? 'bg-transparent dark:bg-transparent  text-white-light' : 'dark:bg-black bg-white'} `}>
                            <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                                <Link to="/home" className="main-logo flex items-center shrink-0">
                                    <img className="w-6 ltr:-ml-1 rtl:-mr-1 inline" src="/assets/images/logolil.png" alt="logo" />
                                    <span className="text-md ltr:ml-1 rtl:mr-1  font-semibold text-black align-middle hidden md:inline  dark:text-white-light transition-all duration-300">
                                        TRI-TRAINING
                                    </span>
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

                            <div className="sm:flex-1 justify-between flex items-center dark:text-[#d0d2d6]">
                                <div className=" flex gap-4 h-[40px] items-center relative flex-1">
                                    {/* Wrapper for both button and dropdown */}
                                    <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        {/* Categories button */}
                                        <button className="text-black px-4">Categories</button>
                                        {/* Dropdown that shows on hover */}
                                        <div
                                            className={`absolute top-[170%] left-0 mt-2 w-[200px] bg-white border border-gray-200 shadow-lg z-50 
                                              transition-all duration-100 transform ${showDropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                                        >
                                            {ListCategories.length > 0 && (
                                                <ul className="py-2">
                                                    {ListCategories.map((category: any) => (
                                                        <li
                                                            key={category.categorieId}
                                                            onClick={() => goToCategory(category.categorieId)}
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                                                        >
                                                            {category.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>

                                    {/* Search bar */}
                                    <div className="w-3/5 h-[35px] rounded-full flex items-center gap-4 border border-black bg-[#F2F2F2]">
                                        <IconSearch className="ml-4 text-black " fill={true} />
                                        <input type="text" placeholder="search" className="w-full mr-4 text-black outline-none bg-[#F2F2F2]" />
                                    </div>
                                </div>

                                <div>
                                    {themeConfig.theme === 'light' ? (
                                        <button
                                            className={`${
                                                themeConfig.theme === 'light' &&
                                                'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
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
                                                themeConfig.theme === 'dark' &&
                                                'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
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
                                                themeConfig.theme === 'system' &&
                                                'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
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
                                    {/* <Dropdown
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
</Dropdown> */}
                                </div>
                                {api.isUserAuthenticated() ? (
                                    <div className="flex items-center gap-2 mx-2">













                                        
        <div className="dropdown shrink-0">
            <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={
                    <span onClick={handleIconHeartClick}> 
                        <IconHeart />
                    </span>
                }
            >
                {/* Dropdown content if needed */}
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
                                                trigger="hover"
                                                button={
                                                    <div className="relative group block">
                                                        {userConnected?.imageUrl ? (
                                                            <img
                                                                className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                                                                src={`${resourcesUrl}/${userConnected?.imageUrl}`}
                                                                alt="userProfile"
                                                            />
                                                        ) : (
                                                            <img
                                                                className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                                                                src="/assets/images/userplaceholder.png"
                                                                alt="placer holder"
                                                            />
                                                        )}
                                                    </div>
                                                }
                                            >
                                                <ul className="bg-white shadow-lg rounded-lg w-[230px] font-semibold text-black">
                                                    <li className="flex items-center px-4 py-4 border-b">
                                                        {userConnected?.imageUrl ? (
                                                            <img className="rounded-full w-10 h-10 object-cover" src={`${resourcesUrl}/${userConnected?.imageUrl}`} alt="userProfile" />
                                                        ) : (
                                                            <img className="rounded-full w-10 h-10 object-cover" src={'/assets/images/userplaceholder.png'} alt="userProfile" />
                                                        )}

                                                        <div className="ltr:pl-4 rtl:pr-4 truncate">
                                                            <h4 className="text-base font-bold">{userConnected?.firstname}</h4>
                                                            <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">{userConnected?.role?.description}</span>
                                                            <p className="text-sm text-gray-600">{userConnected?.email}</p>
                                                        </div>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/Home" className="flex items-center px-4 py-3">
                                                            <span className="text-sm">Home</span>
                                                        </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/favouritelist" className="flex items-center px-4 py-3">
                                                            <span className="text-sm">Favourite</span>
                                                        </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/my-learning" className="flex items-center px-4 py-3">
                                                            <span className="text-sm">My Learning</span>
                                                        </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/AddFormer" className="flex items-center px-4 py-3">
                                                            <span className="text-sm">Teach on TriTraining</span>
                                                        </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/allcourses" className="flex items-center px-4 py-3">
                                                            <span className="text-sm">All Courses</span>
                                                        </Link>
                                                    </li>
                                                    {userConnected?.role?.description.toLowerCase() === 'former' && (
                                                        <li className="hover:bg-gray-100">
                                                            <Link to="/ajoutcours" className="flex items-center px-4 py-3">
                                                                <span className="text-sm">Add Courses</span>
                                                            </Link>
                                                        </li>
                                                    )}
                                                    {userConnected?.role?.description.toLowerCase() === 'admin' && (
                                                        <>
                                                            <li className="hover:bg-gray-100">
                                                                <Link to="/analytics" className="flex items-center px-4 py-3">
                                                                    <span className="text-sm">Dashboard</span>
                                                                </Link>
                                                            </li>
                                                            <li className="hover:bg-gray-100">
                                                                <Link to="/ajoutcours" className="flex items-center px-4 py-3">
                                                                    <span className="text-sm">Add Courses</span>
                                                                </Link>
                                                            </li>
                                                            <li className="hover:bg-gray-100">
                                                                <Link to="/gestionutlilisateurs" className="flex items-center px-4 py-3">
                                                                    <span className="text-sm">Menage Users</span>
                                                                </Link>
                                                            </li>
                                                            <li className="hover:bg-gray-100">
                                                                <Link to="/GestionCategories" className="flex items-center px-4 py-3">
                                                                    <span className="text-sm">Menage Categories</span>
                                                                </Link>
                                                            </li>
                                                            <li className="hover:bg-gray-100">
                                                                <Link to="/CreateCertif" className="flex items-center px-4 py-3">
                                                                    <span className="text-sm">Menage Certificates</span>
                                                                </Link>
                                                            </li>
                                                            <li className="hover:bg-gray-100">
                                                                <Link to="/GestionLevels" className="flex items-center px-4 py-3">
                                                                    <span className="text-sm">Menage Levels</span>
                                                                </Link>
                                                            </li>
                                                            <li className="hover:bg-gray-100">
                                                                <Link to="/Claims" className="flex items-center px-4 py-3">
                                                                    <span className="text-sm">Claims</span>
                                                                </Link>
                                                            </li>
                                                             <li className="hover:bg-gray-100 cursor-pointer">
                                                        <div
                                                            className="flex items-center px-4 py-3"
                                                            onClick={() => {
                                                                dispatch(logoutUser());
                                                                navigate('/home');
                                                            }}
                                                        >
                                                            <span className="text-sm">Logout</span>
                                                        </div>
                                                    </li>
                                                        </>
                                                    )}

                                                    <li className="border-t border-gray-200 hover:bg-gray-100">
                                                        <Link to="/language" className="flex items-center px-4 py-3">
                                                            <span className="text-sm">Language</span>
                                                            <span className="ml-auto">English</span>
                                                        </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/public-profile" className="flex items-center px-4 py-3">
                                                            <span className="text-sm">Public profile</span>
                                                        </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/users/profile " className="flex items-center px-4 py-3">
                                                            <span className="text-sm">Edit profile</span>
                                                        </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100 cursor-pointer">
                                                        <div
                                                            className="flex items-center px-4 py-3"
                                                            onClick={() => {
                                                                dispatch(logoutUser());
                                                                navigate('/home');
                                                            }}
                                                        >
                                                            <span className="text-sm">Logout</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Dropdown>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex gap-2 h-full mx-4">
                                        <div
                                            className=" border-solid border-[1px] border-black w-[85px] h-full flex items-center justify-center text-black font-bold py-2 cursor-pointer hover:bg-gray-500/10"
                                            onClick={() => navigate('/auth/boxed-signin')}
                                        >
                                            Log in
                                        </div>
                                        <div
                                            className="py-2 border-solid border-[1px] border-primary w-[85px] flex items-center justify-center text-white bg-primary font-bold cursor-pointer hover:bg-primary/80"
                                            onClick={() => navigate('/auth/boxed-signup')}
                                        >
                                            Sign up
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/*   <ul
              className={` horizontal-menu hidden font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse  border-t border-[#ebedf2] dark:border-[#191e3a] 
              ${ShowTopNav === false ? 'text-white-light' : 'text-black dark:text-white-light'}            
              `}
            >
              <li className="menu nav-item relative">
                <NavLink className="nav-link" id="home" to="/home">
                  {t('Home')}
                </NavLink>
              </li>
              <li className="menu nav-item relative">
                <NavLink className="nav-link" id="home" to="/users/profile">
                  {t('Profile')}
                </NavLink>
              </li>

              <li className="menu nav-item relative bg-transparent ">
                <button type="button" className="nav-link">
                  <div className="flex items-center">
                      <span className="px-1">{t('Dashbord')}</span>
                    <div className="right_arrow">
                      <IconCaretDown />
                    </div>
                  </div>
                </button>
                <ul className="sub-menu ">
                  <li className=''>
                    <NavLink to="/analytics">{t('Analytics')}</NavLink>
                  </li>
                </ul>
              </li>
          
              <li className="menu nav-item relative bg-transparent ">
                <button type="button" className="nav-link">
                  <div className="flex items-center">
                      <span className="px-1">{t('Work Space')}</span>
                    <div className="right_arrow">
                      <IconCaretDown />
                    </div>
                  </div>
                </button>
                <ul className="sub-menu ">
                <li className="menu nav-item relative">
                <NavLink className="nav-link" id="home" to="/ajoutcours">
                  {t('Add Courses')}
                </NavLink>
              </li>
              <li className="menu nav-item relative">
                <NavLink className="nav-link" id="home" to="/my-learning">
                  {t('My learning')}
                </NavLink>
              </li>
        
              
              <li className="menu nav-item relative">
                <NavLink className="nav-link" id="home" to={`/users/user-account-settings/${userConnected?.firstname}`}>
                  {t('Gestion user')}
                </NavLink>
              </li>
              <li className="menu nav-item relative">
                <NavLink className="nav-link" id="home" to="/GestionCategories">
                  {t('Gestion Category')}
                </NavLink>
              </li>
              
              <li className="menu nav-item relative bg-transparent ">
                <button type="button" className="nav-link">
                  <div className="flex items-center">
                      <span className="px-1">{t('Gestion Certif')}</span>
                    <div className="right_arrow">
                      <IconCaretDown />
                    </div>
                  </div>
                </button>
                <ul className="sub-menu ">
                  <li className=''>
                    <NavLink to="/CreateCertif">{t('create certif')}</NavLink>
                  </li>
                  <li className=''>
                    <NavLink to="/PrintCertif">{t('print certif')}</NavLink>
                  </li>
                </ul>
              </li>
                </ul>

              </li>
           
          

            </ul> */}
                    </div>
                </header>
                {/* )} */}
            </>
        </>
    );
};

export default HomeHeaderLanding;
