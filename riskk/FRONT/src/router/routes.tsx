import { lazy, Suspense } from 'react';
import Root from './Root';
import { useRoutes } from 'react-router-dom';
import DefaultLayout from '../components/Layouts/DefaultLayout/DefaultLayout';
import BlankLayout from '../components/Layouts/BlankLayout/BlankLayout';
import PrivateRoute from './PrivateRoute';
import LandingLayout from '../components/Layouts/LandingLayout/LandingLayout';
import path from 'path';
import HomeLayout from '../components/Layouts/LandingLayout/HomeLayout';
import { useSelector } from 'react-redux';
const Index = lazy(() => import('../pages/Index'));
const Analytic = lazy(() => import('../pages/Analytic/Analytic'));
// const Finance = lazy(() => import('../pages/Finance'));
// const Crypto = lazy(() => import('../pages/Crypto'));
const Todolist = lazy(() => import('../pages/Apps/Todolist'));
const Mailbox = lazy(() => import('../pages/Apps/Mailbox'));
const Notes = lazy(() => import('../pages/Apps/Notes'));
const Contacts = lazy(() => import('../pages/Apps/Contacts'));
const Chat = lazy(() => import('../pages/Apps/Chat'));
const Scrumboard = lazy(() => import('../pages/Apps/Scrumboard'));
const Calendar = lazy(() => import('../pages/Apps/Calendar'));
const List = lazy(() => import('../pages/Apps/Invoice/List'));
const Preview = lazy(() => import('../pages/Apps/Invoice/Preview'));
const Add = lazy(() => import('../pages/Apps/Invoice/Add'));
const Edit = lazy(() => import('../pages/Apps/Invoice/Edit'));
const Tabs = lazy(() => import('../pages/Components/Tabs'));
const Accordians = lazy(() => import('../pages/Components/Accordians'));
const Modals = lazy(() => import('../pages/Components/Modals'));
const Cards = lazy(() => import('../pages/Components/Cards'));
const Carousel = lazy(() => import('../pages/Components/Carousel'));
const Countdown = lazy(() => import('../pages/Components/Countdown'));
const Counter = lazy(() => import('../pages/Components/Counter'));
const SweetAlert = lazy(() => import('../pages/Components/SweetAlert'));
const Timeline = lazy(() => import('../pages/Components/Timeline'));
const Notification = lazy(() => import('../pages/Components/Notification'));
const MediaObject = lazy(() => import('../pages/Components/MediaObject'));
const ListGroup = lazy(() => import('../pages/Components/ListGroup'));
const PricingTable = lazy(() => import('../pages/Components/PricingTable'));
const LightBox = lazy(() => import('../pages/Components/LightBox'));
const Alerts = lazy(() => import('../pages/Elements/Alerts'));
const Avatar = lazy(() => import('../pages/Elements/Avatar'));
const Badges = lazy(() => import('../pages/Elements/Badges'));
const Breadcrumbs = lazy(() => import('../pages/Elements/Breadcrumbs'));
const Buttons = lazy(() => import('../pages/Elements/Buttons'));
const Buttongroups = lazy(() => import('../pages/Elements/Buttongroups'));
const Colorlibrary = lazy(() => import('../pages/Elements/Colorlibrary'));
const DropdownPage = lazy(() => import('../pages/Elements/DropdownPage'));
const Infobox = lazy(() => import('../pages/Elements/Infobox'));
const Jumbotron = lazy(() => import('../pages/Elements/Jumbotron'));
const Loader = lazy(() => import('../pages/Elements/Loader'));
const Pagination = lazy(() => import('../pages/Elements/Pagination'));
const Popovers = lazy(() => import('../pages/Elements/Popovers'));
const Progressbar = lazy(() => import('../pages/Elements/Progressbar'));
const Search = lazy(() => import('../pages/Elements/Search'));
const Tooltip = lazy(() => import('../pages/Elements/Tooltip'));
const Treeview = lazy(() => import('../pages/Elements/Treeview'));
const Typography = lazy(() => import('../pages/Elements/Typography'));
// const Widgets = lazy(() => import('../pages/Widgets'));
// const FontIcons = lazy(() => import('../pages/FontIcons'));
// const DragAndDrop = lazy(() => import('../pages/DragAndDrop'));
// const Tables = lazy(() => import('../pages/Tables'));
const Basic = lazy(() => import('../pages/DataTables/Basic'));
const Advanced = lazy(() => import('../pages/DataTables/Advanced'));
const Skin = lazy(() => import('../pages/DataTables/Skin'));
const OrderSorting = lazy(() => import('../pages/DataTables/OrderSorting'));
const MultiColumn = lazy(() => import('../pages/DataTables/MultiColumn'));
const MultipleTables = lazy(() => import('../pages/DataTables/MultipleTables'));
const AltPagination = lazy(() => import('../pages/DataTables/AltPagination'));
const Checkbox = lazy(() => import('../pages/DataTables/Checkbox'));
const RangeSearch = lazy(() => import('../pages/DataTables/RangeSearch'));
const Export = lazy(() => import('../pages/DataTables/Export'));
const ColumnChooser = lazy(() => import('../pages/DataTables/ColumnChooser'));
const Profile = lazy(() => import('../pages/Users/Profile'));
const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));
const KnowledgeBase = lazy(() => import('../pages/Pages/KnowledgeBase'));
const ContactUsCover = lazy(() => import('../pages/Pages/ContactUsCover'));
const Faq = lazy(() => import('../pages/Pages/Faq'));
const ComingSoonBoxed = lazy(() => import('../pages/Pages/ComingSoonBoxed'));
const ComingSoonCover = lazy(() => import('../pages/Pages/ComingSoonCover'));
const ERROR404 = lazy(() => import('../pages/Pages/Error404'));
const ERROR500 = lazy(() => import('../pages/Pages/Error500'));
const ERROR503 = lazy(() => import('../pages/Pages/Error503'));
const Maintenence = lazy(() => import('../pages/Pages/Maintenence'));
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));
const RegisterBoxed = lazy(() => import('../pages/Authentication/RegisterBoxed'));
const UnlockBoxed = lazy(() => import('../pages/Authentication/UnlockBox'));
const RecoverIdBoxed = lazy(() => import('../pages/Authentication/RecoverIdBox'));
const Error = lazy(() => import('../components/Error'));
// const Charts = lazy(() => import('../pages/Charts'));
const FormBasic = lazy(() => import('../pages/Forms/Basic'));
const FormInputGroup = lazy(() => import('../pages/Forms/InputGroup'));
const FormLayouts = lazy(() => import('../pages/Forms/Layouts'));
const Validation = lazy(() => import('../pages/Forms/Validation'));
const InputMask = lazy(() => import('../pages/Forms/InputMask'));
const Select2 = lazy(() => import('../pages/Forms/Select2'));
const Touchspin = lazy(() => import('../pages/Forms/TouchSpin'));
const CheckBoxRadio = lazy(() => import('../pages/Forms/CheckboxRadio'));
const Switches = lazy(() => import('../pages/Forms/Switches'));
const Wizards = lazy(() => import('../pages/Forms/Wizards'));
const FileUploadPreview = lazy(() => import('../pages/Forms/FileUploadPreview'));
const QuillEditor = lazy(() => import('../pages/Forms/QuillEditor'));
const MarkDownEditor = lazy(() => import('../pages/Forms/MarkDownEditor'));
const DateRangePicker = lazy(() => import('../pages/Forms/DateRangePicker'));
const Clipboard = lazy(() => import('../pages/Forms/Clipboard'));

