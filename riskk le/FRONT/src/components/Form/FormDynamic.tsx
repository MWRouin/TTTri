import { useState } from 'react';

// DynamicForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import IconForm from './iconForm';

type FormDynamicProps = {
  formConfig?: any;
  initialValues?: any;

  onSubmit: (value: any, isSubmitting: any) => void;
};

const DynamicForm = (props: FormDynamicProps) => {
  return (
    <Formik initialValues={props.initialValues} validationSchema={Yup.object().shape(props.formConfig.validationSchema)} onSubmit={props.onSubmit}>
      {({ isSubmitting }) => (
        <Form className="space-y-5">
          {props.formConfig.fields.map((field: any) => (
            <div key={field.name}>
              <label>{field.label}</label>
              {/* Render different input types based on field.type */}
              {field.type === 'select' ? (
                // Render select dropdown
                <Field as="select" name={field.name} className="form-input ps-10 placeholder:text-white-dark">
                  <option value="">Select {field.label}</option>
                  {field.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              ) : field.type === 'radio' ? (
                // Render radio buttons
                <div>
                  {field.options.map((option: any) => (
                    <div key={option.value}>
                      <Field type="radio" id={option.value} name={field.name} value={option.value} />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
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
          <button type="submit" disabled={isSubmitting} className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
