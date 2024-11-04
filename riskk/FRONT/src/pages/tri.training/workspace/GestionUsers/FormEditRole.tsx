import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';

interface FormEditRoleProsP {
  initialValues?: any;
  onSubmit: (data: any) => void;
}

const FormEditRole = (props: FormEditRoleProsP) => {
  const submitForm = (data: any) => {
    props.onSubmit(data);
  };

  const SubmittedForm = Yup.object().shape({
    description:  Yup.string().required(),
  });

  return (
    <Formik initialValues={props.initialValues} validationSchema={SubmittedForm} onSubmit={submitForm}>
      {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
          <div className={submitCount ? (errors.description ? 'has-error ' : 'has-success') : ''}>
            <label htmlFor="description">Description </label>
            <Field name="description" type="text" id="description" placeholder="Enter Description" className="form-input" />
          </div>
        
          <button type="submit" className="btn btn-primary !mt-6">
          Submit Form
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default FormEditRole;
