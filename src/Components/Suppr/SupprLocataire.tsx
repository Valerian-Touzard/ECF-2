import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { locataireService } from '../../Services/LocataireService';
import "../../Css/Common/confirmSupp.css"

export const SupprLocataire = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    /**
     * Supprime le Locataire et ramène à la page liste de locataire
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const deleteLocataire = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        locataireService.deleteLocataire(id as string);
        locataireService.getAllLocataires();
        navigate("/")
    }

    /**
     * Ramène à la page liste de locataire sans suppression du véhicule
     * @param event 
     */
    const retour = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/");
    }


    return (
        <>
            <div className='box-main'>
                <h1>Etes vous sur de vouloir supprimer ce Locataire ?</h1>
                <div className='choix'>
                    <button onClick={deleteLocataire} className="supp">Oui</button>
                    <button onClick={retour} className="cancel">Non</button>
                </div>
            </div>

        </>
    )
}
