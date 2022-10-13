import React from 'react';
import { BrowserRouter as Routeur, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { Page404 } from './Pages/Page404';

function App() {
  return (
    <>
      <Routeur>
        <Routes>
          <Route path='*' element={<Page404 />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Routeur>
    </>
  );
}

export default App;
