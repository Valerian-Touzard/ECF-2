import React from 'react'
import { Link } from 'react-router-dom'
import { LocationType } from '../Models/LocationType'

export type propsType = {
    location: LocationType
}
export const Location = (props: propsType) => {

    return (
        <>
            <td>{props.location.nomClient}</td>
            <td>{props.location.imma}</td>
            <td>{props.location.dateDebut}</td>
            <td>{props.location.dateFin}</td>
            <td>{props.location.prixLoca}</td>
            <td>
                <Link to={`/modifLocataire/${props.location.id}`} className="modifier">Modifier</Link>
                <Link to={`/confirmSuprrLocataire/${props.location.id}`} className="supprimer">Supprimer</Link>
            </td>
        </>
    )
}
