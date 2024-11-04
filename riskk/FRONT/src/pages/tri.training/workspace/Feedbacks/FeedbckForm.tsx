import React, { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import Rating from './Rating/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { AddFeedback } from '../../../../Redux/feedback/actions';

const FeedbackForm = ({ feedback, setFeedback, averageRating }: any) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleOpen = () => setOpen((cur) => !cur);

    const handleSubmit = () => {
        dispatch(AddFeedback(feedback));
        setOpen(false);
    };

    const handleFeedbackTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback((state: any) => {
            return { ...state, feedbackText: e.target.value };
        });
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center z-40 backdrop-blur-sm">
                    <div className="rounded-lg w-full max-w-md p-4 bg-white">
                        <textarea
                            className="w-full h-32 p-2 border-2 border-black rounded-md resize-none overflow-auto"
                            placeholder="Enter your comments here"
                            onChange={handleFeedbackTextChange}
                        ></textarea>
                        <div className="flex justify-between">
                            <Button onClick={() => setOpen(false)} className="mt-4">
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit} className="mt-4">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            <Rating avgRating={averageRating} />
        </>
    );
};

export default FeedbackForm;
