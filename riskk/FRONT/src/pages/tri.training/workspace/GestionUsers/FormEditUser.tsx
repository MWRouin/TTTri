import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';

interface FormEditUserProsP {
  initialValues?: any;
  onSubmit: (data: any) => void;
}

const FormEditUser = (props: FormEditUserProsP) => {
  const submitForm = (data: any) => {
    props.onSubmit(data);
  };

  const SubmittedForm = Yup.object().shape({
    email: Yup.string().email().required(),

    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    telephone: Yup.string().required(),
    password: Yup.string().required(),
    roleId: Yup.string().required(),
    addresse: Yup.string().required(),
  });

  const Roles = [
    { roleID: 1, description: 'Admin' },
    { roleID: 2, description: 'Former' },
    { roleID: 3, description: 'Guest' },
  ];

  return (
    <Formik initialValues={props.initialValues} validationSchema={SubmittedForm} onSubmit={submitForm}>
      {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
          <div className={submitCount ? (errors.firstname ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="firstname">First Name </label>
            <Field name="firstname" type="text" id="fullName" placeholder="Enter First Name" className="form-input" />
          </div>
          <div className={submitCount ? (errors.lastname ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="lastname">Last Name </label>
            <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input" />
          </div>
          <div className={submitCount ? (errors.telephone ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="telephone">Phone</label>
            <Field name="telephone" type="text" id="telephone" placeholder="Enter Phone" className="form-input" />
          </div>
          <div className={submitCount ? (errors.email ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" id="email" placeholder="Enter Email" className="form-input" />
          </div>
          <div className={submitCount ? (errors.password ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="text" id="password" placeholder="Enter Password" className="form-input" />
          </div>
          <div className={submitCount ? (errors.roleId ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="roleId">Role</label>
            <Field as="select" name="roleId" id="roleId" className="form-select">
              <option value="">Select Role</option>

              {Roles.map((option: any) => (
                <option key={option.roleID} value={option.roleID}>
                  {option.description}
                </option>
              ))}
            </Field>
          </div>
          <div className={submitCount ? (errors.addresse ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="addresse">Address</label>
            <Field name="addresse" type="text" id="addresse" placeholder="Enter Address" className="form-input" />
          </div>

          <button type="submit" className="btn btn-primary !mt-6">
            Submit Form
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default FormEditUser;
