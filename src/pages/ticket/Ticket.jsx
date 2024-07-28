import Navbar from '@common/components/Navbar';
import TicketTable from '@common/components/TicketTable';
import { apiEndpoints, queryKeys, useGetQuery } from '@services';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Ticket = () => {
  const [allTickets, setAllTickets] = useState([]);

  const onSuccess = data => {
    console.log('all tickets in: ', data);

    setAllTickets(Object.values(data?.data));
  };

  const { id } = useParams();
  const { data: getAllTickets, refetch } = useGetQuery(
    queryKeys?.TICKETS,
    apiEndpoints?.TICKET_VENDOR(id),
    {},
    { onSuccess }
  );

  useEffect(() => {
    console.log('all tickets: ', allTickets);
  }, [getAllTickets]);

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <div>
      <Navbar />
      <TicketTable data={allTickets} />
    </div>
  );
};

export default Ticket;
