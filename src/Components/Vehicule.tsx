import React, { useState } from 'react'
import { vehiculeType } from '../Pages/ListVehicule'

export type unVehicule = {
  unVehicule: vehiculeType
  deleteVehicule: any,
  modifyVehicule: any
}

export const Vehicule = (props: unVehicule) => {

  const [vehicule] = useState(props)


  
  const deleteVehicule = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(vehicule.unVehicule.idVehicule);
    
    props.deleteVehicule(vehicule.unVehicule.idVehicule)
  }

  const modifyVehicule = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <>
      <li>
        <p>nom: {vehicule.unVehicule.marque}</p>
        <p>prenom: {vehicule.unVehicule.modele}</p>
        <p>date de naissance: {vehicule.unVehicule.imma}</p>
        <p>email: {vehicule.unVehicule.etat}</p>
        <p>tel: {vehicule.unVehicule.dispo}</p>
        <p>tel: {vehicule.unVehicule.type}</p>
        <p>tel: {vehicule.unVehicule.prixLoca}</p>
        <button onClick={modifyVehicule}>Modiffier</button>
        <button onClick={deleteVehicule}>Supprimer</button>
      </li>
    </>
  )
}
