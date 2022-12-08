import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "../../Css/Common/confirmSupp.css"
import { Vehicule } from '../../Layouts/Vehicule';
import { LocationType } from '../../Models/LocationType';
import { VehiculeType } from '../../Models/VehiculeType';
import { locationService } from '../../Services/LocationService';
import { vehiculeService } from '../../Services/VehiculeService';

export const SupprLocation = () => {
    const { id } = useParams();
    const { idVehicule } = useParams();
    const [location, setLocation] = useState<LocationType>({
        id: id as string,
        locataire:{
            id: "",
            nom: "",
            prenom: "",
            email: "",
            tel: "",
            dateNaiss: "",
        },
        idVehicule: "",
        imma: "",
        dateDebut: "",
        dateFin: "",
        prixLoca: "",
    });
    
    const [vehicule, setVehicule] = useState<VehiculeType>();

    let navigate = useNavigate();


    useEffect(() => {
        getData();
    }, [])

    /**
     * Récupère les données du véhicule et de la location
     */
    const getData = () => {
        locationService.getOneLocationById(id as string).then(data => setLocation(data));
        vehiculeService.getOneVehiculeById(idVehicule as string).then(data => setVehicule(data));        
    }
        

    /**
     * Supprime la location et ramène à la page liste de location
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const deleteLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let vehiculeTmp: VehiculeType = vehicule as VehiculeType;
        vehiculeTmp.dispo = true;
        setVehicule(vehiculeTmp);
        vehiculeService.modifVehicule(vehiculeTmp, vehicule?.id as string)
        locationService.deleteLocation(id as string);
        navigate("/location")
    }

    /**
     * Ramène à la page liste de location sans suppression de la location
     * @param event 
     */
    const retour = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/location");
    }


    return (
        <>
            <div className='box-main'>
                <h1>Etes vous sur de vouloir supprimer cette Location ?</h1>
                <div className='choix'>
                    <button onClick={deleteLocation} className="supp">Oui</button>
                    <button onClick={retour} className="cancel">Non</button>
                </div>
            </div>

        </>
    )
}
