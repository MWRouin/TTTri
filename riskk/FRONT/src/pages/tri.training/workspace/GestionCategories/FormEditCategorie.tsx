import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';

import { AddCategorie, UpdateCategorie } from '../../../../Redux/categorie/actions';
import { UploadFile } from '../../../../Redux/File/actions';
import { useDispatch, useSelector } from 'react-redux';

interface FormEditCategorieProps {
    initialValues?: any;
    onsubmit: () => void;
}

const FormEditCategorie = (props: FormEditCategorieProps) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const dispatch = useDispatch();

    // Validation schema
    const SubmittedForm = Yup.object().shape({
        description: Yup.string().required('Description is required'),
        image: Yup.mixed().required('Image is required').nullable(),
    });

    // Handle file selection and preview
    const handleFileChange = (event: any, setFieldValue: any) => {
        const file = event.currentTarget.files[0];
        setFieldValue('image', file);

        // Preview the image
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result as string);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <Formik
            initialValues={props.initialValues}
            validationSchema={SubmittedForm}
            onSubmit={async (values, { resetForm }) => {
                const file = values.image;

                if (file) {
                    try {
                        if (file.name) {
                            dispatch(UploadFile({ file, fileName: file.name }));
                        }

                        const categoryData = {
                            description: values.description,
                            image: file.name ?? file,
                        };

                        if (values.categorieId) {
                            dispatch(UpdateCategorie({ ...categoryData, categorieId: values.categorieId }));
                        } else {
                            dispatch(AddCategorie(categoryData));
                        }
                        props.onsubmit()
                        resetForm();
                    } catch (error) {
                        console.error('Error submitting the form:', error);
                    }
                }
            }}
        >
            {/* Form JSX goes here */}

            {({ errors, touched, setFieldValue, submitCount }) => (
                <Form className="space-y-5">
                    {/* Description Field */}
                    <div className={submitCount && errors.description ? 'has-error' : submitCount ? 'has-success' : ''}>
                        <label htmlFor="description">Description</label>
                        <Field name="description" type="text" id="description" placeholder="Enter Description" className="form-input" />
                        {/* Ensure the error is a string before rendering */}
                        {touched.description && typeof errors.description === 'string' && <div className="error">{errors.description}</div>}
                    </div>

                    {/* Image Upload Field */}
                    <div className={submitCount && errors.image ? 'has-error' : submitCount ? 'has-success' : ''}>
                        <label htmlFor="image">Image</label>
                        <input type="file" id="image" name="image" accept="image/*" className="form-input" onChange={(event) => handleFileChange(event, setFieldValue)} />
                        {/* Ensure the error is a string before rendering */}
                        {touched.image && typeof errors.image === 'string' && <div className="error">{errors.image}</div>}
                    </div>

                    {/* Image Preview (Optional) */}
                    {imagePreview && (
                        <div className="mt-4">
                            <label>Preview:</label>
                            <img src={imagePreview} alt="Image Preview" className="w-24 h-24 object-cover" />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary !mt-6">
                        Submit Form
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormEditCategorie;
