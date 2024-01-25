import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import PrivateRoute from 'routers/PrivateRoute';
import PublicRoute from 'routers/PublicRoute';
import { INDEX_PATH, LOGIN_PATH, SIGNUP_PATH, WILD_CARD_PATH, COMPANY_PATH } from 'constants/route';
import NotFound from 'pages/NotFound';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const Layout = lazy(() => import('layout'));

const Routers = () => {
  return (
    <div>
      <Suspense fallback={<div className="d-flex justify-content-center mt-3">{<Spin />}</div>}>
        <Routes>
          <Route path={INDEX_PATH} element={<PrivateRoute component={<Layout />} redirectUrl={LOGIN_PATH} />} />
          <Route path={LOGIN_PATH} element={<PublicRoute component={<Login />} redirectUrl={COMPANY_PATH} />} />
          <Route path={SIGNUP_PATH} element={<PublicRoute component={<SignUp />} redirectUrl={LOGIN_PATH} />} />
          <Route path={WILD_CARD_PATH} element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Routers;
