import { apiEndpoints, queryKeys, useGetQuery, usePostMutation } from '@services';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const TicketModal = ({ vendors, open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    vendor: '',
    date: '',
    childCount: '',
    childRate: '',
    childTotal: '',
    adultCount: '',
    adultRate: '',
    adultTotal: '',
    oldCount: '',
    oldRate: '',
    oldTotal: '',
    totalAmount: '',
    description: '',
    paymentMethod: 'credit',
  });

  const [allVendorsTicket, setAllVendorsTicket] = useState([]);
  const onSuccess = data => {
    toast.success('ticket created successfully');
  };

  const onError = data => {
    toast.error('Something went wrong');
  };

  const { mutate: createTicket } = usePostMutation(apiEndpoints?.TICKETS, onSuccess, onError);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    const childTotal = (parseFloat(form.childCount) || 0) * (parseFloat(form.childRate) || 0);
    const adultTotal = (parseFloat(form.adultCount) || 0) * (parseFloat(form.adultRate) || 0);
    const oldTotal = (parseFloat(form.oldCount) || 0) * (parseFloat(form.oldRate) || 0);

    const totalAmount = childTotal + adultTotal + oldTotal;

    setForm(prevForm => ({
      ...prevForm,
      childTotal: childTotal.toFixed(2),
      adultTotal: adultTotal.toFixed(2),
      oldTotal: oldTotal.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    }));
  }, [form.childCount, form.childRate, form.adultCount, form.adultRate, form.oldCount, form.oldRate]);

  const handleSubmit = () => {
    createTicket({ payload: form });
    onClose();
  };
  console.log('------>', allVendorsTicket);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-[rgba(240,248,255,1)] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-[rgba(35,87,117,255)] px-4 py-2 text-base font-medium text-white">
            <h3 className="text-lg font-semibold">Add Ticket Details</h3>
            <button type="button" className="absolute top-2 right-2 text-white hover:text-gray-300" onClick={onClose}>
              &times;
            </button>
          </div>
          <form className="px-4 py-4 sm:px-6 sm:py-6" onSubmit={e => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">To</label>
                <select
                  name="vendor"
                  value={form.vendor}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                >
                  <option value="">Select a vendor</option>
                  {vendors?.map(vendor => (
                    <option key={vendor.id} value={vendor.id}>
                      {vendor.name}
                    </option>
                  ))}
                </select>
              </div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
              />

              {/* <label className="block text-sm font-medium text-gray-700">Invoice</label>
              <input
                type="text"
                name="invoice"
                value={form.invoice}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
              /> */}

              <div className="border-t border-gray-300 pt-4">
                <h4 className="text-lg font-semibold text-gray-800">Tickets</h4>
                <div className="space-y-4 mt-4">
                  <div>
                    <label className=" text-sm font-medium text-gray-700">Child: </label>
                    <input
                      type="number"
                      name="childCount"
                      value={form.childCount}
                      onChange={handleChange}
                      placeholder="Count"
                      className="m-1 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                    <input
                      type="number"
                      name="childRate"
                      value={form.childRate}
                      onChange={handleChange}
                      placeholder="Rate"
                      className="m-1 rounded-md  border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                    <div>
                      <label className=" text-sm font-medium text-gray-700">Total: </label>
                      <input
                        type="text"
                        name="childTotal"
                        value={form.childTotal}
                        onChange={handleChange}
                        placeholder="Total"
                        className="m-1 rounded-md bg-gray-300 border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <label className=" text-sm font-medium text-gray-700">Adult:</label>
                    <input
                      type="number"
                      name="adultCount"
                      value={form.adultCount}
                      onChange={handleChange}
                      placeholder="Count"
                      className="m-1 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                    <input
                      type="number"
                      name="adultRate"
                      value={form.adultRate}
                      onChange={handleChange}
                      placeholder="Rate"
                      className="m-1 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                    <input
                      type="text"
                      name="adultTotal"
                      value={form.adultTotal}
                      onChange={handleChange}
                      placeholder="Total"
                      className="mt-1 bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className=" text-sm font-medium text-gray-700">Old: </label>
                    <input
                      type="number"
                      name="oldCount"
                      value={form.oldCount}
                      onChange={handleChange}
                      placeholder="Count"
                      className="m-1 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                    <input
                      type="number"
                      name="oldRate"
                      value={form.oldRate}
                      onChange={handleChange}
                      placeholder="Rate"
                      className="m-1 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                    <input
                      type="text"
                      name="oldTotal"
                      value={form.oldTotal}
                      onChange={handleChange}
                      placeholder="Total"
                      className="m-1 rounded-md bg-gray-300 border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Total Amount</label>
                    <input
                      type="text"
                      name="totalAmount"
                      value={form.totalAmount}
                      onChange={handleChange}
                      placeholder="Total Amount"
                      className="mt-1 bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm p-2"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                  >
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-[rgba(35,87,117,255)] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[rgba(35,87,117,255)] focus:outline-none focus:ring-2 focus:ring-[rgba(35,87,117,255)] focus:ring-offset-2 sm:text-sm"
                onClick={handleSubmit}
              >
                Invoice
              </button>
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

export default TicketModal;
