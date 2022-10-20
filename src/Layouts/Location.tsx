import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LocataireType } from '../Models/LocataireType'
import { LocationType } from '../Models/LocationType'
import { locataireService } from '../Services/LocataireService'

export type propsType = {
    location: LocationType,
}
export const Location = (props: propsType) => {


    const [locataire, setLocataire] = useState<LocataireType>()

    useEffect(() => {
      getLocataire();
    
    }, [])
    
    const getLocataire = () =>{
        locataireService.getOneLocataireById(props.location.idClient).then(data => setLocataire(data));
    }
  

    return (
        <>
            <td>{locataire?.nom + " " + locataire?.prenom}</td>
            <td>{props.location.imma}</td>
            <td>{props.location.dateDebut}</td>
            <td>{props.location.dateFin}</td>
            <td>{props.location.prixLoca}</td>
            <td>
                <Link to={`/modifLocation/${props.location.id}`} className="modifier">Modifier</Link>
                <Link to={`/confirmSuprrLocation/${props.location.id}/${props.location.idVehicule}`} className="supprimer">Supprimer</Link>
            </td>
        </>
    )
}
