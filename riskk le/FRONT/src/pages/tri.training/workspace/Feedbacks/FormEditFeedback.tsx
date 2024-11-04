import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';

import { AddCategorie, UpdateCategorie } from '../../../../Redux/categorie/actions';
import { UploadFile } from '../../../../Redux/File/actions';
import { useDispatch, useSelector } from 'react-redux';
import Star from './Rating/Start';
import { UpdateFeedback } from '../../../../Redux/feedback/actions';

interface FormEditFeedbackProps {
    initialValues?: any;
    onsubmit: () => void;
}

const FormEditFeedback = (props: FormEditFeedbackProps) => {
    const [rating, setRating] = useState<number | null>(null);
    const dispatch = useDispatch();

    const badWords = [
        'arse',
        'arsehole',
        'as useful as tits on a bull',
        'balls',
        'bastard',
        'beaver',
        'beef curtains',
        'bell',
        'bellend',
        'bent',
        'berk',
        'bint',
        'bitch',
        'blighter',
        'blimey',
        "blimey o'reilly",
        'bloodclaat',
        'bloody',
        'bloody hell',
        'blooming',
        'bollocks',
        'bonk',
        'bugger',
        'bugger me',
        'bugger off',
        'built like a brick shit-house',
        'bukkake',
        'bullshit',
        'cack',
        'cad',
        'chav',
        'cheese eating surrender monkey',
        'choad',
        'chuffer',
        'clunge',
        'cobblers',
        'cock',
        'cock cheese',
        'cock jockey',
        'cock-up',
        'cocksucker',
        'cockwomble',
        'codger',
        'cor blimey',
        'corey',
        'cow',
        'crap',
        'crikey',
        'cunt',
        'daft',
        'daft cow',
        'damn',
        'dick',
        'dickhead',
        'did he bollocks!',
        'did i fuck as like!',
        'dildo',
        'dodgy',
        'duffer',
        'fanny',
        'feck',
        'flaps',
        'fuck',
        'fuck me sideways!',
        'fucking cunt',
        'fucktard',
        'gash',
        'ginger',
        'git',
        'gob shite',
        'goddam',
        'gorblimey',
        'gordon bennett',
        'gormless',
        'he’s a knob',
        'hell',
        'hobknocker',
        "I'd rather snort my own cum",
        'jesus christ',
        'jizz',
        'knob',
        'knobber',
        'knobend',
        'knobhead',
        'ligger',
        "like fucking a dying man's handshake",
        'mad as a hatter',
        'manky',
        'minge',
        'minger',
        'minging',
        'motherfucker',
        'munter',
        'muppet',
        'naff',
        'nitwit',
        'nonce',
        'numpty',
        'nutter',
        'off their rocker',
        'penguin',
        'pillock',
        'pish',
        'piss off',
        'piss-flaps',
        'pissed',
        'pissed off',
        'play the five-fingered flute',
        'plonker',
        'ponce',
        'poof',
        'pouf',
        'poxy',
        'prat',
        'prick',
        'prick',
        'prickteaser',
        'punani',
        'punny',
        'pussy',
        'randy',
        'rapey',
        'rat arsed',
        'rotter',
        'rubbish',
        'scrubber',
        'shag',
        'shit',
        'shite',
        'shitfaced',
        'skank',
        'slag',
        'slapper',
        'slut',
        'snatch',
        'sod',
        'sod-off',
        'son of a bitch',
        'spunk',
        'stick it up your arse!',
        'swine',
        'taking the piss',
        'tart',
        'tits',
        'toff',
        'tosser',
        'trollop',
        'tuss',
        'twat',
        'twonk',
        'u fukin wanker',
        'wally',
        'wanker',
        'wankstain',
        'wazzack',
        'whore',
    ];

    const validateFeedbackText = (value?: string) => {
        if (!value) return true;
        const foundBadWords = badWords.filter((word) => value.toLowerCase().includes(word.toLowerCase()));
        return foundBadWords.length === 0;
    };

    // Validation schema
    const SubmittedForm = Yup.object().shape({
        feedBackText: Yup.string().required('Description is required').test('no-bad-words', 'Your feedback contains inappropriate language.', validateFeedbackText),
        rating: Yup.number().required('Rating is required').min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
    });

    return (
        <Formik
            initialValues={props.initialValues}
            validationSchema={SubmittedForm}
            onSubmit={(values, { resetForm }) => {
                try {
                    console.log('values', values);
                    dispatch(UpdateFeedback(values));
                    resetForm();
                    props.onsubmit();
                    Swal.fire('Success', 'Feedback updated successfully!', 'success');
                } catch (error) {
                    console.error('Error updating feedback:', error);
                    Swal.fire('Error', 'Failed to update feedback', 'error');
                }
            }}
        >
            {/* Form JSX goes here */}

            {({ errors, touched, setFieldValue, submitCount }) => (
                <Form className="space-y-5">
                    {/* Feedback text Field */}
                    <div className={submitCount && errors.feedBackText ? 'has-error' : submitCount ? 'has-success' : ''}>
                        <label htmlFor="text">FeedBack Text</label>
                        <Field name="feedBackText" type="text" id="feedBackText" placeholder="Enter feedBackText" className="form-input" />
                        {/* Ensure the error is a string before rendering */}
                        {touched.feedBackText && typeof errors.feedBackText === 'string' && <div className="error">{errors.feedBackText}</div>}
                    </div>

                    {/* Rating Field */}
                    <div className={submitCount && errors.rating ? 'has-error' : submitCount ? 'has-success' : ''}>
                        <label>Rating</label>

                        <div className="flex space-x-1 w-20">
                            {Array.from({ length: 5 }, (_, index) => (
                                <Star
                                    key={index}
                                    filled={rating ? index < rating : index < props.initialValues.rating}
                                    onClick={() => {
                                        setRating(index + 1);
                                        setFieldValue('rating', index + 1);
                                    }}
                                />
                            ))}
                        </div>
                        {touched.rating && typeof errors.rating === 'string' && <div className="error">{errors.rating}</div>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary !mt-6">
                        Submit Form
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormEditFeedback;