const Home = lazy(() => import('../pages/tri.training/landing/home/Home'));
const ContactUs = lazy(() => import('../pages/tri.training/landing/ContactUs/ContactUs'));
const AboutUs = lazy(() => import('../pages/tri.training/landing/AboutUs/AboutUs'));
const AjoutCours = lazy(() => import('../pages/tri.training/workspace/Course/AjoutCours'));
const AllCourses = lazy(() => import('../pages/tri.training/workspace/Course/allcourses/AllCourses'));
const Mylearning = lazy(() => import('../pages/tri.training/workspace/Course/mylearning/Mylearning'));
const ChapterCourse = lazy(() => import('../pages/tri.training/workspace/Course/section/Section'));
const Formation = lazy(() => import('../pages/tri.training/workspace/Formation/Formation'));
const GestionUsers = lazy(() => import('../pages/tri.training/workspace/GestionUsers/GestionUsers'));
const GestionCategories = lazy(() => import('../pages/tri.training/workspace/GestionCategories/GestionCategories'));
const GestionLevels = lazy(() => import('../pages/tri.training/workspace/GestionLevels/GestionLevels'));
const CreateCertif = lazy(() => import('../pages/tri.training/workspace/GestionCertif/CreateCertif'));
const PrintCertif = lazy(() => import('../pages/tri.training/workspace/GestionCertif/PrintCertif'));
const GestionFeedback = lazy(() => import('../pages/tri.training/workspace/Feedbacks/Claims/Claims'));
const DetailsCourse = lazy(() => import('../pages/tri.training/workspace/Course/Details/detailsCourse'));
const FavouriteList = lazy(() => import('../pages/tri.training/workspace/Course/FavouriteCourses/FavouriteList'));
const AddFormer = lazy(() => import('../pages/tri.training/workspace/GestionUsers/former/AddFormer'));
const Triwebusiness = lazy(() => import('../pages/tri.training/workspace/Triwebusiness/triwebusines'));
const catalogues = lazy(() => import('../pages/tri.training/workspace/Triwebusiness/catalogues'));


