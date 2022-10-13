import React, { useState } from 'react'
import { vehiculeType } from '../Pages/ListVehicule'
import "../css/Vehicule/ListVehicule.css"
export type unVehicule = {
  unVehicule: vehiculeType
  deleteVehicule: any,
  modifyVehicule: any
}

export const Vehicule = (props: unVehicule) => {

  const [vehicule] = useState(props)


  /**
   * Supprime un véhicule via son id
   * @param event React.FormEvent
   */
  const deleteVehicule = (event: React.FormEvent) => {
    event.preventDefault();  
    props.deleteVehicule(vehicule.unVehicule.idVehicule)
  }

  /**
   * Permet de modifier les information d'un véhicule
   * @param event 
   */
  const modifyVehicule = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <>
      <li className='liste'>
        <p>marque: {vehicule.unVehicule.marque}</p>
        <p>model: {vehicule.unVehicule.modele}</p>
        <p>immatriculation : {vehicule.unVehicule.imma}</p>
        <p>etat: {vehicule.unVehicule.etat}</p>
        <p>dispo: {vehicule.unVehicule.dispo? "oui" : "non"}</p>
        <p>type: {vehicule.unVehicule.type}</p>
        <p>prix: {vehicule.unVehicule.prixLoca} €</p>
        <button onClick={modifyVehicule}>Modiffier</button>
        <button onClick={deleteVehicule}>Supprimer</button>
      </li>
    </>
  )
}
