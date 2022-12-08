import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LocataireType } from '../Models/LocataireType'
import { LocationType } from '../Models/LocationType'
import { locataireService } from '../Services/LocataireService'
import { locationService } from '../Services/LocationService'

export type propsType = {
    location: LocationType,
}
export const Location = (props: propsType) => {


    const [location, setLocation] = useState<LocationType>();
    const [locataire, setLocataire] = useState<LocataireType>();

    useEffect(() => {
      getLocation();
    }, [])
    
    const getLocation = () =>{
        locationService.getOneLocationById(props.location.id).then(data => setLocation(data));
        
    }
  

    return (
        <>
            <td>{location?.locataire.nom + " " + location?.locataire.prenom}</td>
            <td>{props.location.imma}</td>
            <td>{props.location.dateDebut}</td>
            <td>{props.location.dateFin}</td>
            <td>{props.location.prixLoca}</td>
            <td>
                <Link to={`/modifLocation/${props.location.id}/${props.location.locataire.id}/${props.location.idVehicule}`} className="modifier">Modifier</Link>
                <Link to={`/confirmSuprrLocation/${props.location.id}/${props.location.idVehicule}`} className="supprimer">Supprimer</Link>
            </td>
        </>
    )
}
