import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refresh } from '../Redux/authOperations';
import { getToken } from '../Redux/serversSlice';
import { AppDispatch } from '../Redux/store';
import { AddServer } from './AddServer/AddServer';
import { Container } from './App.styled';
import { Auth } from './Auth/Auth';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { UserServers } from './UserServers/UserServers';

export const App: React.FC = () => {
  const token = useSelector(getToken);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (token !== null)
      dispatch(refresh());
  }, [dispatch, token])
  return <Container><Routes>
    <Route path='/' element={<Layout />} >
      <Route path='register' element={!token ? <Auth /> : <Navigate to='/home' />} />
      <Route path='login' element={!token ? <Auth /> : <Navigate to='/home' />} />
      <Route path='home' element={token ? <Home /> : <Navigate to='/login' />} >
        <Route path='add' element={<AddServer />} />
        <Route path='your-servers' element={<UserServers />} />
      </Route>
    </Route>

  </Routes></Container>

}


