import React, { useEffect, useState } from 'react';
import VendorModal from './VendorModal';
import TicketModal from './TicketModal';
import HotelModal from './HotelModal';
import { apiEndpoints, queryKeys, useGetQuery } from '@services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);
  const [isHotelsOpen, setIsHotelsOpen] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [allVendorsTicket, setAllVendorsTicket] = useState([]);
  const [allVendorsHotel, setAllVendorsHotel] = useState([]);

  const navigate = useNavigate();

  const [vendorType, setVendorType] = useState('');
  const onSuccessHotel = data => {
    if (data) {
      setAllVendorsHotel(Object.values(data?.data));
    }
  };
  const { data: getAllVendorsOFHotel, refetch: refetchAllVendorHotel } = useGetQuery(
    queryKeys?.VENDOR,
    apiEndpoints?.VENDOR,
    { type: 'hotel' },
    { onSuccess: onSuccessHotel }
  );
  const onSuccess = data => {
    if (data?.data) {
      setAllVendorsTicket(Object.values(data?.data));
    }
  };

  const { data: getAllVendorsOFTicket, refetch } = useGetQuery(
    queryKeys?.VENDOR,
    apiEndpoints?.VENDOR,
    { type: 'ticket' },
    { onSuccess }
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTicketsMenu = () => {
    setIsHotelsOpen(false);
    refetch();
    setIsTicketsOpen(!isTicketsOpen);
  };

  const toggleHotelsMenu = () => {
    setIsTicketsOpen(false);
    refetchAllVendorHotel();
    setIsHotelsOpen(!isHotelsOpen);
  };

  const openVandorModal = () => {
    setIsTicketModalOpen(false);
    setIsHotelModalOpen(false);
    setIsVendorModalOpen(true);
  };

  const closeVandorModal = () => {
    setIsVendorModalOpen(false);
  };

  const openTicketModal = () => {
    refetch();
    setIsHotelModalOpen(false);
    setIsVendorModalOpen(false);
    setIsTicketModalOpen(true);
  };

  const closeTicketModal = () => {
    setIsTicketModalOpen(false);
  };

  const openHotelModal = () => {
    refetchAllVendorHotel();
    setIsVendorModalOpen(false);
    setIsTicketModalOpen(false);
    setIsHotelModalOpen(true);
  };

  const closeHotelModal = () => {
    setIsHotelModalOpen(false);
  };

  const handleNavigationTicket = vendorId => {
    navigate(`/tickets/${vendorId}`);
  };

  const handlenavigationHotel = vendorId => {
    navigate(`/hotel/${vendorId}`);
  };

  console.log('hetels are: ', allVendorsHotel);

  return (
    <div>
      <nav className="bg-gray-800 relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items-center">
                  <div className="relative">
                    <button
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={toggleTicketsMenu}
                    >
                      Tickets
                    </button>
                    {isTicketsOpen && (
                      <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                        {allVendorsTicket?.map(vendor => (
                          <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => handleNavigationTicket(vendor?.id)}
                          >
                            {vendor?.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={toggleHotelsMenu}
                    >
                      Hotels
                    </button>
                    {isHotelsOpen && (
                      <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                        {allVendorsHotel?.map(vendor => (
                          <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => handlenavigationHotel(vendor?.id)}
                          >
                            {vendor?.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={openVandorModal}>
                    Add Vendor
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={openTicketModal}>
                    Add Ticket
                  </button>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={openHotelModal}>
                    Add Hotel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <button
                className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={toggleTicketsMenu}
              >
                Tickets
              </button>
              {isTicketsOpen && (
                <div className="pl-4 space-y-1">
                  {allVendorsTicket?.map(vendor => (
                    <div
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={() => handleNavigationTicket(vendor?.id)}
                    >
                      {vendor?.name}
                    </div>
                  ))}
                </div>
              )}
              <button
                className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={toggleHotelsMenu}
              >
                Hotels
              </button>
              {isHotelsOpen && (
                <div className="pl-4 space-y-1">
                  {allVendorsHotel?.map(vendor => (
                    <div
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={() => handlenavigationHotel(vendor?.id)}
                    >
                      {vendor?.name}
                    </div>
                  ))}
                </div>
              )}
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-left"
                onClick={openVandorModal}
              >
                Add Vendor
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full text-left"
                onClick={openTicketModal}
              >
                Add Ticket
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full text-left"
                onClick={openHotelModal}
              >
                Add Hotel
              </button>
            </div>
          </div>
        )}
      </nav>

      {<VendorModal open={isVendorModalOpen} onClose={closeVandorModal} />}
      {<TicketModal vendors={allVendorsTicket} open={isTicketModalOpen} onClose={closeTicketModal} />}
      {<HotelModal vendors={allVendorsHotel} open={isHotelModalOpen} onClose={closeHotelModal} />}
    </div>
  );
};

export default Navbar;
