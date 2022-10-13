import React, { useState } from 'react'
import { ModifyLocataire } from '../Layouts/ModifyLocataire'
import { locataire } from '../Pages/ListLocataires'
import "../css/Locataire/ListLocataire.css";

export type unLocataire = {
  unlocataire: locataire
  deleteLocataire: any,
  modifyLocataire: any
}

export const Locataire = (props: unLocataire) => {

  const [locataire] = useState(props)
  
  const deleteLocataires = (event: React.FormEvent) => {
    event.preventDefault();
    locataire.deleteLocataire(locataire.unlocataire.id)
  }

  const modifyLocataire = (event: React.FormEvent) => {
    event.preventDefault();
    return <ModifyLocataire unLocataire={locataire}/>
  }

  return (
    <>
      <li className='liste'>
        <p>nom: {locataire.unlocataire.nom}</p>
        <p>prenom: {locataire.unlocataire.prenom}</p>
        <p>date de naissance: {locataire.unlocataire.dateNaiss}</p>
        <p>email: {locataire.unlocataire.email}</p>
        <p>tel: {locataire.unlocataire.tel}</p>
        <button >Afficher</button>
        <button onClick={modifyLocataire}>Modiffier</button>
        <button onClick={deleteLocataires}>Supprimer</button>
      </li>
    </>
  )
}
