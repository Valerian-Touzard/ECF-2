import React, { useState } from 'react'
import { locataire } from '../Pages/ListLocataires'
import { locataireService } from '../Services/LocataireServices'

export type unLocataire = {
  unlocataire: locataire
  deleteLocataire: any
}

export const Locataire = (props: unLocataire) => {

  const [locataire, setLocataires] = useState(props)

  const deleteLocataires =(event: React.FormEvent) =>{
    event.preventDefault();
    locataire.deleteLocataire(locataire.unlocataire.id)
  }

  return (
    <>
      <li>
        <p>id: {locataire.unlocataire.id}</p>
        <p>nom: {locataire.unlocataire.nom}</p>
        <p>prenom: {locataire.unlocataire.prenom}</p>
        <p>date de naissance: {locataire.unlocataire.dateNaiss}</p>
        <p>email: {locataire.unlocataire.email}</p>
        <p>tel: {locataire.unlocataire.tel}</p>
        <button >Afficher</button>
        <button>Modiffier</button>
        <button onClick={deleteLocataires}>Supprimer</button>
      </li>
    </>
  )
}
