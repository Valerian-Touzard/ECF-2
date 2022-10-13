import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ModifyLocataire } from '../Layouts/ModifyLocataire'
import { locataire } from '../Pages/ListLocataires'
import { locataireService } from '../Services/LocataireServices'

export type unLocataire = {
  unlocataire: locataire
  deleteLocataire: any,
  modifyLocataire: any
}

export const Locataire = (props: unLocataire) => {

  const [locataire, setLocataires] = useState(props)
  
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
      <li>
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
