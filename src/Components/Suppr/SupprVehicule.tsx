import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "../../Css/Common/confirmSupp.css"
import { vehiculeService } from '../../Services/VehiculeService';

export const SupprVehicule = () => {
    const { id } = useParams();

    let navigate = useNavigate();

    /**
     * Supprime le Véhicule et ramène à la page liste de véhicule
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const deleteVehicule = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        vehiculeService.deleteVehicule(id as string);
        navigate("/vehicule")
    }

    /**
     * Ramène à la page liste de véhicule sans suppression du véhicule
     * @param event 
     */
    const retour = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/vehicule");
    }


    return (
        <>
            <div className='box-main'>
                <h1>Etes vous sur de vouloir supprimer ce Véhicule ?</h1>
                <div className='choix'>
                    <button onClick={deleteVehicule} className="supp">Oui</button>
                    <button onClick={retour} className="cancel">Non</button>
                </div>
            </div>

        </>
    )
}
