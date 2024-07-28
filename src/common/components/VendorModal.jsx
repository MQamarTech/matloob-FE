import { apiEndpoints, usePostMutation } from '@services';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const VendorModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    type: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSuccess = () => {
    toast.success('Vendor created successfully');
  };

  const onError = () => {
    toast.error('Something went wrong!');
  };

  const { mutate: createVendor } = usePostMutation(apiEndpoints?.VENDOR, onSuccess, onError);
  const handleSubmit = () => {
    console.log(form);
    createVendor({ payload: form });
    onClose();
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-[rgba(240,248,255,1)] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-[rgba(35,87,117,255)] px-4 py-2 text-base font-medium text-white">
            <h3 className="text-lg font-semibold">Add Vendor</h3>
            <button type="button" className="absolute top-2 right-2 text-white hover:text-gray-300" onClick={onClose}>
              &times;
            </button>
          </div>
          <form className="px-4 py-4 sm:px-6 sm:py-6" onSubmit={e => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                >
                  <option value="hotel">Hotel</option>
                  <option value="ticket">Ticket</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-[rgba(35,87,117,255)] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[rgba(35,87,117,255)] focus:outline-none focus:ring-2 focus:ring-[rgba(35,87,117,255)] focus:ring-offset-2 sm:text-sm"
                onClick={handleSubmit}
              >
                Add
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorModal;
