import CustomTable from '@common/components/CustomTable';
import Header from '@common/components/Header';
import Invoice from '@common/components/Invoice';
import Navbar from '@common/components/Navbar';
import TicketSection from '@common/components/TicketSection';
import { apiEndpoints, queryKeys, useGetQuery } from '@services';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Hotel = () => {
  const [allHotels, setAllHotels] = useState();
  const { id } = useParams();
  const onSuccess = data => {
    setAllHotels(Object.values(data?.data));
  };

  const { getAllVendors, refetch } = useGetQuery(queryKeys?.HOTEL, apiEndpoints?.HOTEL_VENDOR(id), {}, { onSuccess });

  useEffect(() => {
    refetch();
  }, [id]);

  const [generate, setGenerate] = useState(false);

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl font-bold mt-10">Hotels</h1>
      <CustomTable data={allHotels} />
    </div>
  );
};

export default Hotel;
