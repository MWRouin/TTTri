import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSections } from '../../../../Redux/actions';
import SessionList from './SessionList';
import { FaChevronUp } from 'react-icons/fa';

export default function SectionList({ setSelectedSession, courseId }: any) {
    const sections = useSelector((state: any) => state.Section.ListSections);
    const dispatch = useDispatch();
    const [activeSection, setActiveSection] = useState<number | null>(null);

    useEffect(() => {
        dispatch(getAllSections());
    }, [dispatch]);

    const toggleSections = (sectionId: number) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    return (
        <div className="w-full ">
            {sections
                .filter((item: any) => Number(item.courseId) === Number(courseId))
                .map((section: any, index: number) => (
                    <div key={index} className="border-t border-b w-full flex flex-col bg-gray-100">
                        <div className="flex items-center pl-4 text-lg font-extrabold py-3 px-2 cursor-pointer" onClick={() => toggleSections(section.sectionId)}>
                            <div className="flex-1">{`section ${index + 1} : ${section.title}`}</div>
                            <button className="p-2 text-xs">{activeSection === section.sectionId ? <FaChevronUp className="transition" /> : <FaChevronUp className="rotate-180 transition" />}</button>
                        </div>
                        {activeSection === section.sectionId && <SessionList sectionId={section.sectionId} setSelectedSession={setSelectedSession} />}
                    </div>
                ))}
        </div>
    );
}
