import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSessions } from '../../../../Redux/actions';
import IconVideo from '../../../../components/Icon/IconVideo';
import IconFile from '../../../../components/Icon/IconFile';

interface SessionListProps {
    sectionId: number;
    setSelectedSession: (session: any) => void;
}

export default function SessionList({ sectionId, setSelectedSession }: SessionListProps) {
    const sessions = useSelector((state: any) => state.Session.ListSessions);
    const dispatch = useDispatch();

    const renderFile = (fileUrl: string) => {
        const extension = fileUrl.split('.').pop();
        if (extension) {
            switch (extension.toLowerCase()) {
                case 'mp4':
                case 'webm':
                case 'ogg':
                    return <IconVideo className="w-5" />;
                case 'pdf':
                    return <IconFile className="w-4" />;
                default:
                    return <p>Unsupported file format</p>;
            }
        }
    };

    useEffect(() => {
        dispatch(getAllSessions());
    }, [dispatch]);

    const filteredSessions = sessions.filter((session: any) => session.sectionId === sectionId);
    return (
        <div className="bg-white mb-4">
            {filteredSessions.map((session: any) => (
                <div key={session.sessionId} className="border-b w-full h-[3rem] flex items-center pl-4 text-lg font-semibold py-8">
                    <button onClick={() => setSelectedSession(session)}>
                        <div className="flex gap-3 items-center">
                            {session.url && renderFile(session.url)}

                            {session.title}
                        </div>
                        <p className="opacity-60 text-sm ml-10 ">{session.duration} min</p>
                    </button>
                </div>
            ))}
        </div>
    );
}
