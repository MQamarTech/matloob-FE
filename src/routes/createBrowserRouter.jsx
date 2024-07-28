import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from '@pages/home';
import { Unauthorized } from '@pages/unauthorized';
import { ROUTES, PrivateRoute } from '@routes';
import Login from '@pages/login/login';
import Ticket from '@pages/ticket/Ticket';
import Hotel from '@pages/hotel/Hotel';
import Login2 from '@pages/login/Login2';
import Counter from '@common/components/Counter';

// eslint-disable-next-line no-unused-vars
const createPrivateRoute = Component => {
  return (
    <PrivateRoute>
      <Component />
    </PrivateRoute>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path={ROUTES.HOME} element={createPrivateRoute(Home)} /> */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.UN_AUTHORIZED} element={<Unauthorized />} />
      <Route path={ROUTES?.login} element={<Login />} />
      <Route path={ROUTES?.TICKET} element={<Ticket />} />
      <Route path={ROUTES?.HOTEL} element={<Hotel />} />
      <Route path={ROUTES?.LOGIN2} element={<Login2 />} />
      <Route path="/counter" element={<Counter />} />
    </>
  ),
  { basename: '/app' }
);
