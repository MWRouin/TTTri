import React, { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { addSession } from '../../../../../Redux/actions';

interface SubSectionFormProps {
  isDropdown: boolean;
  sectionIndex: number;
  onCancel: () => void;
  handleIsShow: () => void;
  toggleDropdown: (index: number) => void;
}

const SubSectionForm: React.FC<SubSectionFormProps> = ({
  isDropdown,
  handleIsShow,
  toggleDropdown,
  sectionIndex,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  


  const handleSave = () => {
    handleIsShow();
    toggleDropdown(sectionIndex);
    dispatch(addSession({ title: title, SectionId: sectionIndex }));
    setTitle(''); // Reset the input field
  };

  return (
    <div className="rounded-md border-2 border-black mt-4 p-2 mx-20">
      {isDropdown && (
        <div className="flex justify-center items-center gap-2 my-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New Section Name"
            className="dark:bg-[#1b2e4b] dark:text-white-light px-6 py-2 w-full focus:outline-none focus:border-transparent"
          />
          <div className="flex justify-end gap-2">
            <Button className="mx-1" onClick={handleSave}>Save</Button>
            <Button className="mx-1" onClick={onCancel}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubSectionForm;
