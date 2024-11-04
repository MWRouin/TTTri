import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../../../../components/Icon/IconX';  // Adjust the path as necessary

interface FormClaimProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  params: {
    id?: string;
    title: string;
    tag: string;
    description: string;
  };
  changeValue: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const FormClaim: React.FC<FormClaimProps> = ({ open, onClose, onSave, params, changeValue }) => {
  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog as="div" open={open} onClose={onClose} className="relative z-[51]">
        <Transition.Child
          as={React.Fragment}
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
              as={React.Fragment}
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
                  onClick={onClose}
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
                      <input
                        id="title"
                        type="text"
                        placeholder="Enter Title"
                        className="form-input"
                        value={params.title}
                        onChange={(e) => changeValue(e)}
                      />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="tag">About</label>
                      <select
                        id="tag"
                        className="form-select"
                        value={params.tag}
                        onChange={(e) => changeValue(e)}
                      >
                    
                        <option value="Course">Course</option>
                        <option value="Former">Former</option>
                        <option value="User">User</option>
                        <option value="Platform">Platform</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="description">Description</label>
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
                      <button
                        type="button"
                        className="btn btn-outline-danger w-36"
                        onClick={onClose}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary w-36 ltr:ml-4 rtl:mr-4"
                        onClick={onSave}
                      >
                        {params.id ? 'Update' : 'Add'}
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
  );
};

export default FormClaim;
