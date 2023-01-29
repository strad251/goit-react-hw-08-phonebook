import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/user/operations';
import { Layout } from './Layout';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Login = lazy(() => import('../pages/Login/Login'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return ( isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
             <Route index element={<HomePage />} />
      <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />}
              />
            }
          />
      <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<SignUp />}
              />
            }
          />
      <Route
          path="/contacts"
          element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
            />
       </Route>
      </Routes>
    </Suspense>
  )); 
};