const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<React.ComponentType<any>>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    const userconnected = useSelector((state: any) => state.Auth.user);

    const accountSettingsRoute = userconnected
        ? {
              path: `/users/user-account-settings/${userconnected.firstname}`,
              element: <LoadComponent component={AccountSetting} />,
          }
        : {
              path: `/users/user-account-settings`,
              element: <LoadComponent component={AccountSetting} />,
          };

    const userRoutes = [
        {
            path: '/users/profile',
            element: <LoadComponent component={Profile} />,
        },
        {
            path: '/favouritelist',
            element: <LoadComponent component={FavouriteList} />,
        },
        {
            path: '/formation/:courseId',
            element: <LoadComponent component={Formation} />,
        },
        {
            path: '/detailscourse/:courseId',
            element: <LoadComponent component={DetailsCourse} />,
        },
        {
            path: 'allcourses',
            element: <LoadComponent component={AllCourses} />,
        },
        {
            path: 'allcourses/:categoryId',
            element: <LoadComponent component={AllCourses} />,
        },
        {
            path: 'my-learning',
            element: <LoadComponent component={Mylearning} />,
        },
        {
            path: 'Triwebusiness',
            element: <LoadComponent component={Triwebusiness} />,
        },
        {
            path: 'Catalogues',
            element: <LoadComponent component={catalogues} />,
        },

        accountSettingsRoute,
        // Add any additional user-specific routes here
    ];

    // Define common former routes (can manage courses)
    const formerRoutes = [
        ...userRoutes,
        {
            path: 'chaptercourse/:courseId',
            element: <LoadComponent component={ChapterCourse} />,
        },
        {
            path: '/GestionCategories',
            element: <LoadComponent component={GestionCategories} />,
        },
        {
            path: '/ajoutcours',
            element: <PrivateRoute component={AjoutCours} />,
        },
      
    ];

    const adminRoutes = [
        {
            path: '/CreateCertif',
            element: <LoadComponent component={CreateCertif} />,
        },
        {
            path: '/PrintCertif',
            element: <LoadComponent component={PrintCertif} />,
        },
        {
            path: '/Claims',
            element: <LoadComponent component={GestionFeedback} />,
        },
        {
            path: '/GestionLevels',
            element: <LoadComponent component={GestionLevels} />,
        },

        {
            path: '/gestionutlilisateurs',
            element: <LoadComponent component={GestionUsers} />,
        },
        {
            path: 'analytics',
            element: <LoadComponent component={Analytic} />,
        },
        {
            path: '/addformer',
            element: <PrivateRoute component={AddFormer} />,
        },

        // Add any other admin-specific routes here
    ];

    return useRoutes([
        { path: '/', element: <Root /> },

        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },
            ],
        },
        {
            path: '/',
            element: <LandingLayout />,
            children: [
                {
                    path: 'contactus',
                    element: <LoadComponent component={ContactUs} />,
                },
                {
                    path: 'aboutus',
                    element: <LoadComponent component={AboutUs} />,
                },
            ],
        },

        {
            // public routes
            path: '/',
            element: <BlankLayout />,
            children: [
                {
                    path: 'auth',
                    children: [
                        {
                            path: '/auth/boxed-signin',
                            element: <LoadComponent component={LoginBoxed} />,
                        },
                        {
                            path: '/auth/boxed-signup',
                            element: <LoadComponent component={RegisterBoxed} />,
                        },
                        {
                            path: '/auth/boxed-lockscreen',
                            element: <LoadComponent component={UnlockBoxed} />,
                        },
                        {
                            path: '/auth/boxed-password-reset',
                            element: <LoadComponent component={RecoverIdBoxed} />,
                        },
                    ],
                },
            ],
        },

        {
            // auth protected routes for User
            path: '/',
            element: <PrivateRoute roles={['User', 'Former', 'Admin']} component={DefaultLayout} />,
            children: [
                ...userRoutes,
                {
                    path: 'ExamanIdex',
                    element: <LoadComponent component={Notes} />,
                },
                {
                    path: 'ExamanCondidat/:idExaman',
                    element: <LoadComponent component={Notes} />,
                },
                {
                    path: '/addformer',
                    element: <PrivateRoute component={AddFormer} />,
                },
            ],
        },
        {
            path: '/',
            element: <PrivateRoute roles={['Admin', 'Former']} component={DefaultLayout} />,
            children: formerRoutes,
        },

        {
            path: '/',
            element: <PrivateRoute roles={'Admin'} component={DefaultLayout} />,
            children: [...adminRoutes, ...formerRoutes],
        },

        // {
        //     // auth protected routes
        //     path: '/',
        //     element: <PrivateRoute roles={'Admin'} component={DefaultLayout} />,
        //     children: [
        //         {
        //             path: 'analytics',
        //             element: <LoadComponent component={Analytic} />,
        //         },
        //         {
        //             path: 'chaptercourse/:courseId',
        //             element: <LoadComponent component={ChapterCourse} />,
        //         },
        //         {
        //             path: 'allcourses',
        //             element: <LoadComponent component={AllCourses} />,
        //         },
        //         {
        //             path: 'my-learning',
        //             element: <LoadComponent component={Mylearning} />,
        //         },

        //         // Users page
        //         {
        //             path: '/users/profile',
        //             element: <LoadComponent component={Profile} />,
        //         },

        //         accountSettingsRoute,

        //         {
        //             path: '/formation',
        //             element: <LoadComponent component={Formation} />,
        //         },

        //         {
        //             path: '/gestionutlilisateurs',
        //             element: <LoadComponent component={GestionUsers} />,
        //         },
        //         {
        //             path: '/GestionCategories',
        //             element: <LoadComponent component={GestionCategories} />,
        //         },
        //         {
        //             path: '/GestionLevels',
        //             element: <LoadComponent component={GestionLevels} />,
        //         },
        //         {
        //             path: '/CreateCertif',
        //             element: <LoadComponent component={CreateCertif} />,
        //         },
        //         {
        //             path: '/PrintCertif',
        //             element: <LoadComponent component={PrintCertif} />,
        //         },
        //         {
        //             path: '/Claims',
        //             element: <LoadComponent component={GestionFeedback} />,
        //         },
        //         {
        //             path: '/detailscourse/:courseId',
        //             element: <LoadComponent component={DetailsCourse} />,
        //         },
        //         {
        //             path: '/favouritelist',
        //             element: <LoadComponent component={FavouriteList} />,
        //         },
        //     ],
        // },
    ]);
};

