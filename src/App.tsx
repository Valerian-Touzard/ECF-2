import React from 'react';
import { BrowserRouter as Routeur, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { FormulaireAjoutLocataire } from './Components/Ajout/FormulaireAjoutLocataire';
import { FormulaireAjoutVehicule } from './Components/Ajout/FormulaireAjoutVehicule';
import { FormulaireModificationVehicule } from './Components/Modif/FormulaireModificationVehicule';
import './Css/Navbar/navbar.css';
import image from "./Img/localib.png";
import { ListLocataires } from './Pages/ListLocataires';
import { ListVehicules } from './Pages/ListVehicules';
import { Page404 } from './Pages/Page404';

function App() {
  return (
    <>
      <Routeur>
        <nav>
          <img src={image} alt="" />
          <ul>
            <li>
              <Link to="/">Locataire</Link>
            </li>
            <li>
              <Link to="/vehicule">Véhicule</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path="/" element={<ListLocataires />} />
          <Route path="/vehicule" element={<ListVehicules />} />

          <Route path="/ajoutLocataire" element={<FormulaireAjoutLocataire />} />
          <Route path="/ajoutVehicule" element={<FormulaireAjoutVehicule />} />

          <Route path="/modifVehicule/:id" element={<FormulaireModificationVehicule />} />
        </Routes>
      </Routeur>
    </>
  );
}

export default App;
