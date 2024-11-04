import React, { useState } from 'react';
import Dropdown from '../../../../../components/Dropdown';
import IconChecks from '../../../../../components/Icon/IconChecks';
import IconSquareRotated from '../../../../../components/Icon/IconSquareRotated';
import IconStar from '../../../../../components/Icon/IconStar';
import IconTrashLines from '../../../../../components/Icon/IconTrashLines';
import IconUser from '../../../../../components/Icon/IconUser';

interface ClaimCardProps {
    claim: any; 
    isRtl: boolean;
    setTag: (claim: any, tag: string) => void;
    setProc: (claim: any) => void;
    deleteClaimConfirm: (claim: any) => void;
    setFav: (claim: any) => void;
}

const ClaimCard: React.FC<ClaimCardProps> = ({ claim, isRtl }) => {
    const [claimsList, setClaimList] = useState([
        {
            id: 1,
            user: 'Max Smith',
            thumb: 'profile-16.jpeg',
            title: 'Meeting with Kelly',
            description: 'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.',
            date: '11/01/2020',
            isFav: false,
            tag: 'Course',
        },
       
    ]);

    const defaultParams = { id: null, title: '', description: '', tag: '', user: '', thumb: '' };
    const [isDeleteClaimModal, setIsDeleteClaimModal] = useState<any>(false);
    const [filterdClaimsList, setFilterdClaimsList] = useState<any>([]);
    const [selectedTab, setSelectedTab] = useState<any>('all');
    const [deletedClaim, setDeletedClaim] = useState<any>(null);

    const searchClaims = () => {
        if (selectedTab !== 'fav') {
            if (selectedTab !== 'all' || selectedTab === 'delete') {
                setFilterdClaimsList(claimsList.filter((d) => d.tag === selectedTab));
            } else {
                setFilterdClaimsList(claimsList);
            }
        } else {
            setFilterdClaimsList(claimsList.filter((d) => d.isFav));
        }
    };
    

    const setFav = (note: any) => {
        let list = filterdClaimsList;
        let item = list.find((d: any) => d.id === note.id);
        item.isFav = !item.isFav;

        setFilterdClaimsList([...list]);
        if (selectedTab !== 'all' || selectedTab === 'delete') {
            searchClaims();
        }
    };

    const setProc = (note: any) => {
        let list = filterdClaimsList;
        let item = list.find((d: any) => d.id === note.id);
        item.isProc = !item.isProc;
    
        setFilterdClaimsList([...list]);
        if (selectedTab !== 'all' || selectedTab === 'delete') {
            searchClaims();
        }
    };
      
    const setTag = (note: any, name: string = '') => {
        let list = filterdClaimsList;
        let item = filterdClaimsList.find((d: any) => d.id === note.id);
        item.tag = name;
        setFilterdClaimsList([...list]);
        if (selectedTab !== 'all' || selectedTab === 'delete') {
            searchClaims();
        }
    };
 
    const deleteClaimConfirm = (note: any) => {
        setDeletedClaim(note);
        setIsDeleteClaimModal(true);
    };

 




   
    return (
        <div
            className={`panel pb-12 ${
                claim.tag === 'Course'
                    ? 'bg-primary-light shadow-primary'
                    : claim.tag === 'Former'
                    ? 'bg-warning-light shadow-warning'
                    : claim.tag === 'User'
                    ? 'bg-info-light shadow-info'
                    : claim.tag === 'Platform'
                    ? 'bg-danger-light shadow-danger'
                    : 'dark:shadow-dark'
            }`}
        >
            <div className="min-h-[142px]">
                <div className="flex justify-between">
                    <div className="flex items-center w-max">
                        <div className="flex-none">
                            {claim.thumb && (
                                <div className="p-0.5 bg-gray-300 dark:bg-gray-700 rounded-full">
                                    <img className="h-8 w-8 rounded-full object-cover" alt="img" src={`/assets/images/${claim.thumb}`} />
                                </div>
                            )}
                            {!claim.thumb && claim.user && (
                                <div className="grid place-content-center h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 text-sm font-semibold">
                                    {claim.user.charAt(0) + '' + claim.user.charAt(claim.user.indexOf('') + 1)}
                                </div>
                            )}
                            {!claim.thumb && !claim.user && (
                                <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-2">
                                    <IconUser className="w-4.5 h-4.5" />
                                </div>
                            )}
                        </div>
                        <div className="ltr:ml-2 rtl:mr-2">
                            <div className="font-semibold">{claim.user}</div>
                            <div className="text-sx text-white-dark">{claim.date}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold mt-4">{claim.title}</h4>
                    <p className="text-white-dark mt-2">{claim.description}</p>
                </div>
            </div>
            <div className="absolute bottom-5 left-0 w-full px-5">
                <div className="flex items-center justify-between mt-2">
                    <div className="dropdown fdfdf">
                        <Dropdown
                            offset={[0, 5]}
                            placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                            btnClassName={`${
                                claim.tag === 'Course'
                                    ? 'text-primary'
                                    : claim.tag === 'Former'
                                    ? 'text-warning'
                                    : claim.tag === 'User'
                                    ? 'text-info'
                                    : claim.tag === 'Platform'
                                    ? 'text-danger'
                                    : ''
                            }`}
                            button={
                                <span>
                                    <IconSquareRotated
                                        className={
                                            claim.tag === 'Course'
                                                ? 'fill-primary'
                                                : claim.tag === 'Former'
                                                ? 'fill-warning'
                                                : claim.tag === 'User'
                                                ? 'fill-info'
                                                : claim.tag === 'Platform'
                                                ? 'fill-danger'
                                                : ''
                                        }
                                    />
                                </span>
                            }
                        >
                            <ul className="text-sm font-medium">
                                <li>
                                    <button type="button" onClick={() => setTag(claim, 'Course')}>
                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-primary text-primary" />
                                        Course
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setTag(claim, 'Former')}>
                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-warning text-warning" />
                                        Former
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setTag(claim, 'User')}>
                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-info text-info" />
                                        User
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setTag(claim, 'Platform')}>
                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-danger text-danger" />
                                        Platform
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>
                    <div className="flex items-center">
                        <button type="button" className="text-warning group ltr:ml-2 rtl:mr-2" onClick={() => setProc(claim)}>
                            <IconChecks className={`w-4.5 h-4.5 group-hover:fill-warning ${claim.isProc && 'fill-warning'}`} />
                        </button>
                        <button type="button" className="text-danger" onClick={() => deleteClaimConfirm(claim)}>
                            <IconTrashLines />
                        </button>
                        <button type="button" className="text-warning group ltr:ml-2 rtl:mr-2" onClick={() => setFav(claim)}>
                            <IconStar className={`w-4.5 h-4.5 group-hover:fill-warning ${claim.isFav && 'fill-warning'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimCard;
