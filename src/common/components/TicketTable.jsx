import React from 'react';

const TicketTable = ({ data, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md rounded-lg">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Sr.no
                    </th>
                    <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Date
                    </th>

                    <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Debit (Sell)
                    </th>
                    <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Credit (Buy)
                    </th>
                    <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Balance
                    </th>
                    <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{new Date(item.date).toLocaleDateString()}</p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{item.debit}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{item.credit}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{item.balance}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex space-x-4">
                        <button
                          onClick={() => onEdit(item)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDelete(item)}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                        >
                          Delete
                        </button>
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

export default TicketTable;
