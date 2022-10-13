import React from 'react';
import { BrowserRouter as Routeur, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { ListLocataires } from './Pages/ListLocataires';
import { ListVehicule } from './Pages/ListVehicule';
import { Page404 } from './Pages/Page404';
import image  from './img/localib.png'
import { AddLocataire } from './Layouts/AddLocataire';

function App() {
  return (
    <>
      <Routeur>
        <nav>
          <img src={image} alt="localib" className='image'/>
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
          <Route path="/addLocataire" element={<AddLocataire addLocataire={undefined} />} />
        </Routes>
      </Routeur>
    </>
  );
}

export default App;
