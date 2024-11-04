import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { GetCourseById } from '../../../../../Redux/actions';
import { Section as sectionType } from '../../../../../Redux/section/type';
import CourseImage from './CourseImage';
import SectionList from './SectionList';
import SectionForm from './SectionForm';
import SubSectionForm from '../session/Session';

const Section: React.FC = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams<{ courseId: string }>();
  const course = useSelector((state: any) => state.Course.Course);
  const sections=useSelector((state:any)=>state.Section.ListSections)
  useEffect(() => {
    const id = Number(courseId);
    dispatch(GetCourseById(id));
   
  }, [dispatch, courseId]);



  const [isCreatingSection, setIsCreatingSection] = useState(false);
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [isDropdown,setIsDropdown]=useState(true)
  const [expandedSection, setExpandedSection] = useState<number >(0);
  const [creatingSubSection, setCreatingSubSection] = useState<number | null>(null);
  const [newSubSectionTitle, setNewSubSectionTitle] = useState('');
  const [isShow,setIsShow]=useState(true)

  const handleNewSectionTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSectionTitle(e.target.value);
  };


  const handleNewSubSectionTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSubSectionTitle(e.target.value);
  };

  const handleAddSection = () => {
    if (newSectionTitle.trim() !== '') {
      const newSection: sectionType = {
        Title: newSectionTitle,
        Description: '',
        IsActive: true,
        courseId: Number(courseId),
      };
      setNewSectionTitle('');
      setIsCreatingSection(false);
    }
  };


  const handleCancelSection = () => {
    setNewSectionTitle('');
    setIsCreatingSection(false);
  };

  const handleCancelSubSection = () => {
    setNewSubSectionTitle('');
    setCreatingSubSection(null);
  };

   const handleDropdown=()=>{
     setIsDropdown(!isDropdown);
   }

   const toggleDropdown = (index: number) => {
    setExpandedSection(index );
  };

  
   const handleIsShow=()=>{
    setIsShow(!isShow)
   }
  return (
    <div className="bg-white dark:bg-[#0e1726] p-6 rounded-lg shadow-md">
      {course && <CourseImage imageUrl={course.image} title={course.title} />}
      
      <div className="flex flex-col justify-center items-center gap-2 mt-20">
        {sections.length === 0 && !isCreatingSection && !isCreatingSession && (
          <>
            <h1 className="text-2xl font-bold">Gather your courses</h1>
            <h3>Create a lesson or chapter to start developing your course</h3>
          </>
        )}

        <SectionList
          creatingSubSection={creatingSubSection}
          newSubSectionTitle={newSubSectionTitle}
          isDropdown={isDropdown}
          isShow={isShow}
          onSubSectionTitleChange={handleNewSubSectionTitleChange}

          onCancelSubSection={handleCancelSubSection}
          onCreateSubSection={setCreatingSubSection}
          handleDropdown={handleDropdown}
          handleIsShow={handleIsShow}
          toggleDropdown={toggleDropdown}
          expandedSection={expandedSection}
          courseId={Number(courseId)}
        />

        {isCreatingSection && (
          <SectionForm
            title={newSectionTitle}
            onTitleChange={handleNewSectionTitleChange}
            onSave={handleAddSection}
            onCancel={handleCancelSection}
            handleDropdown={handleDropdown}
            courseId={Number(courseId)}
          />
        )}

  

        <div className="flex justify-center w-full mt-4">
          {!isCreatingSection && (
            <Button className="mx-2" onClick={() => {setIsCreatingSection(true)
                                                       handleDropdown()
                                                       toggleDropdown(sections.length)
            }}>Add Section</Button>
               
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
