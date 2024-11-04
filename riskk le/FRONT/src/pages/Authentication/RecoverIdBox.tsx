import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import i18next from 'i18next';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconMail from '../../components/Icon/IconMail';
import IconLockDots from '../../components/Icon/IconLockDots';
import IconInstagram from '../../components/Icon/IconInstagram';
import IconFacebookCircle from '../../components/Icon/IconFacebookCircle';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconGoogle from '../../components/Icon/IconGoogle';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useRedux } from '../../hooks';
import { Navigate, Link, useLocation } from 'react-router-dom';
import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';
import DynamicForm from '../../components/Form/FormDynamic';
import { resetAuth, loginUser } from '../../Redux/actions';
import { IRootState } from '../../Redux/store';

type UserData = {
  email: string;
  password: string;
};

type LocationState = {
  from?: Location;
};

const LoginBoxed = () => {
  //   const dispatch = useDispatch();
  const { t } = useTranslation();
  const { dispatch, appSelector } = useRedux();

  const { user, userLoggedIn, loading, error } = appSelector((state) => ({
    user: state.Auth.user,
    loading: state.Auth.loading,
    error: state.Auth.error,
    userLoggedIn: state.Auth.userLoggedIn,
  }));

  useEffect(() => {
    dispatch(setPageTitle('Login Boxed'));
    dispatch(resetAuth());
    console.log(user);
    console.log(userLoggedIn);
  }, [dispatch]);

  const navigate = useNavigate();
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
        name: 'email',
        type: 'input',
        inputType: 'email',
        component: 'input',
      },
    
      // Add more fields as needed
    ],
    validationSchema: {
      password: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    },
  };

  const initialValues = {
    email: 'admin@gmail.com',
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted with values:', values);
    dispatch(loginUser(values['email'], values['password']));

    setSubmitting(false);
  };

  const location = useLocation();
  let redirectUrl = '/';

  if (location.state) {
    const { from } = location.state as LocationState;
    redirectUrl = from ? from.pathname : '/';
  }

  return (
    <div>
      {userLoggedIn && user && <Navigate to={redirectUrl} replace />}

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

              <p className="text-base font-bold leading-normal text-dark mt-6">Entrez votre email pour récupérer votre mot de passe</p>
            </div>

            <DynamicForm formConfig={formConfig} initialValues={initialValues} onSubmit={handleSubmit} />

            <div className="mb-10 md:mb-[60px] mt-8 text-center">
              {/* <Link to="/auth/boxed-password-reset" className="text-md text-danger hover:text-gray-800">
                Mot de passe oublié?
              </Link> */}
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBoxed;
