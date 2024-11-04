import PerfectScrollbar from 'react-perfect-scrollbar';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../../../store/themeConfigSlice';
import { IRootState } from '../../../../../Redux/store';
import IconNotes from '../../../../../components/Icon/IconNotes';
import IconNotesEdit from '../../../../../components/Icon/IconNotesEdit';
import Dropdown from '../../../../../components/Dropdown';
import IconChecks from '../../../../../components/Icon/IconChecks';
import IconEye from '../../../../../components/Icon/IconEye';
import IconHorizontalDots from '../../../../../components/Icon/IconHorizontalDots';
import IconMenu from '../../../../../components/Icon/IconMenu';
import IconPencil from '../../../../../components/Icon/IconPencil';
import IconPlus from '../../../../../components/Icon/IconPlus';
import IconSquareRotated from '../../../../../components/Icon/IconSquareRotated';
import IconStar from '../../../../../components/Icon/IconStar';
import IconTrashLines from '../../../../../components/Icon/IconTrashLines';
import IconUser from '../../../../../components/Icon/IconUser';
import IconX from '../../../../../components/Icon/IconX';
import ClaimBar from './ClaimBar';
import FormClaim from './FormClaim';
import { AddClaim, DeleteClaim, GetAllReclaims, UpdateClaim } from '../../../../../Redux/reclaim/actions';