export { AllRoutes };

// const routes = [
//     // dashboard
//     {
//         path: '/',
//         element: <Index />,
//     },
//     // {
//     //     path: '/index',
//     //     element: <Index />,
//     // },
//     // analytics page
//     {
//         path: '/analytics',
//         element: <Analytics />,
//     },
//     // finance page
//     {
//         path: '/finance',
//         element: <Finance />,
//     },
//     // crypto page
//     {
//         path: '/crypto',
//         element: <Crypto />,
//     },
//     {
//         path: '/apps/todolist',
//         element: <Todolist />,
//     },
//     {
//         path: '/apps/notes',
//         element: <Notes />,
//     },
//     {
//         path: '/apps/contacts',
//         element: <Contacts />,
//     },
//     {
//         path: '/apps/mailbox',
//         element: <Mailbox />,
//     },
//     {
//         path: '/apps/invoice/list',
//         element: <List />,
//     },
//     // Apps page
//     {
//         path: '/apps/chat',
//         element: <Chat />,
//     },
//     {
//         path: '/apps/scrumboard',
//         element: <Scrumboard />,
//     },
//     {
//         path: '/apps/calendar',
//         element: <Calendar />,
//     },
//     // preview page
//     {
//         path: '/apps/invoice/preview',
//         element: <Preview />,
//     },
//     {
//         path: '/apps/invoice/add',
//         element: <Add />,
//     },
//     {
//         path: '/apps/invoice/edit',
//         element: <Edit />,
//     },
//     // components page
//     {
//         path: '/components/tabs',
//         element: <Tabs />,
//     },
//     {
//         path: '/components/accordions',
//         element: <Accordians />,
//     },
//     {
//         path: '/components/modals',
//         element: <Modals />,
//     },
//     {
//         path: '/components/cards',
//         element: <Cards />,
//     },
//     {
//         path: '/components/carousel',
//         element: <Carousel />,
//     },
//     {
//         path: '/components/countdown',
//         element: <Countdown />,
//     },
//     {
//         path: '/components/counter',
//         element: <Counter />,
//     },
//     {
//         path: '/components/sweetalert',
//         element: <SweetAlert />,
//     },
//     {
//         path: '/components/timeline',
//         element: <Timeline />,
//     },
//     {
//         path: '/components/notifications',
//         element: <Notification />,
//     },
//     {
//         path: '/components/media-object',
//         element: <MediaObject />,
//     },
//     {
//         path: '/components/list-group',
//         element: <ListGroup />,
//     },
//     {
//         path: '/components/pricing-table',
//         element: <PricingTable />,
//     },
//     {
//         path: '/components/lightbox',
//         element: <LightBox />,
//     },
//     // elements page
//     {
//         path: '/elements/alerts',
//         element: <Alerts />,
//     },
//     {
//         path: '/elements/avatar',
//         element: <Avatar />,
//     },
//     {
//         path: '/elements/badges',
//         element: <Badges />,
//     },
//     {
//         path: '/elements/breadcrumbs',
//         element: <Breadcrumbs />,
//     },
//     {
//         path: '/elements/buttons',
//         element: <Buttons />,
//     },
//     {
//         path: '/elements/buttons-group',
//         element: <Buttongroups />,
//     },
//     {
//         path: '/elements/color-library',
//         element: <Colorlibrary />,
//     },
//     {
//         path: '/elements/dropdown',
//         element: <DropdownPage />,
//     },
//     {
//         path: '/elements/infobox',
//         element: <Infobox />,
//     },
//     {
//         path: '/elements/jumbotron',
//         element: <Jumbotron />,
//     },
//     {
//         path: '/elements/loader',
//         element: <Loader />,
//     },
//     {
//         path: '/elements/pagination',
//         element: <Pagination />,
//     },
//     {
//         path: '/elements/popovers',
//         element: <Popovers />,
//     },
//     {
//         path: '/elements/progress-bar',
//         element: <Progressbar />,
//     },
//     {
//         path: '/elements/search',
//         element: <Search />,
//     },
//     {
//         path: '/elements/tooltips',
//         element: <Tooltip />,
//     },
//     {
//         path: '/elements/treeview',
//         element: <Treeview />,
//     },
//     {
//         path: '/elements/typography',
//         element: <Typography />,
//     },

