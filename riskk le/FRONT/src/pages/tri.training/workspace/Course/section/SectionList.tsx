import React, { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import SubSectionForm from '../session/Session';
import { getAllSections, getAllSessions, updateSession } from '../../../../../Redux/actions';
import { UploadFile } from '../../../../../Redux/File/actions';

interface SectionListProps {
  creatingSubSection: number | null;
  newSubSectionTitle: string;
  isDropdown: boolean;
  isShow: boolean;
  expandedSection: number;
  courseId: number;
  onSubSectionTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancelSubSection: () => void;
  onCreateSubSection: (index: number) => void;
  handleDropdown: () => void;
  handleIsShow: () => void;
  toggleDropdown: (index: number) => void;
}

const SectionList: React.FC<SectionListProps> = ({
  creatingSubSection,
  isDropdown,
  expandedSection,
  isShow,
  courseId,
  handleDropdown,
  onSubSectionTitleChange,
  onCancelSubSection,
  onCreateSubSection,
  handleIsShow,
  toggleDropdown,
}) => {
  const sections = useSelector((state: any) => state.Section.ListSections);
  const sessions = useSelector((state: any) => state.Session.ListSessions);
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');


  const saveFile = async (e: React.ChangeEvent<HTMLInputElement>, session: any) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      await dispatch(UploadFile({ file: selectedFile, fileName: selectedFile.name }));
      dispatch(updateSession({ ...session, url: selectedFile.name }));
    }
  };



  useEffect(() => {
    dispatch(getAllSections());
    dispatch(getAllSessions());
  }, [dispatch]);


  const renderSessions = (sectionId: number) => {
    return sessions
      .filter((session: any) => session.sectionId === sectionId)
      .map((session:any) => (
        <div key={session.sessionId} className="flex flex-col mx-20 mt-4">
          <div className="text-lg pl-4 rounded-lg bg-gray-100 my-2 h-[4rem] flex justify-between items-center">
          {session.title}
            <label className="mx-2 p-3 text-xs text-white cursor-pointer bg-gray-600 rounded-md">
              Add the content
              <input
                type="file"
                className="hidden"
                onChange={(e) => saveFile(e, session)}
              />
            </label>
          </div>
        </div>
      ));
  };

  const renderSection = (section: any) => {
    const { sectionId, title } = section;
    return (
      <div key={sectionId} className="w-4/5 rounded-md border-2 border-black mt-4 p-2">
        <div className="text-lg font-bold">
          <Button
            size="sm"
            className="p-0 bg-gray-200 shadow-none text-black mr-1"
            onClick={() => {
              toggleDropdown(sectionId);
              handleDropdown();
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 2 24 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
          {title}
        </div>
        {expandedSection === sectionId && isDropdown && (
          <>
            {renderSessions(sectionId)}
            {creatingSubSection === sectionId && !isShow && (
              <SubSectionForm
                onCancel={onCancelSubSection}
                isDropdown={isDropdown}
                sectionIndex={sectionId}
                handleIsShow={handleIsShow}
                toggleDropdown={toggleDropdown}
              />
            )}
            {isShow && (
              <div className="flex justify-center items-center gap-2 my-2">
                <div className="flex flex-col justify-center items-center">
                  <h3>Click on the + icon to add lessons to this chapter</h3>
                  <Button
                    className="mt-2 rounded-full"
                    size="sm"
                    onClick={() => {
                      onCreateSubSection(sectionId);
                      handleIsShow();
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return <>{sections.filter((section: any) => section.courseId === courseId).map(renderSection)}</>;
};

export default SectionList;
