import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Auth } from './Auth/Auth';
import { Layout } from './Layout/Layout';

export const App: React.FC = () => {

  return <Container><Routes>
    <Route path='/' element={<Layout />} >
      <Route path='register' element={<Auth/>} />
      </Route>

  </Routes></Container>

}


