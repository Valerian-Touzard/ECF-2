import React, { useEffect, useState } from 'react'
import { locataireService } from '../Services/LocataireServices';
import { Locataire } from '../Components/Locataire';
import { Link } from 'react-router-dom';
import { AddLocataire } from '../Layouts/AddLocataire'

export type locataire = {
    id: string,
    nom: string,
    prenom: string,
    dateNaiss: string,
    email: string,
    tel: string,
}

export const ListLocataires = () => {

    const [locataires, setLocataires] = useState<locataire[]>([

    ])


    useEffect(() => {
        findAllLocataires();
    }, []);

    const findAllLocataires = () => {
        locataireService.findAllLocataires()
            .then(data => setLocataires(data));
    }

    const addLocataire = (newLocataire: locataire) => {
        locataireService.addLocataire(newLocataire).then(findAllLocataires);
    }


    return (
        <>
            <Link to='addLocataire' >Ajouter un client</Link>
            <AddLocataire addLocataire={addLocataire}/>
            <div>
                <ul>
                    {locataires.map((locataire, id) => {
                        return <Locataire unlocataire={locataire} key={id} />
                    })}
                </ul>
            </div>
        </>
    )
}
