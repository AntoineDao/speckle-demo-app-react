import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { AuthProvider } from 'context/auth'
import { GraphqlProvider } from 'context/graphql';
import { UserProvider } from 'context/user';

import Root from 'components/templates/Root'
import Index from 'components/pages/Index';
import AuthCallback from 'components/pages/AuthCallback';
import StreamList from 'components/pages/StreamList';

const App = () => {
  return (
    <AuthProvider>
      <GraphqlProvider>
        <UserProvider>
          <RouterProvider router={createBrowserRouter(
            createRoutesFromElements(
              <Route
                path=""
                element={<Root appName='Speckle React Demo' />}
              >
                <Route index element={<Index />} />
                <Route path="auth" element={<AuthCallback />} />
                <Route path="streams" element={<StreamList />} />
              </Route>

            )
          )} />
        </UserProvider>
      </GraphqlProvider>
    </AuthProvider>
  );
}

export default App;
