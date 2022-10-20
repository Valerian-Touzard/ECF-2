import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Common/tableau.css"
import { LocataireType } from '../Models/LocataireType'

export type unLocataire = {
  locataire: LocataireType
}

export const Locataire = (props: unLocataire) => {

  return (
    <>
      <td>{props.locataire.nom}</td>
      <td>{props.locataire.prenom}</td>
      <td>{props.locataire.email}</td>
      <td>{props.locataire.dateNaiss}</td>
      <td>{props.locataire.tel}</td>
      <td>
        <Link to={`/modifLocataire/${props.locataire.id}`} className="modifier">Modifier</Link>
        <Link to={`/confirmSuprrLocataire/${props.locataire.id}`} className="supprimer">Supprimer</Link>
      </td>

    </>
  )
}
