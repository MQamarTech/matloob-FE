import React, { useState } from 'react';
import TicketModal from './TicketModal';
import VendorModal from './VendorModal';
import HotelModal from './HotelModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <header>
        <nav className="bg-gray-700">
          <div className="container mx-auto py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-50">RapidTutorials</h1>
            <div className="lg:flex hidden space-x-10">
              <div className="flex items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 000 2h1.528l.364 2.282A1 1 0 006 9h.632l.548 3.288A1 1 0 008 13h6a1 1 0 00.823-.451L16.706 11h3.268l.627-3H17a1 1 0 00-.978 1.217l.34 1.368h-2.17L12.65 9.174A1 1 0 0012 9H7.706l-.341-2.059A1 1 0 007 6H4a1 1 0 00-.99.858l-.364 2.283H2V6a1 1 0 00-1-1H1V4h1z"
                    />
                  </svg>
                </span>
                <select className="bg-gray-700 text-gray-50 border-none outline-none rounded-md p-1">
                  <option>Ticket</option>
                  <option>Type 1</option>
                  <option>Type 2</option>
                </select>
                <button className="bg-yellow-400 text-gray-700 px-2 py-1 rounded-full">Add in Ticket</button>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 10h2V8H9v2zm0 4h2v-2H9v2zm0 4h2v-2H9v2zM6 6h12v12H6V6z"
                    />
                  </svg>
                </span>
                <select className="bg-gray-700 text-gray-50 border-none outline-none rounded-md p-1">
                  <option>Hotel</option>
                  <option>Type 1</option>
                  <option>Type 2</option>
                </select>
                <button className="bg-yellow-400 text-gray-700 px-2 py-1 rounded-full">Add in Hotel</button>
              </div>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-50 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden bg-gray-700">
              <div className="flex flex-col items-start space-y-4 p-4">
                <div className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 4a1 1 0 000 2h1.528l.364 2.282A1 1 0 006 9h.632l.548 3.288A1 1 0 008 13h6a1 1 0 00.823-.451L16.706 11h3.268l.627-3H17a1 1 0 00-.978 1.217l.34 1.368h-2.17L12.65 9.174A1 1 0 0012 9H7.706l-.341-2.059A1 1 0 007 6H4a1 1 0 00-.99.858l-.364 2.283H2V6a1 1 0 00-1-1H1V4h1z"
                      />
                    </svg>
                  </span>
                  <select className="bg-gray-700 text-gray-50 border-none outline-none rounded-md p-1">
                    <option>Ticket</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                  </select>
                  <button className="bg-yellow-400 text-gray-700 px-2 py-1 rounded-full" onClick={openModal}>
                    Add in Ticket
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 10h2V8H9v2zm0 4h2v-2H9v2zm0 4h2v-2H9v2zM6 6h12v12H6V6z"
                      />
                    </svg>
                  </span>
                  <select className="bg-gray-700 text-gray-50 border-none outline-none rounded-md p-1">
                    <option>Hotel</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                  </select>
                  <button className="bg-yellow-400 text-gray-700 px-2 py-1 rounded-full">Add in Hotel</button>
                </div>
              </div>
            </div>
          )}
        </nav>
        <div className="relative h-[350px] overflow-hidden bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-[50%] bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-6 text-5xl font-bold">Heading</h1>
                <h3 className="mb-8 text-3xl font-bold">Subeading</h3>
                <button
                  type="button"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 
      <TicketModal open={true} />

      */}

      <HotelModal open={true} />
      {/* <VendorModal open={true} /> */}
    </div>
  );
};

export default Header;
