import React from 'react';
import { BrowserRouter as Routeur, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { ListLocataires } from './Pages/ListLocataires';
import { ListVehicules } from './Pages/ListVehicules';
import { ListLocations } from './Pages/ListLocations';
import { FormulaireAjoutLocataire } from './Components/Ajout/FormulaireAjoutLocataire';
import { FormulaireAjoutVehicule } from './Components/Ajout/FormulaireAjoutVehicule';
import { FormulaireAjoutLocation } from './Components/Ajout/FormulaireAjoutLocation';
import { FormulaireModificationLocataire } from './Components/Modif/FormulaireModificationLocataire';
import { FormulaireModificationVehicule } from './Components/Modif/FormulaireModificationVehicule';
import { SupprLocataire } from './Components/Suppr/SupprLocataire';
import { SupprVehicule } from './Components/Suppr/SupprVehicule';
import { Page404 } from './Pages/Page404';
import './Css/Navbar/navbar.css';
import image from "./img/localib.png";
import { SupprLocation } from './Components/Suppr/SupprLocation';
import { FormulaireModificationLocation } from './Components/Modif/FormulaireModificationLocation';

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
          <Route path="/location" element={<ListLocations />} />

          <Route path="/ajoutLocataire" element={<FormulaireAjoutLocataire />} />
          <Route path="/ajoutVehicule" element={<FormulaireAjoutVehicule />} />
          <Route path="/ajoutLocation/:id" element={<FormulaireAjoutLocation />} />

          <Route path="/modifLocataire/:id" element={<FormulaireModificationLocataire />} />
          <Route path="/modifVehicule/:id" element={<FormulaireModificationVehicule />} />
          <Route path="/modifLocation/:id/:idClient/:idVehicule" element={<FormulaireModificationLocation />} />

          <Route path="/confirmSuprrLocataire/:id" element={<SupprLocataire />} />
          <Route path="/confirmSuprrVehicule/:id" element={<SupprVehicule />} />
          <Route path="/confirmSuprrLocation/:id/:idVehicule" element={<SupprLocation />} />
        </Routes>
      </Routeur>
    </>
  );
}

export default App;
