import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Locataire } from '../Layouts/Locataire';
import { LocataireType } from '../Models/LocataireType';
import { locataireService } from '../Services/LocataireService';
import "../Css/Common/tableau.css"

export const ListLocataires = () => {

    const [listLocataires, setListLocataires] = useState<LocataireType[]>([]);


    useEffect(() => {
        getAllLocataire();
    }, [])


    /**
     * Méthode qui récupère la liste des locataires
     */
    const getAllLocataire = () => {
        locataireService.getAllLocataires()
            .then(data => setListLocataires(data))
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='box-ajout'>
                <Link to="/ajoutLocataire" className='ajout'>Ajouter un Locataire</Link>
            </div>

            <table className='tableau-style'>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Date de naissance</th>
                        <th>Telephone</th>
                        <th>option</th>
                    </tr>
                </thead>

                <tbody>
                    {listLocataires && listLocataires.map((locataire) => {
                        return <tr key={locataire.id}><Locataire locataire={locataire} /></tr>
                    })}
                </tbody>
            </table>

        </>
    )
}
