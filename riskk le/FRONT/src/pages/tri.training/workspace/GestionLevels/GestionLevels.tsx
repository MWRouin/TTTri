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
import { useSelector } from 'react-redux';
import FormEditLevel from './FormEditLevel';
import { AddLevel, DeleteLevel, GetAllLevels, UpdateLevel } from '../../../../Redux/actions';

const GestionLevels = () => {
  const dispatch = useDispatch();
  const [contactList, setContactList] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>(contactList);
  const [addContactModal, setAddContactModal] = useState<any>(false);
  const [value, setValue] = useState<any>('list');
  const [search, setSearch] = useState<any>('');
  const [LevelToDelete, setLevelToDelete] = useState<any>(null);
  const [LevelToUpdate, setLevelToUpdate] = useState<any>({});
  const [isBlockNotificationOpen, setIsBlockNotificationOpen] = useState(false);

  const { userConnected, ListLevels } = useSelector((state: any) => ({
    userConnected: state.Auth.user,
    ListLevels: state.Level.ListLevels,
  }));
  const GetAllLevelsAction = () => {
    dispatch(GetAllLevels());
  };
  useEffect(() => {
    dispatch(setPageTitle('Gestion Levels'));
    GetAllLevelsAction();
  }, []);

  useEffect(() => {
    setContactList(ListLevels);
  }, [ListLevels]);


  useEffect(() => {
    console.log('test3 : ', filteredItems);
  }, [filteredItems]);

  useEffect(() => {}, [userConnected]);

  useEffect(() => {
    setFilteredItems(() => {
      return contactList.filter((item: any) => {
        return item.description.toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [search, contactList]);

  const deleteLevel = (Level: any) => {
    setLevelToDelete(Level);
    setIsBlockNotificationOpen(true);
  };

  const confirmDelete = () => {
    if (LevelToDelete) {
      dispatch(DeleteLevel(LevelToDelete.levelId));
      showMessage('Level has been deleted successfully.');
      setLevelToDelete(null);
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
    setLevelToDelete(null); 
  };

  const SubmitLevel = (data: any) => {
    console.log('data.levelId');
    console.log(data.levelId);
    if (data.levelId !== null && data.levelId !== undefined) {
      console.log('UpdateLevel');
      console.log(data);
      dispatch(UpdateLevel(data));
    } else {
      dispatch(AddLevel(data));
      console.log('AddLevel');
      console.log(data);
    }

    setAddContactModal(false);
  };
  const editLevel = (Level: any = null) => {
    if (Level) {
      setLevelToUpdate(Level);
    } else {
      setLevelToUpdate({
        description: '',
      });
    }
    setAddContactModal(true);
  };

  const UpdateLevelFnc = (Level: any) => {
    console.log(Level);
    dispatch(UpdateLevel(Level));
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
                      <button type="button" className="btn btn-primary" onClick={() => editLevel()}>
                        <IconUserPlus className="ltr:mr-2 rtl:ml-2" />
                        Add Level
                      </button>
                    </div>
                    <div>
                      <button type="button" className={`btn btn-outline-primary p-2 ${value === 'list' && 'bg-primary text-white'}`} onClick={() => setValue('list')}>
                        <IconListCheck />
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
                          <th>Description</th>
                         
                          <th className="!text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(filteredItems || []).map((Level: any) => (
                          <tr key={Level.levelId}>
                            <td>
                            <div className="flex items-center w-max">
                                {false ? (
                                  <div className="w-max">
                                    <img src={`/assets/images/profile-1.jpeg`} className="h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2" alt="avatar" />
                                  </div>
                                ) : Level.description ? (
                                  <div className="grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold">{Level.description.charAt(0)}</div>
                                ) : (
                                  <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                    <IconUser className="w-4.5 h-4.5" />
                                  </div>
                                )}
                                <div>{Level.description + ' ' }</div>
                              </div>
                            </td>
                         
                            <td>
                              <div className="flex gap-4 items-center justify-center">
                                <button type="button" className="btn btn-sm btn-outline-success" onClick={() => editLevel(Level)}>
                                  Edit
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteLevel(Level)}>
                                  Delete
                                </button>        
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
             

              {LevelToDelete && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Delete Level</div>
                    <div className="p-5 text-center">
                      <div className="text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto">
                        <IconTrashLines className="w-7 h-7 mx-auto" />
                      </div>
                      <div className="sm:w-3/4 mx-auto mt-5">
                        <h4 className="text-xl font-medium mb-4">Are You Sure? 🤔</h4>
                        <div className="text-white-dark">
                          Are you sure you want to delete <strong>{LevelToDelete.description}</strong>
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
                  <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">{LevelToUpdate.LevelId ? 'Edit Level' : 'Add Level'}</div>
                  <div className="p-5">
                    <FormEditLevel initialValues={LevelToUpdate} onSubmit={SubmitLevel} />
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

export default GestionLevels;
