import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { locataireService } from '../Services/LocataireServices';

export type locataire={
    id: string;
    nom: string,
    prenom: string,
    dateNaiss: string,
    email: string,
    tel: string,
}

export const ListLocataires = () => {

    const [locataires, setLocataires] = useState([])


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
                <DataTable value={locataires} responsiveLayout="scroll">
                    <Column field="id" header="ID"></Column>
                    <Column field="nom" header="Nom"></Column>
                    <Column field="prenom" header="Prénom"></Column>
                    <Column field="dateNaiss" header="Date de naissance"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="tel" header="Tel"></Column>
                </DataTable>
            </div>
        </div>
    </>
  )
}
