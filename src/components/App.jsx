import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/services/createUser';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const Login = lazy(() => import('../pages/Login/Login'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
};