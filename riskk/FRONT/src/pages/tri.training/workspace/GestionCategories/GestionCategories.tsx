import { useState, Fragment, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import IconUserPlus from '../../../../components/Icon/IconUserPlus';
import IconListCheck from '../../../../components/Icon/IconListCheck';
import IconSearch from '../../../../components/Icon/IconSearch';
import IconUser from '../../../../components/Icon/IconUser';
import IconX from '../../../../components/Icon/IconX';
import IconTrashLines from '../../../../components/Icon/IconTrashLines';
import FormEditCategorie from './FormEditCategorie';
import { AddCategorie, DeleteCategorie, GetAllCategories, UpdateCategorie } from '../../../../Redux/categorie/actions';
import { UploadFile } from '../../../../Redux/File/actions';

const GestionCategories = () => {
    const dispatch = useDispatch();
    const [contactList, setContactList] = useState<any[]>([]);
    const [addContactModal, setAddContactModal] = useState<any>(false);
    const [viewType, setViewType] = useState<string>('list');
    const [search, setSearch] = useState<string>('');
    const [CategorieToDelete, setCategorieToDelete] = useState<any>(null);
    const [CategorieToUpdate, setCategorieToUpdate] = useState<any>({});
    const [isBlockNotificationOpen, setIsBlockNotificationOpen] = useState(false);

    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;

    const { ListCategories } = useSelector((state: any) => state.Categorie);

    useEffect(() => {
        dispatch(setPageTitle('Gestion Categories'));
        dispatch(GetAllCategories());
    }, [dispatch]);

    useEffect(() => {
        setContactList(ListCategories);
    }, [ListCategories]);

    // Memoize filtered categories
    const filteredItems = useMemo(() => {
        return contactList.filter((item: any) => item.description.toLowerCase().includes(search.toLowerCase()));
    }, [contactList, search]);

    const deleteCategorie = (Categorie: any) => {
        setCategorieToDelete(Categorie);
        setIsBlockNotificationOpen(true);
    };

    const confirmDelete = () => {
        if (CategorieToDelete) {
            dispatch(DeleteCategorie(CategorieToDelete.categorieId));
            showMessage('Categorie has been deleted successfully.');
            setCategorieToDelete(null);
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
        setCategorieToDelete(null);
    };

    const editCategorie = (Categorie: any = null) => {
        if (Categorie) {
            setCategorieToUpdate(Categorie);
        } else {
            setCategorieToUpdate({
                description: '',
                image: '',
            });
        }
        setAddContactModal(true);
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
                                        <button type="button" className="btn btn-primary" onClick={() => editCategorie()}>
                                            <IconUserPlus className="ltr:mr-2 rtl:ml-2" />
                                            Add Category
                                        </button>
                                        <button type="button" className={`btn btn-outline-primary p-2 ${viewType === 'list' && 'bg-primary text-white'}`} onClick={() => setViewType('list')}>
                                            <IconListCheck />
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search Categories"
                                            className="form-input py-2 ltr:pr-11 rtl:pl-11 peer"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                                            <IconSearch className="mx-auto" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {viewType === 'list' && (
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
                                                {filteredItems.map((Categorie: any) => (
                                                    <tr key={Categorie.categorieId}>
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="grid place-content-center h-10 w-10 p-1 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold">
                                                                    {Categorie.image ? (
                                                                        <img
                                                                            src={`${resourcesUrl}/${Categorie?.image}`}
                                                                            alt={Categorie.description}
                                                                            className="w-full h-full object-cover rounded-full"
                                                                        />
                                                                    ) : (
                                                                        Categorie.description.charAt(0)
                                                                    )}
                                                                </div>
                                                                <div>{Categorie.description}</div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-4 items-center justify-center">
                                                                <button type="button" className="btn btn-sm btn-outline-success" onClick={() => editCategorie(Categorie)}>
                                                                    Edit
                                                                </button>
                                                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteCategorie(Categorie)}>
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

                            {CategorieToDelete && (
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Delete Categorie</div>
                                        <div className="p-5 text-center">
                                            <div className="text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto">
                                                <IconTrashLines className="w-7 h-7 mx-auto" />
                                            </div>
                                            <div className="sm:w-3/4 mx-auto mt-5">
                                                <h4 className="text-xl font-medium mb-4">Are You Sure? 🤔</h4>
                                                <div className="text-white-dark">
                                                    Are you sure you want to delete <strong>{CategorieToDelete.name}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center gap-3 p-5 border-t">
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
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        {CategorieToUpdate.categorieId ? 'Edit Category' : 'Add Category'}
                                    </div>
                                    <div className="p-5">
                                        <FormEditCategorie initialValues={CategorieToUpdate} onsubmit={() => setAddContactModal(false)} />
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

export default GestionCategories;
