import { useState } from 'react';

// FormDynamicPopup.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import IconForm from './iconForm';

type FormDynamicPopupProps = {
  fields?: any;
  initialValues?: any;
  onSubmit: (value: any) => void;
  eventdata?: any;
  onClose?: () => void;
};
const FormDynamicPopup = (props: FormDynamicPopupProps) => {

  const onSubmitFormDynamic = (data: any) => {
    props.onSubmit(data);
};

  return (
    <Formik initialValues={props.initialValues} validationSchema={Yup.object().shape({})}  onSubmit={onSubmitFormDynamic}> 
     {props.fields && (    <Form className="space-y-5">
          {props.fields.map((field: any) => (
            <div key={field.key}>
             

              {field.type === 'radio' ? (
                // Render radio buttons
                <div>
                {  
                    <div key={field.key} className="flex items-center cursor-pointer">
                      <Field type="radio" id={field.key} name={field.name} value={field.id.toString()} className="form-radio" />
                      <label htmlFor={field.key} className="text-white-dark m-0">{field.label}</label>
                    </div>

                }

       
                  {/* <div  >
                    <label className="flex items-center cursor-pointer" htmlFor={field.key}  >
                      <input type="radio" className="form-radio" id={field.key} name={field.name} value={field.id} />
                      <span className="text-white-dark" >Toggle this custom radio {field.label}</span>
                    </label>
                  </div> */}
                </div>
              ) : (
                // Render other input types (e.g., text, number, email)
                <div className="relative text-white-dark">
                  <Field name={field.name} type={field.inputType} component={field.component} className="form-input ps-10 placeholder:text-white-dark" />
                  <IconForm nameIcon={field.name} />
                </div>
              )}

              <ErrorMessage name={field.name} className="text-danger mt-1" component="div" />
            </div>
          ))}
          <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
            Submit
          </button>

        </Form>
      
                    
                )}
    
    </Formik>
  );
};

export default FormDynamicPopup;
