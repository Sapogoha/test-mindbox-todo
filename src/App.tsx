import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './App.scss';

function App() {
  const main = '/test-mindbox-todo';
  return (
    <Routes>
      <Route path={main} element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
