import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { locataireService } from '../Services/LocataireServices';
import { Locataire } from '../Components/Locataire';

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


    return (
        <>
            <div>
                <div className="card">
                    <ul>
                        {locataires.map((locataire, id) => {
                            return <Locataire unlocataire={locataire} key={id} />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