const Claims = () => {
    const dispatch = useDispatch();
    const claims=useSelector((state:any)=>state.Reclaim.ListReclaims)
    const [Listclaims,setListClaims]=useState()
    const userConnected=useSelector((state:any)=>state.Auth.user)
    const defaultParams = { id: null, title: '', description: '', tag: '', user: userConnected.firstname, thumb:`http://localhost:5000/Resources/${userConnected.imageUrl}`  };
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));
    const [addContactModal, setAddContactModal] = useState<any>(false);
    const [isDeleteClaimModal, setIsDeleteClaimModal] = useState<any>(false);
    const [isShowClaimMenu, setIsShowClaimMenu] = useState<any>(false);
    const [isViewClaimModal, setIsViewClaimModal] = useState<any>(false);
    const [filterdClaimsList, setFilterdClaimsList] = useState<any>([{}]);
    const [selectedTab, setSelectedTab] = useState<any>('all');
    const [deletedClaim, setDeletedClaim] = useState<any>(null);
    const [open,setOpen]=useState<any>(false)

    useEffect(() => {
        dispatch(setPageTitle('Claims'));
    });

    const [claimsList, setClaimList] = useState<any>([{}]);
    
    useEffect(()=>{
        dispatch(GetAllReclaims())
       setClaimList(claims)
       console.log(claimsList)
    },[claimsList])
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
    


    
    const saveClaim = () => {
        if (!params.title) {
            showMessage('Title is required.', 'error');
            return false;
        }
        if (params.reclaimId) {
            //update task
            let note: any = claimsList.find((d: any) => d.id === params.reclaimId);
            note.title = params.title;
            note.user = params.user;
            note.description = params.description;
            note.tag = params.tag;
            dispatch(UpdateClaim(note))
        } else {
            //add note
            let maxClaimId = claimsList.reduce((max: any, character: any) => (character.id > max ? character.id : max), claimsList[0].id);
            if (!maxClaimId) {
                maxClaimId = 0;
            }
            let dt = new Date();
            let note = {
                id:params.reclaimId,
                title: params.title,
                user: params.user,
                thumb: params.thumb,
                description: params.description,
                date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
                isFav: false,
                tag: params.tag,
            };

            claimsList.splice(0, 0, note);
            searchClaims();
            dispatch(AddClaim(note))
            console.log(params)
        }
        showMessage('Claim has been saved successfully.');
        setAddContactModal(false);
        searchClaims();
    };

    const tabChanged = (type: string) => {
        setSelectedTab(type);
        setIsShowClaimMenu(false);
        searchClaims();
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

    const changeValue = (e: any) => {
        const { value, id } = e.target;
        setParams({ ...params, [id]: value });
    };

    const deleteClaimConfirm = (note: any) => {
        setDeletedClaim(note);
        setIsDeleteClaimModal(true);
        dispatch(DeleteClaim(note.reclaimId))
    };

    const viewClaim = (note: any) => {
        setParams(note);
        setIsViewClaimModal(true);
    };

    const editClaim = (note: any = null) => {
        setIsShowClaimMenu(false);
        const json = JSON.parse(JSON.stringify(defaultParams));
        setParams(json);
        if (note) {
            let json1 = JSON.parse(JSON.stringify(note));
            setParams(json1);
        }
        setAddContactModal(true);
    };

    const deleteClaim = () => {
        setClaimList(claimsList.filter((d: any) => d.id !== deletedClaim.id));
        searchClaims();
        showMessage('Claim has been deleted successfully.');
        setIsDeleteClaimModal(false);
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    useEffect(() => {
        searchClaims();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [selectedTab, claimsList]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;





    
    return (
        <div>
            <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                <div className={`bg-black/60 z-10 w-full h-full rounded-md absolute hidden ${isShowClaimMenu ? '!block xl:!hidden' : ''}`} onClick={() => setIsShowClaimMenu(!isShowClaimMenu)}></div>
               <ClaimBar setOpen={setOpen}/>

                <div className="panel flex-1 overflow-auto h-full">
                    <div className="pb-5">
                        <button type="button" className="xl:hidden hover:text-primary" onClick={() => setIsShowClaimMenu(!isShowClaimMenu)}>
                            <IconMenu />
                        </button>
                    </div>                   
                    {filterdClaimsList?.length ? (
                        <div className="sm:min-h-[300px] min-h-[400px]">
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                                {filterdClaimsList.map((note: any) => {
                                    return (
      

                                        <div
                                        
                                            className={`panel pb-12 ${
                                                note.tag === 'Course'
                                                    ? 'bg-primary-light shadow-primary'
                                                    : note.tag === 'Former'
                                                    ? 'bg-warning-light shadow-warning'
                                                    : note.tag === 'User'
                                                    ? 'bg-info-light shadow-info'
                                                    : note.tag === 'Platform'
                                                    ? 'bg-danger-light shadow-danger'
                                                    : 'dark:shadow-dark'
                                            }`}
                                            key={note.id}
                                        >
                                            <div className="min-h-[142px]">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center w-max">
                                                        <div className="flex-none">
                                                        {note.thumb && (
                                                                <div className="p-0.5 bg-gray-300 dark:bg-gray-700 rounded-full">
                                                                    <img className="h-8 w-8 rounded-full object-cover" alt="img" src={`${note.thumb}`} />
                                                                </div>
                                                            )}

                                                            {!note.thumb && note.user && (
                                                                <div className="grid place-content-center h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 text-sm font-semibold">
                                                                    {note.user.charAt(0) + '' + note.user.charAt(note.user.indexOf('') + 1)}
                                                                </div>
                                                            )}
                                                            {!note.thumb && !note.user && (
                                                                <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-2">
                                                                    <IconUser className="w-4.5 h-4.5" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="ltr:ml-2 rtl:mr-2">
                                                            <div className="font-semibold">{note.user}</div>
                                                            <div className="text-sx text-white-dark">{note.date}</div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown">
                                                        <Dropdown
                                                            offset={[0, 5]}
                                                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                                            btnClassName="text-primary"
                                                            button={<IconHorizontalDots className="rotate-90 opacity-70 hover:opacity-100" />}
                                                        >
                                                            <ul className="text-sm font-medium">
                                                                <li>
                                                                    <button type="button" onClick={() => editClaim(note)}>
                                                                        <IconPencil className="w-4 h-4 ltr:mr-3 rtl:ml-3 shrink-0" />
                                                                        Edit
                                                                    </button>
                                                                </li>
                                                              
                                                            </ul>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mt-4">{note.title}</h4>
                                                    <p className="text-white-dark mt-2">{note.description}</p>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-5 left-0 w-full px-5">
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="dropdown fdfdf">
                                                        <Dropdown
                                                            offset={[0, 5]}
                                                            placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                                            btnClassName={`${
                                                                note.tag === 'Course'
                                                                    ? 'text-primary'
                                                                    : note.tag === 'Former'
                                                                    ? 'text-warning'
                                                                    : note.tag === 'User'
                                                                    ? 'text-info'
                                                                    : note.tag === 'Platform'
                                                                    ? 'text-danger'
                                                                    : ''
                                                            }`}
                                                            button={
                                                                <span>
                                                                    <IconSquareRotated
                                                                        className={
                                                                            note.tag === 'Course'
                                                                                ? 'fill-primary'
                                                                                : note.tag === 'Former'
                                                                                ? 'fill-warning'
                                                                                : note.tag === 'User'
                                                                                ? 'fill-info'
                                                                                : note.tag === 'Platform'
                                                                                ? 'fill-danger'
                                                                                : ''
                                                                        }
                                                                    />
                                                                </span>
                                                            }
                                                        >
                                                            <ul className="text-sm font-medium">
                                                                <li>
                                                                    <button type="button" onClick={() => setTag(note, 'Course')}>
                                                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-primary text-primary" />
                                                                        Course
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" onClick={() => setTag(note, 'Former')}>
                                                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-warning text-warning" />
                                                                       Former
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" onClick={() => setTag(note, 'User')}>
                                                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-info text-info" />
                                                                        User
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" onClick={() => setTag(note, 'Platform')}>
                                                                        <IconSquareRotated className="ltr:mr-2 rtl:ml-2 fill-danger text-danger" />
                                                                        Platform
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="flex items-center">
                                                                    <button type="button" className="text-warning group ltr:ml-2 rtl:mr-2" onClick={() => setProc(note)}>
                                                                         <IconChecks className={`w-4.5 h-4.5 group-hover:fill-warning ${note.isProc && 'fill-warning'}`} />
                                                                    </button>
                                                                    <button type="button" className="text-danger" onClick={() => deleteClaimConfirm(note)}>
                                                                         <IconTrashLines  />
                                                                    </button>
                                                                    <button type="button" className="text-warning group ltr:ml-2 rtl:mr-2" onClick={() => setFav(note)}>
                                                                         <IconStar className={`w-4.5 h-4.5 group-hover:fill-warning ${note.isFav && 'fill-warning'}`} />
                                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    );
                                })}
                            </div>
                        </div>



                    ) : (
                        <div className="flex justify-center items-center sm:min-h-[300px] min-h-[400px] font-semibold text-lg h-full">No data available</div>
                    )}


                    <Transition appear show={addContactModal} as={Fragment}>
                        <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-[51]">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-[black]/60" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center px-4 py-8">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                            <button
                                                type="button"
                                                onClick={() => setAddContactModal(false)}
                                                className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                            >
                                                <IconX />
                                            </button>
                                            <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                                {params.id ? 'Edit Claim' : 'Add Claim'}
                                            </div>
                                            <div className="p-5">
                                                <form>
                                                    <div className="mb-5">
                                                        <label htmlFor="title">Title</label>
                                                        <input id="title" type="text" placeholder="Enter Title" className="form-input" value={params.title} onChange={(e) => changeValue(e)} />
                                                    </div>                                            
                                                    <div className="mb-5">
                                                        <label htmlFor="tag">About</label>
                                                        <select id="tag" className="form-select" value={params.tag} onChange={(e) => changeValue(e)}>
                                                            <option value="">Course</option>
                                                            <option value="Course">Course</option>
                                                            <option value="Former">Former</option>
                                                            <option value="User">User</option>
                                                            <option value="Platform">Platform</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="desc">Description</label>
                                                        <textarea
                                                            id="description"
                                                            rows={3}
                                                            className="form-textarea resize-none min-h-[130px]"
                                                            placeholder="Enter Description"
                                                            value={params.description}
                                                            onChange={(e) => changeValue(e)}
                                                        ></textarea>
                                                    </div>
                                                    <div className="flex justify-end items-center mt-8">
                                                        <button type="button" className="btn btn-outline-danger gap-2" onClick={() => setAddContactModal(false)}>
                                                            Cancel
                                                        </button>
                                                        <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={saveClaim}>
                                                            {params.id ? 'Update Claim' : 'Add Claim'}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    <Transition appear show={isDeleteClaimModal} as={Fragment}>
                        <Dialog as="div" open={isDeleteClaimModal} onClose={() => setIsDeleteClaimModal(false)} className="relative z-[51]">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-[black]/60" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center px-4 py-8">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                            <button
                                                type="button"
                                                onClick={() => setIsDeleteClaimModal(false)}
                                                className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                            >
                                                <IconX />
                                            </button>
                                            <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Delete Claims</div>
                                            <div className="p-5 text-center">
                                                <div className="text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto">
                                                    <IconTrashLines className="w-7 h-7 mx-auto" />
                                                </div>
                                                <div className="sm:w-3/4 mx-auto mt-5">Are you sure you want to delete Claim?</div>

                                                <div className="flex justify-center items-center mt-8">
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => setIsDeleteClaimModal(false)}>
                                                        Cancel
                                                    </button>
                                                    <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={deleteClaim}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    <Transition appear show={isViewClaimModal} as={Fragment}>
                        <Dialog as="div" open={isViewClaimModal} onClose={() => setIsViewClaimModal(false)} className="relative z-[51]">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-[black]/60" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center px-4 py-8">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                            <button
                                                type="button"
                                                onClick={() => setIsViewClaimModal(false)}
                                                className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                            >
                                                <IconX />
                                            </button>
                                            <div className="flex items-center flex-wrap gap-2 text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                                <div className="ltr:mr-3 rtl:ml-3">{params.title}</div>
                                                {params.tag && (
                                                    <button
                                                        type="button"
                                                        className={`badge badge-outline-primary rounded-3xl capitalize ltr:mr-3 rtl:ml-3 ${
                                                            (params.tag === 'Course' && 'shadow-primary',
                                                            params.tag === 'Former' && 'shadow-warning',
                                                            params.tag === 'User' && 'shadow-info',
                                                            params.tag === 'Platform' && 'shadow-danger')
                                                        }`}
                                                    >
                                                        {params.tag}
                                                    </button>
                                                )}
                                                {params.isFav && (
                                                    <button type="button" className="text-warning">
                                                        <IconStar className="fill-warning" />
                                                    </button>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <div className="text-base">{params.description}</div>

                                                <div className="ltr:text-right rtl:text-left mt-8">
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => setIsViewClaimModal(false)}>
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
                <FormClaim open={open} onClose={()=>setOpen(!open)} onSave={saveClaim} params={params} changeValue={changeValue}/>
            </div>
        </div>
    );
};

export default Claims;
