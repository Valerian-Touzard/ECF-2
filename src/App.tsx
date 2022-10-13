import React from 'react';
import { BrowserRouter as Routeur, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { ListLocataires } from './Pages/ListLocataires';
import { Page404 } from './Pages/Page404';

function App() {
  return (
    <>
      <Routeur>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path="/" element={<ListLocataires />} />
        </Routes>
      </Routeur>
    </>
  );
}

export default App;
