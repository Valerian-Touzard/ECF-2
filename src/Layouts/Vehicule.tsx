import React from 'react'
import { Link } from 'react-router-dom'
import { VehiculeType } from '../Models/VehiculeType'
import "../Css/Common/tableau.css"

export type unVehicule = {
    vehicule: VehiculeType
}

export const Vehicule = (props: unVehicule) => {

    return (
        <>
            <td>{props.vehicule.marque}</td>
            <td>{props.vehicule.modele}</td>
            <td>{props.vehicule.type}</td>
            <td>{props.vehicule.imma}</td>
            <td>{props.vehicule.etat}</td>
            <td>{props.vehicule.prix}</td>
            <td>{props.vehicule.dispo ? "Dispo" : "Indisponible"}</td>
            <td>
                <Link to={`/modifVehicule/${props.vehicule.id}`} className="modifier">Modifier</Link>
                <Link to={`/confirmSuprrVehicule/${props.vehicule.id}`} className="supprimer">Supprimer</Link>
            </td>

        </>

    )
}
