import { apiEndpoints, usePostMutation } from '@services';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const HotelModal = ({ open, onClose, vendors, onAdd }) => {
  const [form, setForm] = useState({
    to: '',
    checkedInDate: '',
    checkedOutDate: '',
    hotelName: '',
    reservationNumber: '',
    guestName: '',
    view: '',
    nts: '',
    sgl: '',
    dbl: '',
    trl: '',
    quad: '',
    sglRate: '',
    dblRate: '',
    trlRate: '',
    quadRate: '',
    totalRoomAmount: '',
    bf: '',
    lu: '',
    di: '',
    bfRate: '',
    luRate: '',
    diRate: '',
    totalMealAmount: '',
    totalAmount: '',
    paymentAmount: '',
    paymentType: '',
  });

  useEffect(() => {
    const nts = parseFloat(form.nts) || 1; // Default to 1 if nts is empty
    const sglTotal = (parseFloat(form.sgl) || 0) * (parseFloat(form.sglRate) || 0) * nts;
    const dblTotal = (parseFloat(form.dbl) || 0) * (parseFloat(form.dblRate) || 0) * nts;
    const trlTotal = (parseFloat(form.trl) || 0) * (parseFloat(form.trlRate) || 0) * nts;
    const quadTotal = (parseFloat(form.quad) || 0) * (parseFloat(form.quadRate) || 0) * nts;

    const totalRoomAmount = sglTotal + dblTotal + trlTotal + quadTotal;

    const bfTotal = (parseFloat(form.bf) || 0) * (parseFloat(form.bfRate) || 0) * nts;
    const luTotal = (parseFloat(form.lu) || 0) * (parseFloat(form.luRate) || 0) * nts;
    const diTotal = (parseFloat(form.di) || 0) * (parseFloat(form.diRate) || 0) * nts;

    const totalMealAmount = bfTotal + luTotal + diTotal;

    const totalAmount = totalRoomAmount + totalMealAmount;

    setForm(prevForm => ({
      ...prevForm,
      totalRoomAmount: totalRoomAmount.toFixed(2),
      totalMealAmount: totalMealAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    }));
  }, [
    form.sgl,
    form.dbl,
    form.trl,
    form.quad,
    form.sglRate,
    form.dblRate,
    form.trlRate,
    form.quadRate,
    form.bf,
    form.lu,
    form.di,
    form.bfRate,
    form.luRate,
    form.diRate,
    form.nts,
  ]);

  const onSuccess = data => {
    toast.success('Reservation created successfully');
  };

  const onError = data => {
    toast.error('Something went wrong');
  };

  const { mutate: createHotel } = usePostMutation(apiEndpoints?.HOTEL, onSuccess, onError);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    console.log('data: ', form);
    createHotel({ payload: form });
    onClose();
    // onAdd(form);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-[rgba(240,248,255,1)] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-[rgba(35,87,117,255)] px-4 py-2 text-base font-medium text-white">
            <h3 className="text-lg font-semibold">Add Reservation</h3>
            <button type="button" className="absolute top-2 right-2 text-white hover:text-gray-300" onClick={onClose}>
              &times;
            </button>
          </div>
          <form className="px-4 py-4 sm:px-6 sm:py-6" onSubmit={e => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">To</label>
                <select
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                >
                  <option value="" disabled>
                    Select vendor
                  </option>
                  {vendors?.map(vendor => (
                    <option key={vendor.id} value={vendor.id}>
                      {vendor.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Checked In</label>
                  <input
                    type="date"
                    name="checkedInDate"
                    value={form.checkedInDate}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Checked Out</label>
                  <input
                    type="date"
                    name="checkedOutDate"
                    value={form.checkedOutDate}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Hotel Name</label>
                <input
                  type="text"
                  name="hotelName"
                  value={form.hotelName}
                  onChange={handleChange}
                  placeholder="Enter hotel name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Reservation Number</label>
                <input
                  type="text"
                  name="reservationNumber"
                  value={form.reservationNumber}
                  onChange={handleChange}
                  placeholder="Enter reservation number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guest Name</label>
                <input
                  type="text"
                  name="guestName"
                  value={form.guestName}
                  onChange={handleChange}
                  placeholder="Enter guest name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">View</label>
                <input
                  type="text"
                  name="view"
                  value={form.view}
                  onChange={handleChange}
                  placeholder="Enter view"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">NTS</label>
                <input
                  type="text"
                  name="nts"
                  value={form.nts}
                  onChange={handleChange}
                  placeholder="Enter NTS"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div className="space-y-4">
                <div className="text-lg font-semibold text-gray-700">Room</div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">SGL</label>
                    <input
                      type="text"
                      name="sgl"
                      value={form.sgl}
                      onChange={handleChange}
                      placeholder="Enter SGL"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DBL</label>
                    <input
                      type="text"
                      name="dbl"
                      value={form.dbl}
                      onChange={handleChange}
                      placeholder="Enter DBL"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">TRL</label>
                    <input
                      type="text"
                      name="trl"
                      value={form.trl}
                      onChange={handleChange}
                      placeholder="Enter TRL"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">QUAD</label>
                    <input
                      type="text"
                      name="quad"
                      value={form.quad}
                      onChange={handleChange}
                      placeholder="Enter QUAD"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">SGL Rate</label>
                    <input
                      type="text"
                      name="sglRate"
                      value={form.sglRate}
                      onChange={handleChange}
                      placeholder="Enter SGL Rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DBL Rate</label>
                    <input
                      type="text"
                      name="dblRate"
                      value={form.dblRate}
                      onChange={handleChange}
                      placeholder="Enter DBL Rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">TRL Rate</label>
                    <input
                      type="text"
                      name="trlRate"
                      value={form.trlRate}
                      onChange={handleChange}
                      placeholder="Enter TRL Rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">QUAD Rate</label>
                    <input
                      type="text"
                      name="quadRate"
                      value={form.quadRate}
                      onChange={handleChange}
                      placeholder="Enter QUAD Rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Total Room Amount</label>
                  <input
                    type="text"
                    name="totalRoomAmount"
                    value={form.totalRoomAmount}
                    onChange={handleChange}
                    placeholder="Enter Total Room Amount"
                    className="mt-1 block w-full bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-lg font-semibold text-gray-700">Meal</div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">BF</label>
                    <input
                      type="text"
                      name="bf"
                      value={form.bf}
                      onChange={handleChange}
                      placeholder="Enter BF"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">LU</label>
                    <input
                      type="text"
                      name="lu"
                      value={form.lu}
                      onChange={handleChange}
                      placeholder="Enter LU"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DI</label>
                    <input
                      type="text"
                      name="di"
                      value={form.di}
                      onChange={handleChange}
                      placeholder="Enter DI"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">BF Rate</label>
                    <input
                      type="text"
                      name="bfRate"
                      value={form.bfRate}
                      onChange={handleChange}
                      placeholder="Enter BF Rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">LU Rate</label>
                    <input
                      type="text"
                      name="luRate"
                      value={form.luRate}
                      onChange={handleChange}
                      placeholder="Enter LU Rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DI Rate</label>
                    <input
                      type="text"
                      name="diRate"
                      value={form.diRate}
                      onChange={handleChange}
                      placeholder="Enter DI Rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Total Meal Amount</label>
                  <input
                    type="text"
                    name="totalMealAmount"
                    value={form.totalMealAmount}
                    onChange={handleChange}
                    placeholder="Enter Total Meal Amount"
                    className="mt-1 block w-full bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Amount</label>
                <input
                  type="text"
                  name="totalAmount"
                  value={form.totalAmount}
                  onChange={handleChange}
                  placeholder="Enter Total Amount"
                  className="mt-1 block bg-gray-300 w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Amount</label>
                <input
                  type="text"
                  name="paymentAmount"
                  value={form.paymentAmount}
                  onChange={handleChange}
                  placeholder="Enter Payment Amount"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Type</label>
                <select
                  name="paymentType"
                  value={form.paymentType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgba(35,87,117,255)] focus:ring-[rgba(35,87,117,255)] sm:text-sm h-10 p-2"
                >
                  <option value="" disabled>
                    Select payment type
                  </option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
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

export default HotelModal;
