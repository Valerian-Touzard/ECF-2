import React from 'react';
import { BrowserRouter as Routeur, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { ListLocataires } from './Pages/ListLocataires';
import { ListVehicule } from './Pages/ListVehicule';
import { Page404 } from './Pages/Page404';

function App() {
  return (
    <>
      <Routeur>
        <nav>
          <ul>
            <li>
                <Link to='/'> Home</Link>
            </li>
            <li>
              <Link to='/vehicules'>Vehicule</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path="/" element={<ListLocataires />} />
          <Route path="/vehicules" element={<ListVehicule />} />
        </Routes>
      </Routeur>
    </>
  );
}

export default App;
