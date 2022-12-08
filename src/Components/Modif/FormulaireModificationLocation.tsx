import React, { ChangeEvent, useEffect, useState, } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LocataireType } from '../../Models/LocataireType'
import { locataireService } from '../../Services/LocataireService';
import "../../Css/Common/formulaire.css";
import { VehiculeType } from '../../Models/VehiculeType';
import { LocationType } from '../../Models/LocationType';
import { locationService } from '../../Services/LocationService';
import { vehiculeService } from '../../Services/VehiculeService';

export const FormulaireModificationLocation = () => {
    const { id } = useParams();
    const { idClient } = useParams();
    const { idVehicule } = useParams();

    const [locationAModiff, setLocationAModiff] = useState<LocationType>({
        id: "",
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
        prixLoca: ""
    });
    const [vehicule, setVehicule] = useState<VehiculeType>();

    let navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [id, idVehicule, idClient])


    /**
     * Permet de récupérer les donnée des différentes states
     * 
     */
    const getData = () => {
        locationService.getOneLocationById(id as string).then(data => setLocationAModiff(data));
        vehiculeService.getOneVehiculeById(idVehicule as string).then(data => setVehicule(data));
    }

    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input
     * @param event ChangeEvent<HTMLInputElement>
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event.preventDefault();
        calculePrix(event.target.value)
    }

    /**
     * Permet de calculer le prix total de la location et de l'enregistrer dans le state après modification de la date
     */
    const calculePrix = (dateFin: string) => {
        
        // On définit un objet LocationType qui prends la valeurs des attibuts du state
        let locaAModiff: LocationType = {
            id: locationAModiff.id,
            locataire: locationAModiff.locataire,
            idVehicule: locationAModiff.idVehicule,
            imma: locationAModiff.imma,
            dateDebut: locationAModiff.dateDebut,
            dateFin: dateFin,
            prixLoca: ""
        }

        // Création de deux variables locales qui enregistre les dates de l'utilisateur
        let dateDebutLoca = new Date(locationAModiff.dateDebut);
        let dateFinLoca = new Date(dateFin);

        // récupère le temps en milliseconde qui sépare les deux dates
        let tmp = dateFinLoca.getTime() - dateDebutLoca.getTime();

        // Permet de récupèrer le nombre de jours entre les deux dates
        tmp = Math.floor((((tmp / 1000) / 60) / 60) / 24);

        // On calcule le prix totale de la location en prenant en compte le prix de location de 1 jours de la voiture
        let prixTotale: number = tmp * parseInt(vehicule?.prix as string);

        // On convertie la variable en string 
        locaAModiff.prixLoca = prixTotale.toString();

        // On enregistre la valeurs
        setLocationAModiff(locaAModiff)
    }

    /**
     * Envoie le state de la location modifier
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const modifLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        locationService.modifLocation(locationAModiff as LocationType, locationAModiff?.id as string);
        navigate("/location");
    }

    return (
        <>
            <div className='retour'>
                <Link to="/location">Retour</Link>
            </div>

            <form className='formulaire'>
                <div className="champ">
                    <label htmlFor="dateFin">Date de fin</label>
                    <input type="date" name='dateFin' value={locationAModiff?.dateFin} onChange={handleChange} min={new Date().toISOString().slice(0, -14)}/>
                </div>
                <div className="champ">
                    <p>nouveau Prix: {locationAModiff.prixLoca}</p>
                </div>
                <button type="submit" onClick={modifLocation} className="bouton">Modifier location</button>
            </form>
        </>
    )
}
