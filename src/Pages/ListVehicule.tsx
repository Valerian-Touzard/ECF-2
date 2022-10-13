import React, { useEffect, useState } from 'react'
import { Vehicule } from '../Components/Vehicule';
import { AddVehicule } from '../Layouts/AddVehicule';
import { vehiculeService } from '../Services/VehiculeService';
import "../css/Vehicule/style.css"

export type vehiculeType = {
    idVehicule: string,
    marque: string,
    modele: string,
    imma: string,
    etat: string,
    dispo: boolean,
    type: string,
    prixLoca: string,
}

export const ListVehicule = () => {

    const [vehicules, setVehicule] = useState<vehiculeType[]>([])
    const [isClicked, setisClicked] = useState<boolean>(false)
    const [textBouton, setTextBouton] = useState<string>('Ajouter véhicule')

    useEffect(() => {
        findAllVehicule();
    }, []);

    /**
     * Permet de récupérer la liste des véhicules
     */
    const findAllVehicule = () => {
        vehiculeService.findAllVehicule()
            .then(data => setVehicule(data));
    }

    /**
     * Permet de modifier un vehicule via son id
     * @param idVehicule string
     * @param newVehicule vehiculeType
     */
    const modifyVehicule = (idVehicule: string, newVehicule: vehiculeType) => {
        // vehiculeService.modifyVehicule(idVehicule, newVehicule);
    }

    /**
     * Ajoute un véhicule dans la base de donnée
     * @param newVehicule vehiculeType
     */
    const addVehicule = (newVehicule: vehiculeType) => {
        vehiculeService.addVehicule(newVehicule).then(findAllVehicule);
    }

    /**
     * Supprime un véhicule de la base de donnée
     * @param idVehicule vehiculeType
     */
    const deleteVehicule = (idVehicule: string) => {
        vehiculeService.deleteVehicule(idVehicule).then(findAllVehicule);
    }

    /**
     * Permet d'afficher/cacher le formulaire d'ajout
     */
    const changeVisibility = () => {
        if (!isClicked) {
            setisClicked(true);
            setTextBouton("fermer formulaire");
        } else {
            setisClicked(false);
            setTextBouton("Ajouter client");
        }
    }

    return (
        <>
            <button onClick={changeVisibility} className="bouton">{textBouton}</button>
            {isClicked ? <AddVehicule addVehicule={addVehicule} /> : ""}
            <div >

                <div>
                    <ul>
                        {vehicules.map((vehicule, idVehicule) => {
                            return <Vehicule unVehicule={vehicule} key={idVehicule} deleteVehicule={deleteVehicule} modifyVehicule={modifyVehicule} />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
