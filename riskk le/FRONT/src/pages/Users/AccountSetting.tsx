import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconHome from '../../components/Icon/IconHome';
import IconDollarSignCircle from '../../components/Icon/IconDollarSignCircle';
import IconUser from '../../components/Icon/IconUser';
import IconPhone from '../../components/Icon/IconPhone';
import IconLinkedin from '../../components/Icon/IconLinkedin';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconFacebook from '../../components/Icon/IconFacebook';
import IconGithub from '../../components/Icon/IconGithub';
import { GetUserById, UpdateUser } from '../../Redux/actions';
import { User } from '../../Redux/user/type';
import { useSelector } from 'react-redux';
import { link } from 'fs';
import { IRootState } from '../../Redux/store';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


 
const AccountSetting = () => {
const dispatch = useDispatch();
const { id } = useParams();
useEffect(()=>{
  dispatch(GetUserById(userConnected.userId)); 
},[])

  useEffect(() => {
    dispatch(setPageTitle('Account Setting'));
  },[]);


const [tabs, setTabs] = useState<string>('home');
const toggleTabs = (name: string) => {
    setTabs(name);
  };


  

const { userConnected } = useSelector((state: IRootState) => ({
  userConnected: state.Auth.user,
}));


const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  addresse: Yup.string().required('Address is required'),
  telephone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});


return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link to="#" className="text-primary hover:underline">
            Users
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Account Settings</span>
        </li>
      </ul>
      <div className="pt-5">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">Settings</h5>
        </div>
        <div>
          <ul className="sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
            <li className="inline-block">
              <button
                onClick={() => toggleTabs('home')}
                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}>
                <IconHome />
                Home
              </button>
            </li>
            <li className="inline-block">
              {/* <button
                onClick={() => toggleTabs('payment-details')}
                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}>
                <IconDollarSignCircle />
                Payment Details
              </button> */}
            </li>
            <li className="inline-block">
              {/* <button
                onClick={() => toggleTabs('danger-zone')}
                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'danger-zone' ? '!border-primary text-primary' : ''}`}>
                <IconPhone />
                Danger Zone
              </button> */}
            </li>
          </ul>
        </div>
        {tabs === 'home' ? (
          <div>
            
            <Formik
              initialValues={{
                userId : 0,
                firstname: userConnected.firstname || '',
                lastname: userConnected.lastname || '',
                addresse: userConnected.addresse || '',
                telephone: userConnected.telephone || '',
                email: userConnected.email || '',
                password : "",
                roleId:userConnected.roleId
              }}
              validationSchema={validationSchema}


              onSubmit={(values : any, { setSubmitting }) => {
                values.userId =  userConnected.userId
                values.password =  userConnected.password
                console.log(values)
                dispatch(UpdateUser(values)); 
                setSubmitting(false);
              }}>
              {({ isSubmitting }) => (
                <Form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                  <h6 className="text-lg font-bold mb-5">General Information</h6>
                  <div className="flex flex-col sm:flex-row">
                    <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                      <img src="/assets//images/profile-34.jpeg" alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstname">First Name</label>
                        <Field id="firstname" name="firstname" type="text" className="form-input" />
                        <ErrorMessage name="firstname" component="div" className="text-red-600" />
                      </div>
                      <div>
                        <label htmlFor="lastname">Last Name</label>
                        <Field id="lastname" name="lastname" type="text" className="form-input" />
                        <ErrorMessage name="lastname" component="div" className="text-red-600" />
                      </div>
                      <div>
                        <label htmlFor="addresse">Address</label>
                        <Field id="addresse" name="addresse" type="text" className="form-input" />
                        <ErrorMessage name="addresse" component="div" className="text-red-600" />
                      </div>
                      <div>
                        <label htmlFor="telephone">Phone</label>
                        <Field id="telephone" name="telephone" type="text" className="form-input" />
                        <ErrorMessage name="telephone" component="div" className="text-red-600" />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" className="form-input" />
                        <ErrorMessage name="email" component="div" className="text-red-600" />
                      </div>
                      <div className="sm:col-span-2 mt-3">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : (

          ''
        )}
        {tabs === 'payment-details' ? (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              <div className="panel">
                <div className="mb-5">
                  <h5 className="font-semibold text-lg mb-4">Payment History</h5>
                  <p>
                    Changes to your <span className="text-primary">Payment Method</span> information will take effect starting with scheduled payment and will be refelected on your next invoice.
                  </p>
                </div>
                <div className="mb-5">
                  <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                    <div className="flex items-start justify-between py-3">
                      <div className="flex-none ltr:mr-4 rtl:ml-4">
                        <img src="/assets/images/card-mastercard.svg" alt="img" />
                      </div>
                      <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                        D17
                        <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 310</span>
                      </h6>
                      <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                        <button className="btn btn-dark">Edit</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start justify-between py-3">
                      <div className="flex-none ltr:mr-4 rtl:ml-4">
                        <img src="/assets/images/card-visa.svg" alt="img" />
                      </div>
                      <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                        Visa
                        <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 5264</span>
                      </h6>
                      <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                        <button className="btn btn-dark">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">Add Payment Method</button>
              </div>
              <div className="panel">
                <div className="mb-5">
                  <h5 className="font-semibold text-lg mb-4">Add Payment Method</h5>
                  <p>
                    Changes your New <span className="text-primary">Payment Method </span>
                    Information.
                  </p>
                </div>
                <div className="mb-5">
                  <form>
                    <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="payBrand">Card Brand</label>
                        <select id="payBrand" className="form-select text-white-dark">
                          <option value="American Express">D 17</option>
                          <option value="Visa">Visa</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="payNumber">Card Number</label>
                        <input id="payNumber" type="text" placeholder="Card Number" className="form-input" />
                      </div>
                    </div>
                    <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="payHolder">Holder Name</label>
                        <input id="payHolder" type="text" placeholder="Holder Name" className="form-input" />
                      </div>
                      <div>
                        <label htmlFor="payCvv">CVV/CVV2</label>
                        <input id="payCvv" type="text" placeholder="CVV" className="form-input" />
                      </div>
                    </div>
                    <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="payExp">Card Expiry</label>
                        <input id="payExp" type="text" placeholder="Card Expiry" className="form-input" />
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        {tabs === 'danger-zone' ? (
          <div className="switch">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="panel space-y-5">
                <h5 className="font-semibold text-lg mb-4">Deactivate Account</h5>
                <p>You will not be able to receive messages, notifications for up to 24 hours.</p>
                <label className="w-12 h-6 relative">
                  <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox7" />
                  <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                </label>
              </div>
              <div className="panel space-y-5">
                <h5 className="font-semibold text-lg mb-4">Delete Account</h5>
                <p>Once you delete the account, there is no going back. Please be certain.</p>
                <button className="btn btn-danger bg-red-500">Delete my account</button>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AccountSetting;
