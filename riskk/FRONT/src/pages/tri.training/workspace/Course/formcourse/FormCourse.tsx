import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AddCourse } from '../../../../../Redux/course/actions';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { UploadFile } from '../../../../../Redux/File/actions';

interface FormValues {
  Title: string;
  description: string;
  file: FileList | null;
}

const initialValue: FormValues = {
  Title: '',
  description: '',
  file: null,
};

const CustomFileInput = ({ field, form }: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue(field.name, event.currentTarget.files);
  };

  return (
    <div>
      <input
        type="file"
        className="form-input"
        multiple
        accept="image/*,.zip,.pdf,.xls,.xlsx,.txt,.doc,.docx"
        onChange={handleChange}
      />
      <ErrorMessage name={field.name} component="div" className="text-red-500" />
    </div>
  );
};

const FormCourse = ({handleOpen}:any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const former=useSelector((state:any)=>state.Auth.user)
  
  const validationSchema = Yup.object({
    Title: Yup.string().required('Course Title is required'),
    description: Yup.string().required('Description is required'),
    file: Yup.mixed().required('File is required'),
  });

  const handleSubmit = (values: FormValues) => {
    const file = values.file && values.file.length > 0 ? values.file[0] : null;
    if(file){
    const courseData = {
      Title: values.Title,
      Description: values.description,
      image: file.name,
      formerId:former.userId,
      date: new Date(),
      isFavorite:false,
      isActive:true

    };
    dispatch( UploadFile({ file, fileName:file.name }))
    dispatch(AddCourse(courseData));
  }
   
    handleOpen();   
  };

  return (
    <div className='bg-white dark:bg-[#0e1726] p-6 rounded-lg shadow-md'>
          <div className="flex ">

      <Formik 
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
           <div className="grid place-items-center  ">
          <Form className="grid gap-5">
            <div className="flex flex-col">
              <Field
                id="Title"
                name="Title"
                type="text"
                className="form-input"
                placeholder="Enter Course's title"
              />
              <ErrorMessage name="Title" component="div" className="text-red-500" />
            </div>

            <div>
              <Field
                type="text"
                name="description"
                id="large-input"
                className="block w-full p-4 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Course's description"
              />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>

            <div className='object-contain'>
              <Field name="file" component={CustomFileInput} />
            </div>

            <div className="flex justify-between items-center flex-wrap gap-4 shrink-0">
              <Button type='button' onClick={ handleOpen}>cancel</Button>
              <Button type='submit' >next</Button>
            </div>
          </Form>
          </div>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default FormCourse;
