import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface VideoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, imageUrl, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="group cursor mx-2 overflow-hidden rounded-lg bg-white shadow-lg duration-200 hover:-translate-y-2 w-40 sm:w-48 md:w-56">
        <div className="h-24 sm:h-32 md:h-40 overflow-hidden">
          <img
            src={imageUrl}
            className="group-hover:scale-110 h-full w-full object-cover duration-200"
            alt="video thumbnail"
          />
        </div>
        <div className="bg-white px-3 py-4">
          <h5 className="group-hover:text-indigo-600 mb-2 text-sm font-bold">{title}</h5>
          <p className="mb-4 text-xs text-gray-600">{description}</p>
          <button onClick={openModal} className="group text-sm font-bold focus:text-indigo-600 hover:text-indigo-600">
            <span>▷</span>
            <span className="underline">Watch Now</span>
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <iframe
                      width="100%"
                      height="315"
                      src={link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default VideoCard;
