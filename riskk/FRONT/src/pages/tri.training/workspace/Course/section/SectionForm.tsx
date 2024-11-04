// components/SectionForm.tsx
import React from 'react';
import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from '../../../../../Redux/section/type';
import { addSection } from '../../../../../Redux/actions';

interface SectionFormProps {
  title: string;
  courseId:number;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
  handleDropdown: () => void;
}

const SectionForm: React.FC<SectionFormProps> = ({ title, onTitleChange, onSave, onCancel, handleDropdown,courseId }) => {
  const section = useSelector((state: any) => state.Section.Section);
  const dispatch=useDispatch();
  const addsetion=(section:Section)=>{
   dispatch(addSection(section))
  }

  return (
    <div className="w-4/5 rounded-md border-2 border-black mt-4 p-2">
      <div className="flex justify-center items-center gap-2 my-2">
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="New Section Name"
          className="dark:bg-[#1b2e4b] dark:text-white-light px-6 py-2 w-full focus:outline-none focus:border-transparent"
        />
        <div className="flex justify-end gap-2">
          <Button className="mx-1" onClick={() => { onSave(); handleDropdown();addsetion({Title:title,courseId:courseId}) }}>Save</Button>
          <Button className="mx-1" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
