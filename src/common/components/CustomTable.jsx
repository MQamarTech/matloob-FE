import React, { useEffect } from 'react';

const CustomTable = ({ data }) => {
  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
  };

  useEffect(() => {
    console.log('mya dat', data);
  }, [data]);
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-lg rounded-lg">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Sr.no
                    </th>
                    <th
                      colSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Checked Date
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Hotel Name
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Reservation Number
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Guest Name
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      View
                    </th>

                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      NTS
                    </th>
                    <th
                      colSpan="4"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      No. of Rooms
                    </th>
                    <th
                      colSpan="4"
                      className="px-5 py-3 bg-gray-800 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Room Rate
                    </th>
                    <th
                      colSpan="3"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Meal
                    </th>
                    <th
                      colSpan="3"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Meal Rate
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Total Amount
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Debit (Sell)
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Credit (Buy)
                    </th>
                    <th
                      rowSpan="2"
                      className="px-5 py-3 bg-gray-800  text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Total Amount
                    </th>
                  </tr>
                  <tr>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      In
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Out
                    </th>

                    <th className="px-5 py-3 bg-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      SGL
                    </th>
                    <th className="px-5 py-3 bg-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      DBL
                    </th>
                    <th className="px-5 py-3 bg-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      TRL
                    </th>
                    <th className="px-5 py-3 bg-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      QUAD
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      SGL
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      DBL
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      TRL
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      QUAD
                    </th>
                    <th className="px-5 py-3 bg-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      BF
                    </th>
                    <th className="px-5 py-3 bg-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      LU
                    </th>
                    <th className="px-5 py-3 bg-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      DI
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      BF
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      LU
                    </th>
                    <th className="px-5 py-3 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      DI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {index + 1}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {new Date(item.checkedDate.in).toLocaleDateString()}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {new Date(item.checkedDate.out).toLocaleDateString()}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.hotelName}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.reservationNo}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.guestName}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.view}
                      </td>

                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.nts}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.noOfRoom?.sgl}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.noOfRoom?.dbl}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.noOfRoom?.trl}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.noOfRoom?.quad}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.roomRate?.sgl}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.roomRate?.dbl}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.roomRate?.trl}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.roomRate?.quad}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.meal?.bf}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.meal?.lu}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.meal?.di}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.mealRate?.bf}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.mealRate?.lu}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.mealRate?.di}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.totalAmount}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.debit}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.credit}
                      </td>
                      <td style={tdStyle} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item?.balance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