//     // charts page
//     {
//         path: '/charts',
//         element: <Charts />,
//     },
//     // widgets page
//     {
//         path: '/widgets',
//         element: <Widgets />,
//     },
//     //  font-icons page
//     {
//         path: '/font-icons',
//         element: <FontIcons />,
//     },
//     //  Drag And Drop page
//     {
//         path: '/dragndrop',
//         element: <DragAndDrop />,
//     },
//     //  Tables page
//     {
//         path: '/tables',
//         element: <Tables />,
//     },
//     // Data Tables
//     {
//         path: '/datatables/basic',
//         element: <Basic />,
//     },
//     {
//         path: '/datatables/advanced',
//         element: <Advanced />,
//     },
//     {
//         path: '/datatables/skin',
//         element: <Skin />,
//     },
//     {
//         path: '/datatables/order-sorting',
//         element: <OrderSorting />,
//     },
//     {
//         path: '/datatables/multi-column',
//         element: <MultiColumn />,
//     },
//     {
//         path: '/datatables/multiple-tables',
//         element: <MultipleTables />,
//     },
//     {
//         path: '/datatables/alt-pagination',
//         element: <AltPagination />,
//     },
//     {
//         path: '/datatables/checkbox',
//         element: <Checkbox />,
//     },
//     {
//         path: '/datatables/range-search',
//         element: <RangeSearch />,
//     },
//     {
//         path: '/datatables/export',
//         element: <Export />,
//     },
//     {
//         path: '/datatables/column-chooser',
//         element: <ColumnChooser />,
//     },
//     // Users page
//     {
//         path: '/users/profile',
//         element: <Profile />,
//     },
//     {
//         path: '/users/user-account-settings',
//         element: <AccountSetting />,
//     },
//     // pages
//     {
//         path: '/pages/knowledge-base',
//         element: <KnowledgeBase />,
//     },
//     {
//         path: '/pages/contact-us-boxed',
//         element: <ContactUsBoxed />,
//         layout: 'blank',
//     },
//     {
//         path: '/pages/contact-us-cover',
//         element: <ContactUsCover />,
//         layout: 'blank',
//     },
//     {
//         path: '/pages/faq',
//         element: <Faq />,
//     },
//     {
//         path: '/pages/coming-soon-boxed',
//         element: <ComingSoonBoxed />,
//         layout: 'blank',
//     },
//     {
//         path: '/pages/coming-soon-cover',
//         element: <ComingSoonCover />,
//         layout: 'blank',
//     },
//     {
//         path: '/pages/error404',
//         element: <ERROR404 />,
//         layout: 'blank',
//     },
//     {
//         path: '/pages/error500',
//         element: <ERROR500 />,
//         layout: 'blank',
//     },
//     {
//         path: '/pages/error503',
//         element: <ERROR503 />,
//         layout: 'blank',
//     },
//     {
//         path: '/pages/maintenence',
//         element: <Maintenence />,
//         layout: 'blank',
//     },
//
//     //forms page
//     {
//         path: '/forms/basic',
//         element: <FormBasic />,
//     },
//     {
//         path: '/forms/input-group',
//         element: <FormInputGroup />,
//     },
//     {
//         path: '/forms/layouts',
//         element: <FormLayouts />,
//     },
//     {
//         path: '/forms/validation',
//         element: <Validation />,
//     },
//     {
//         path: '/forms/input-mask',
//         element: <InputMask />,
//     },
//     {
//         path: '/forms/select2',
//         element: <Select2 />,
//     },
//     {
//         path: '/forms/touchspin',
//         element: <Touchspin />,
//     },
//     {
//         path: '/forms/checkbox-radio',
//         element: <CheckBoxRadio />,
//     },
//     {
//         path: '/forms/switches',
//         element: <Switches />,
//     },
//     {
//         path: '/forms/wizards',
//         element: <Wizards />,
//     },
//     {
//         path: '/forms/file-upload',
//         element: <FileUploadPreview />,
//     },
//     {
//         path: '/forms/quill-editor',
//         element: <QuillEditor />,
//     },
//     {
//         path: '/forms/markdown-editor',
//         element: <MarkDownEditor />,
//     },
//     {
//         path: '/forms/date-picker',
//         element: <DateRangePicker />,
//     },
//     {
//         path: '/forms/clipboard',
//         element: <Clipboard />,
//     },
//     {
//         path: '/about',
//         element: <About />,
//         layout: 'blank',
//     },
//     {
//         path: '*',
//         element: <Error />,
//         layout: 'blank',
//     },
// ];

// export { routes };
