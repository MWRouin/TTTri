import React, { useState } from 'react';
import { AiTwotoneSafetyCertificate } from 'react-icons/ai';
import { LiaCertificateSolid } from 'react-icons/lia';
import { BiSolidCertification } from "react-icons/bi";

const CertificateGenerator = () => {
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [organizerName, setOrganizerName] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);

    const handleGenerate = () => {
        if (name !== '') {
            setShowCertificate(true);
        } else {
            alert('Input field is empty.');
        }
    };

    const handleDownload = () => {
        if (name !== '') {
            const printContent = document.getElementById('certificate')!.innerHTML;
            const originalContent = document.body.innerHTML;
            document.body.innerHTML = printContent;
            window.print();
            document.body.innerHTML = originalContent;
            window.location.reload();
        } else {
            alert('Input field is empty.');
        }
    };

    const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();

        return `${dd}/${mm}/${yyyy}`;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 w-full border-2">
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h1 className="text-center text-2xl mb-5">E-Certificate Creator Form</h1>
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-2">Entrez Votre Nom</label>
                    <input type="text" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name...." required />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-2">Enter Certificate Details</label>
                    <input type="text" className="w-full p-2 border rounded" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Enter Your Certificate Details...." />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-2">Le Nom de L'Oganisation*</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={organizerName}
                        onChange={(e) => setOrganizerName(e.target.value)}
                        placeholder="Enter Your Certificate Organizer Name...."
                        required
                    />
                </div>
                <div className="flex space-x-4">
                    <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleGenerate}>
                        Generate E-Certificate
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleDownload}>
                        Download E-Certificate
                    </button>
                </div>
            </div>
            {showCertificate && (
                <div className="w-3/4 h-[80vh] border-[1px] border-dark p-0 bg-white mt-10" id="certificate">
                    <div className="w-full bg-[#FFC300] h-[35%] rounded-b-[100%] flex justify-center">
                        <div className="w-full bg-dark h-[90%] rounded-b-[100%] flex flex-col">
                            <div className="w-full flex justify-center mt-7">
                                <div className="flex flex-col justify-center gap-5">
                                    <div className="flex items-center self-center">
                                        <div className="flex w-10 h-10">
                                            <span>
                                                {/* <AiTwotoneSafetyCertificate className="w-10 h-10" /> */}
                                            </span>
                                        </div>
                                        <div className="text-white text-lg font-semibold flex">
                                            {/* <span className="">Error Makes Clever</span> */}
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <span className="text-8xl font-serif text-[#FFC300]">CERTIFICATE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex">
                                <div className="absolute ml-[100px] text-[#FFC300] mt-[-45px] z-10">
                                    <BiSolidCertification className="w-[11rem] h-[11rem]" />
                                </div>
                                <div className="absolute text-orange-300 ml-[85px] mt-[-39px]">
                                    <LiaCertificateSolid className="w-[13.1rem] h-[13.1rem]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <img src="public/assets/images/Triweb.jpg" alt="Logo" className="mx-auto mb-5" style={{ maxWidth: '100px' }} />
                        <p className="text-xl font-bold">Ce Certificat Est Présenté à</p>
                        <h1 className="text-4xl font-bold mt-2">{name}</h1>
                        <p className="text-lg font-semibold mt-4">A Terminé Avec Succès Le</p>
                        <h2 className="text-3xl font-bold mt-2">{details}</h2>
                        <p className="mt-4">Ce Certificat Atteste De La Réussite Du {details}.</p>
                        <p className="mt-6 font-semibold">{organizerName}</p>
                        <div className="flex justify-between mt-8 px-10">
                            <p className="text-left">Date D'émission: {getCurrentDate()}</p>
                            <p className="text-right">Directeur Général<br />Nom</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificateGenerator;
