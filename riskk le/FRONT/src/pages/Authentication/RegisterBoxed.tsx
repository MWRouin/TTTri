import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useRedux } from '../../hooks';
import { Navigate, Link, useLocation } from 'react-router-dom';
import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';
import DynamicForm from '../../components/Form/FormDynamic';
import { resetAuth, signupUser } from '../../Redux/actions';
import { IRootState } from '../../Redux/store';
import { APICore } from '../../helpers/api/apiCore';

type LocationState = {
    from?: Location;
};

const SignupBoxed = () => {
    const { t } = useTranslation();
    const { dispatch } = useRedux();
    const api = new APICore();

    useEffect(() => {
        dispatch(setPageTitle('SignUp Boxed'));
        dispatch(resetAuth());
    }, [dispatch]);

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };

    const [flag, setFlag] = useState(themeConfig.locale);
    const formConfig = {
        fields: [
            {
                name: 'firstName',
                label: 'First Name',
                type: 'input',
                inputType: 'firstName',
                component: 'input',
            },
            {
                name: 'lastName',
                label: 'Last Name',
                type: 'input',
                inputType: 'lastName',
                component: 'input',
            },
            {
                name: 'email',
                label: 'Email',
                type: 'input',
                inputType: 'email',
                component: 'input',
            },
            {
                name: 'password',
                label: 'Password',
                type: 'input',
                inputType: 'password',
                component: 'input',
            },
          
            {
                name: 'telephone',
                label: 'Phone Number',
                type: 'input',
                inputType: 'telephone',
                component: 'input',
            },
            {
                name: 'addresse',
                label: 'Address',
                type: 'input',
                inputType: 'address',
                component: 'input',
            },
        ],
        validationSchema: {
            // firstName: Yup.string().firstName('Invalid FirstName').required('firstName is required'),
            // lastName: Yup.string().lastName('Invalid LastName').required('LastName is required'),
            // telephone: Yup.string().telephone('Invalid Phone Number').required('Email is required'),
            // address: Yup.string().addresse('Invalid Address').required('Address is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Name is required'),
        },
    };

    const initialValues = {
        firstname: 'FirstName',
        lastname: 'LastName',
        telephone: '** *** ***',
        password: '****',
        email: 'FullName@gmail.com',
        addresse: 'Tunis',
    };

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        // Handle form submission (e.g., send data to the server)
        console.log('Form submitted with values:', values);
        dispatch(signupUser(values['firstName'], values['lastName'], values['email'], values['telephone'], values['addresse'], values['password']));

        setSubmitting(false);
    };

    const location = useLocation();
    let redirectUrl = '/home';

    if (location.state) {
        const { from } = location.state as LocationState;
        redirectUrl = from ? from.pathname : '/home';
    }

    return (
        <div>
            {api.isUserAuthenticated() && <Navigate to={redirectUrl} replace />}

            <div className="relative flex min-h-screen items-center justify-center bg-[url('/assets/images/final.png')] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                <div
                    className="relative  w-full max-w-[500px] rounded-lg p-2"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        opacity: 0.9,
                        boxShadow: '2px 8px 50px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div className="mx-auto w-full max-w-[400px]">
                        <div className="mb-5">
                            <img className="w-40  ml-[20px] flex-none" src="/assets/images/logotrit.png" />
                        </div>

                        <DynamicForm formConfig={formConfig} initialValues={initialValues} onSubmit={handleSubmit} />

                        <div className="mb-10 md:mb-[60px] mt-8 text-center"></div>
                        <div className="text-center dark:text-white">
                            Vous avez déjà un compte ? &nbsp;
                            <Link to="/auth/boxed-signin" className="text-md text-danger hover:text-gray-800">
                                S'INSCRIRE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupBoxed;
