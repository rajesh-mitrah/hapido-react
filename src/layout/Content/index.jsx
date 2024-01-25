import { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import * as ROUTES from 'constants/route';
import ErrorBoundary from 'components/ErrorBoundary';
import Content from 'components/Content';
import NotFound from 'pages/NotFound';

export default function CustomContent() {
  const routeSources = [
    {
      path: ROUTES.COMPANY_PATH,
      component: lazy(() => import('pages/Company'))
    },
    {
      path: ROUTES.USERS_PATH,
      component: lazy(() => import('pages/Users'))
    },
    {
      path: ROUTES.CONNECTIONS_PATH,
      component: lazy(() => import('pages/Connections'))
    },
    {
      path: ROUTES.PROFILE_PATH,
      component: lazy(() => import('pages/Profile'))
    }
  ];

  return (
    <ErrorBoundary>
      {/* TODO: Need to update this fallback component with our blockUI component once its ready. */}
      <Suspense fallback={<div className="d-flex justify-content-center mt-3">{<Spin />}</div>}>
        <Content className="mt-4 me-4 mx-4">
          <Routes>
            {routeSources.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={ROUTES.WILD_CARD_PATH} element={<NotFound />} />
          </Routes>
        </Content>
      </Suspense>
    </ErrorBoundary>
  );
}
