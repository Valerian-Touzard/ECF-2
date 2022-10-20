import React, { useState, useEffect } from 'react';
import { Vehicule } from '../Layouts/Vehicule';
import { VehiculeType } from '../Models/VehiculeType';
import { vehiculeService } from '../Services/VehiculeService';
import { Link } from 'react-router-dom';
import "../Css/Common/tableau.css"

export const ListVehicules = () => {

    const [listVehicules, setListVehicules] = useState<VehiculeType[]>([]);


    useEffect(() => {
        getAllVehicules();
    }, [])

    /**
     * Méthode qui récupère la liste des véhicules
     */
    const getAllVehicules = () => {
        vehiculeService.getAllVehicules()
            .then(data => setListVehicules(data))
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="box-ajout">
                <Link to="/ajoutVehicule" className='ajout'>Ajouter un Véhicule</Link>
            </div>

            <table className='tableau-style'>
                <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Modele</th>
                        <th>Type</th>
                        <th>Immatriculation</th>
                        <th>Etat</th>
                        <th>Prix location</th>
                        <th>disponible</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {listVehicules && listVehicules.map((vehicule) => {
                        return <tr key={vehicule.id}><Vehicule vehicule={vehicule} /></tr>
                    })}
                </tbody>

            </table>


        </>
    )
}
