import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconChecks from '../../../../../components/Icon/IconChecks';
import IconNotes from '../../../../../components/Icon/IconNotes';
import IconNotesEdit from '../../../../../components/Icon/IconNotesEdit';
import IconPlus from '../../../../../components/Icon/IconPlus';
import IconSquareRotated from '../../../../../components/Icon/IconSquareRotated';
import IconStar from '../../../../../components/Icon/IconStar';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllReclaims } from '../../../../../Redux/reclaim/actions';

const ClaimBar = ({setOpen}:any) => {

    const defaultParams = { reclaimId: null, title: '', description: '', tag: '', user: '', thumb: '' };
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));
    const [addContactModal, setAddContactModal] = useState<any>(false);
    const [isShowClaimMenu, setIsShowClaimMenu] = useState<any>(false);
    const claims=useSelector((state:any)=>state.Reclaim.ListReclaims)
    const dispatch=useDispatch()
    const [isViewClaimModal, setIsViewClaimModal] = useState<any>(false);
    const [filterdClaimsList, setFilterdClaimsList] = useState<any>([]);
    const [selectedTab, setSelectedTab] = useState<any>('all');

    const [claimsList, setClaimList] = useState<any>([]);



    const searchClaims = () => {
        if (selectedTab !== 'fav') {
            if (selectedTab !== 'all' || selectedTab === 'delete') {
                setFilterdClaimsList(claimsList.filter((d:any) => d.tag === selectedTab));
            } else {
                setFilterdClaimsList(claimsList);
            }
        } else {
            setFilterdClaimsList(claimsList.filter((d:any) => d.isFav));
        }
    };

    const tabChanged = (type: string) => {
        setSelectedTab(type);
        setIsShowClaimMenu(false);
        searchClaims();
    };

    const editClaim = (claim: any = null) => {
        setIsShowClaimMenu(false);
        const json = JSON.parse(JSON.stringify(defaultParams));
        setParams(json);
        if (claim) {
            let json1 = JSON.parse(JSON.stringify(claim));
            setParams(json1);
        }
        setAddContactModal(true);
    };




    return (
        <div className={`panel p-4 flex-none w-[240px] absolute xl:relative z-10 space-y-4 h-full xl:h-auto hidden xl:block ltr:lg:rounded-r-md ltr:rounded-r-none rtl:lg:rounded-l-md rtl:rounded-l-none overflow-hidden ${isShowClaimMenu ? '!block h-full ltr:left-0 rtl:right-0' : 'hidden shadow'}`}>
            <div className="flex flex-col h-full pb-16">
                <div className="flex text-center items-center">
                    <div className="shrink-0">
                        <IconNotes />
                    </div>
                    <h3 className="text-lg font-semibold ltr:ml-3 rtl:mr-3">Claims</h3>
                </div>

                <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                <PerfectScrollbar className="relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow">
                    <div className="space-y-1">
                        <button
                            type="button"
                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${
                                selectedTab === 'all' && 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]'
                            }`}
                            onClick={() => tabChanged('all')}
                        >
                            <div className="flex items-center">
                                <IconNotesEdit className="shrink-0" />
                                <div className="ltr:ml-3 rtl:mr-3">All Claims</div>
                            </div>
                        </button>
                        <button
                            type="button"
                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${
                                selectedTab === 'fav' && 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]'
                            }`}
                            onClick={() => tabChanged('fav')}
                        >
                            <div className="flex items-center">
                                <IconStar className="shrink-0" />
                                <div className="ltr:ml-3 rtl:mr-3">Urgent</div>
                            </div>
                        </button>
                        <button
                            type="button"
                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${
                                selectedTab === 'Proc' && 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]'
                            }`}
                            onClick={() => tabChanged('Proc')}
                        >
                            <div className="flex items-center">
                                <IconChecks className="shrink-0" />
                                <div className="ltr:ml-3 rtl:mr-3">Processed</div>
                            </div>
                        </button>
                        <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b]"></div>
                        <div className="px-1 py-3 text-white-dark">About</div>
                        <button
                            type="button"
                            className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-primary ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${
                                selectedTab === 'Course' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                            }`}
                            onClick={() => tabChanged('Course')}
                        >
                            <IconSquareRotated className="fill-primary shrink-0" />
                            <div className="ltr:ml-3 rtl:mr-3">Course</div>
                        </button>
                        <button
                            type="button"
                            className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-warning ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${
                                selectedTab === 'Former' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                            }`}
                            onClick={() => tabChanged('Former')}
                        >
                            <IconSquareRotated className="fill-warning shrink-0" />
                            <div className="ltr:ml-3 rtl:mr-3">Former</div>
                        </button>
                        <button
                            type="button"
                            className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-info ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${
                                selectedTab === 'User' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                            }`}
                            onClick={() => tabChanged('User')}
                        >
                            <IconSquareRotated className="fill-info shrink-0" />
                            <div className="ltr:ml-3 rtl:mr-3">User</div>
                        </button>
                        <button
                            type="button"
                            className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-danger ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${
                                selectedTab === 'Platform' && 'ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]'
                            }`}
                            onClick={() => tabChanged('Platform')}
                        >
                            <IconSquareRotated className="fill-danger shrink-0" />
                            <div className="ltr:ml-3 rtl:mr-3">Platform</div>
                        </button>
                    </div>
                </PerfectScrollbar>
            </div>
            <div className="ltr:left-0 rtl:right-0 absolute bottom-0 p-4 w-full">
                <button className="btn btn-primary w-full" type="button" onClick={() =>setOpen(true) }>
                    <IconPlus className="w-5 h-5 ltr:mr-2 rtl:ml-2 shrink-0" />
                    Add Claim
                </button>
            </div>
        </div>
    );
};

export default ClaimBar;
