import React, { useState } from 'react'
import { locataire } from '../Pages/ListLocataires'

export type unLocataire = {
    unlocataire: locataire
}

export const Locataire = (props: unLocataire ) => {

        const [locataire, setLocataires] = useState(props)

  return (
    <>
        <li>
            <p>id: {locataire.unlocataire.id}</p>
            <p>nom: {locataire.unlocataire.nom}</p>
            <p>prenom: {locataire.unlocataire.prenom}</p>
            <p>date de naissance: {locataire.unlocataire.dateNaiss}</p>
            <p>email: {locataire.unlocataire.email}</p>
            <p>tel: {locataire.unlocataire.tel}</p>
        </li>
    </>
  )
}
