import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCertificates } from '../../../../Redux/certificate/actions';
import { RootState } from '../../../../Redux/store';

interface User {
    firstname: string;
}

interface Certificate {
    CertificateId: number;
    User: User;
    CertificateName: string;
}

const CertificateDisplay = () => {
    const dispatch = useDispatch();

    const {
        ListCertificates = [],
        loading,
        error,
    } = useSelector((state: RootState) => ({
        ListCertificates: state.certificate?.ListCertificates || [],
        loading: state.certificate?.loading || false,
        error: state.certificate?.error || null,
    }));

    useEffect(() => {
        dispatch(GetAllCertificates());
    }, [dispatch]);

    const handlePrint = (certificateId: number) => {
        const printContent = document.getElementById(`certificate-${certificateId}`)?.innerHTML || '';
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (ListCertificates.length === 0) {
        return <div>No certificates available.</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 w-full">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl">
                <h1 className="text-center text-2xl mb-5">User Certificates</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {ListCertificates.map((certificate: Certificate) => (
                        <div key={certificate.CertificateId} className="bg-white p-5 rounded-lg shadow-lg certificate">
                            <div id={`certificate-${certificate.CertificateId}`} className="text-center mt-16">
                                <h1 className="text-4xl font-bold mt-2">{certificate.User.firstname}</h1>
                                <h2 className="text-3xl font-bold mt-2">{certificate.CertificateName}</h2>
                                {/* Add additional certificate content here */}
                            </div>
                            <button onClick={() => handlePrint(certificate.CertificateId)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                                Print Certificate
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificateDisplay;
