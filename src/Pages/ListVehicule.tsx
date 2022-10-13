import React, { useEffect, useState } from 'react'
import { Locataire } from '../Components/Locataire';
import { Vehicule } from '../Components/Vehicule';
import { AddLocataire } from '../Layouts/AddLocataire';
import { AddVehicule } from '../Layouts/AddVehicule';
import { locataireService } from '../Services/LocataireServices';
import { vehiculeService } from '../Services/VehiculeService';

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

    const [vehicules, setVehicule] = useState<vehiculeType[]>([

    ])


    useEffect(() => {
        findAllVehicule();
    }, []);

    const findAllVehicule = () => {
        vehiculeService.findAllVehicule()
            .then(data => setVehicule(data));
    }

    const modifyVehicule = (idVehicule: string, newVehicule: vehiculeType) => {
        vehiculeService.modifyVehicule(idVehicule, newVehicule);
    }

    const addVehicule = (newVehicule: vehiculeType) => {
        vehiculeService.addVehicule(newVehicule).then(findAllVehicule);
    }

    const deleteVehicule = (idVehicule: string) => {
        vehiculeService.deleteVehicule(idVehicule).then(findAllVehicule);
    }


    return (
        <>
            <AddVehicule addVehicule={addVehicule} />
            <div>
                <ul>
                    {vehicules.map((vehicule, idVehicule) => {
                        return <Vehicule unVehicule={vehicule} key={idVehicule} deleteVehicule={deleteVehicule} modifyVehicule={modifyVehicule} />
                    })}
                </ul>
            </div>
        </>
    )
}
