import { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import IconUserPlus from '../../../../components/Icon/IconUserPlus';
import IconListCheck from '../../../../components/Icon/IconListCheck';
import IconLayoutGrid from '../../../../components/Icon/IconLayoutGrid';
import IconSearch from '../../../../components/Icon/IconSearch';
import IconUser from '../../../../components/Icon/IconUser';
import IconFacebook from '../../../../components/Icon/IconFacebook';
import IconInstagram from '../../../../components/Icon/IconInstagram';
import IconLinkedin from '../../../../components/Icon/IconLinkedin';
import IconTwitter from '../../../../components/Icon/IconTwitter';
import IconX from '../../../../components/Icon/IconX';
import IconTrashLines from '../../../../components/Icon/IconTrashLines';
import { useRedux } from '../../../../hooks';
import { AddUser, DeleteUser, GetAllUsers, UpdateUser } from '../../../../Redux/actions';
import { useSelector } from 'react-redux';
import { User } from '../../../../Redux/user/type';
import FormEditUser from './FormEditUser';

const GestionUsers = () => {
    const dispatch = useDispatch();
    const [contactList, setContactList] = useState<any[]>([]);
    const [filteredItems, setFilteredItems] = useState<any[]>(contactList);
    const [addContactModal, setAddContactModal] = useState<any>(false);
    const [value, setValue] = useState<any>('list');
    const [search, setSearch] = useState<any>('');
    const [userToDelete, setUserToDelete] = useState<any>(null);
    const [userToBlock, setUserToBlock] = useState<any>(null);
    const [userToUpdate, setUserToUpdate] = useState<any>({});
    const [isBlockNotificationOpen, setIsBlockNotificationOpen] = useState(false);

    const { userConnected, ListUsers } = useSelector((state: any) => ({
        userConnected: state.Auth.user,
        ListUsers: state.User.ListUsers,
    }));
    const GetAllUsersAction = () => {
        dispatch(GetAllUsers());
    };
    useEffect(() => {
        dispatch(setPageTitle('Gesttion Users'));
        GetAllUsersAction();
    }, []);

    useEffect(() => {
        setContactList(ListUsers);
    }, [ListUsers]);

    useEffect(() => {
        setFilteredItems(contactList);
    }, [contactList]);

    useEffect(() => {
        console.log('test3 : ', filteredItems);
    }, [filteredItems]);

    useEffect(() => {}, [userConnected]);

    // useEffect(() => {
    //   setContactList(ListUsers);
    // }, [ListUsers]);

    useEffect(() => {
        setFilteredItems(() => {
            return contactList.filter((item: any) => {
                return item?.firstname?.toLowerCase().includes(search?.toLowerCase());
            });
        });
    }, [search, contactList]);

    const deleteUser = (user: any) => {
        setUserToDelete(user);
        setIsBlockNotificationOpen(true);
    };
    const blockUser = (user: any) => {
        setUserToBlock(user);
        setIsBlockNotificationOpen(true);
    };

    const confirmDelete = () => {
        if (userToDelete) {
            dispatch(DeleteUser(userToDelete.userId));
            showMessage('User has been deleted successfully.');
            setUserToDelete(null);
        }
    };
    const confirmBlock = () => {
        if (userToBlock && userToBlock.etat === 'blocked') {
            dispatch(UpdateUser({ ...userToBlock, etat: '' }));
            showMessage('User has been blocked successfully.');
            setUserToBlock(null);
        } else {
            dispatch(UpdateUser({ ...userToBlock, etat: 'blocked' }));
            showMessage('User has been blocked successfully.');
            setUserToBlock(null);
        }
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

    const closeModal = () => {
        setUserToDelete(null);
    };
    const closeBlockModal = () => {
        setUserToBlock(null);
    };

    const SubmitUser = (data: any) => {
        console.log('data.userId');
        console.log(data.userId);
        if (data.userId !== null && data.userId !== undefined) {
            console.log('UpdateUser');
            console.log(data);
            dispatch(UpdateUser(data));
        } else {
            dispatch(AddUser(data));
            console.log('AddUser');
            console.log(data);
        }

        setAddContactModal(false);
    };
    const editUser = (user: any = null) => {
        if (user) {
            setUserToUpdate(user);
        } else {
            setUserToUpdate({
                email: '',
                firstname: '',
                lastname: '',
                telephone: '',
                password: '',
                roleId: '',
                addresse: '',
            });
        }
        setAddContactModal(true);
    };

    const UpdateUserFnc = (user: any) => {
        console.log(user);
        dispatch(UpdateUser(user));
    };

    return (
        <div className="pt-5 space-y-8">
            <div className="panel">
                <div className="mb-5">
                    <div className="inline-block w-full">
                        <div>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                                    <div className="flex gap-3">
                                        <div>
                                            <button type="button" className="btn btn-primary" onClick={() => editUser()}>
                                                <IconUserPlus className="ltr:mr-2 rtl:ml-2" />
                                                Add User
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'list' && 'bg-primary text-white'}`} onClick={() => setValue('list')}>
                                                <IconListCheck />
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'grid' && 'bg-primary text-white'}`} onClick={() => setValue('grid')}>
                                                <IconLayoutGrid />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input type="text" placeholder="Search Users" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer" value={search} onChange={(e) => setSearch(e.target.value)} />
                                        <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                                            <IconSearch className="mx-auto" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {value === 'list' && (
                                <div className="mt-5 panel p-0 border-0 overflow-hidden">
                                    <div className="table-responsive">
                                        <table className="table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Adresse</th>
                                                    <th>Phone</th>
                                                    <th className="!text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(filteredItems || []).map((usr: any) => (
                                                    <tr key={usr.userId}>
                                                        <td>
                                                            <div className="flex items-center w-max">
                                                                {false ? (
                                                                    <div className="w-max">
                                                                        <img src={`/assets/images/profile-1.jpeg`} className="h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2" alt="avatar" />
                                                                    </div>
                                                                ) : usr.firstname ? (
                                                                    <div className="grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold">
                                                                        {usr.firstname.charAt(0)}
                                                                    </div>
                                                                ) : (
                                                                    <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                                                        <IconUser className="w-4.5 h-4.5" />
                                                                    </div>
                                                                )}
                                                                <div>{usr.firstname + ' ' + usr.lastname}</div>
                                                            </div>
                                                        </td>
                                                        <td>{usr.email}</td>
                                                        <td className="whitespace-nowrap">{usr.addresse}</td>
                                                        <td className="whitespace-nowrap">{usr.telephone}</td>
                                                        <td>
                                                            <div className="flex gap-4 items-center justify-center">
                                                                <button type="button" className="btn btn-sm btn-outline-success" onClick={() => editUser(usr)}>
                                                                    Edit
                                                                </button>
                                                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteUser(usr)}>
                                                                    Delete
                                                                </button>
                                                                {usr?.etat === 'blocked' ? (
                                                                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => blockUser(usr)}>
                                                                        Unblock
                                                                    </button>
                                                                ) : (
                                                                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => blockUser(usr)}>
                                                                        Block
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {value === 'grid' && (
                                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5 w-full">
                                    {filteredItems.map((usr: any) => (
                                        <div className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative" key={usr.userId}>
                                            <div
                                                className="bg-white/40 rounded-t-md bg-center bg-cover p-6 pb-0"
                                                style={{ backgroundImage: `url('/assets/images/notification-bg.png')`, backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }}
                                            >
                                                <img className="object-contain w-4/5 max-h-40 mx-auto" src={`/assets/images/profile-1.jpeg`} alt="contact_image" />
                                            </div>
                                            <div className="px-6 pb-24 -mt-10 relative">
                                                <div className="shadow-md bg-white dark:bg-gray-900 rounded-md px-2 py-4">
                                                    <div className="text-xl">{usr.firstname}</div>
                                                    <div className="text-white-dark">{usr.roleId}</div>
                                                    <div className="flex items-center justify-between flex-wrap mt-6 gap-3">
                                                        <div className="flex-auto">
                                                            <div className="text-info">{usr.addresse}</div>
                                                            <div>Addresse</div>
                                                        </div>
                                                        <div className="flex-auto">
                                                            <div className="text-info">{}</div>
                                                            <div>Following</div>
                                                        </div>
                                                        <div className="flex-auto">
                                                            <div className="text-info">{}</div>
                                                            <div>Followers</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <ul className="flex space-x-4 rtl:space-x-reverse items-center justify-center">
                                                            <li>
                                                                <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                                    <IconFacebook />
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                                    <IconInstagram />
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                                    <IconLinkedin />
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                                    <IconTwitter />
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-6 grid grid-cols-1 gap-4 ltr:text-left rtl:text-right">
                                                    <div className="flex items-center">
                                                        <div className="flex-none ltr:mr-2 rtl:ml-2">Email :</div>
                                                        <div className="truncate text-white-dark">{usr.email}</div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex-none ltr:mr-2 rtl:ml-2">Phone :</div>
                                                        <div className="text-white-dark">{usr.telephone}</div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="flex-none ltr:mr-2 rtl:ml-2">Address :</div>
                                                        <div className="text-white-dark">{usr.password}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex gap-4 absolute bottom-0 w-full ltr:left-0 rtl:right-0 p-6">
                                                <button type="button" className="btn btn-outline-primary w-1/2" onClick={() => UpdateUserFnc(usr)}>
                                                    Edit
                                                </button>
                                                <button type="button" className="btn btn-outline-danger w-1/2" onClick={() => deleteUser(usr)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {userToDelete && (
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Delete User</div>
                                        <div className="p-5 text-center">
                                            <div className="text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto">
                                                <IconTrashLines className="w-7 h-7 mx-auto" />
                                            </div>
                                            <div className="sm:w-3/4 mx-auto mt-5">
                                                <h4 className="text-xl font-medium mb-4">Are You Sure? 🤔</h4>
                                                <div className="text-white-dark">
                                                    Are you sure you want to delete <strong>{userToDelete.name}</strong>?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center gap-3 p-5 border-t border-[#ebedf2] dark:border-[#1b2e4b]">
                                            <button type="button" className="btn btn-outline-danger" onClick={confirmDelete}>
                                                Delete
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {userToBlock && (
                              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                {/* Header */}
                                <div className="text-lg font-semibold bg-[#fbfbfb] dark:bg-[#121c2c] py-4 px-5 text-gray-800 dark:text-white flex justify-between items-center">
                                  <span>Block User</span>
                                  <button onClick={closeBlockModal} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition">
                                    {/* Replace the close icon here */}
                                    <IconX className="w-5 h-5" />
                                  </button>
                                </div>
                            
                                {/* Modal Content */}
                                <div className="p-6 text-center">
                                  <div className="bg-red-600 text-white ring-4 ring-red-200 p-4 rounded-full w-fit mx-auto">
                                    <IconTrashLines className="w-8 h-8" />
                                  </div>
                            
                                  <div className="mt-6">
                                    <h4 className="text-xl font-medium mb-3">Are You Sure? 🤔</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                      Are you sure you want to {userToBlock?.etat === 'blocked' ? 'unblock' : 'block'}{" "}
                                      <strong>{userToBlock?.name}</strong>?
                                    </p>
                                  </div>
                                </div>
                            
                                {/* Modal Actions */}
                                <div className="flex justify-center items-center gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
                                  <button
                                    type="button"
                                    className="btn bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition duration-200"
                                    onClick={confirmBlock}
                                  >
                                    {userToBlock?.etat === 'blocked' ? 'Unblock' : 'Block'}
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={closeBlockModal}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                            
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Transition appear show={addContactModal} as={Fragment}>
                <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-[51]">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
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
                                        {userToUpdate.userId ? 'Edit User' : 'Add User'}
                                    </div>
                                    <div className="p-5">
                                        <FormEditUser initialValues={userToUpdate} onSubmit={SubmitUser} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default GestionUsers;
