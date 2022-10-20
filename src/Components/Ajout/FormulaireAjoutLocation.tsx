import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { LocataireType } from '../../Models/LocataireType';
import { LocationType } from '../../Models/LocationType';
import { VehiculeType } from '../../Models/VehiculeType';
import { locataireService } from '../../Services/LocataireService';
import { locationService } from '../../Services/LocationService';
import { vehiculeService } from '../../Services/VehiculeService';

export const FormulaireAjoutLocation = () => {
    const { id } = useParams();
    const [vehiculeLouer, setVehiculeLouer] = useState<VehiculeType>();
    const [listLocataires, setListLocataires] = useState<LocataireType[]>();
    const [newLocation, setNewLocation] = useState<LocationType>({
        id: uuid(),
        nomClient: "",
        imma: "",
        dateDebut: "",
        dateFin: "",
        prixLoca: ""

    });

    const navigate = useNavigate();



    useEffect(() => {
        vehiculeService.getOneVehiculeById(id as string).then(data => setVehiculeLouer(data));
        locataireService.getAllLocataires().then(data => setListLocataires(data));
    }, [id]);



    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input
     * @param event ChangeEvent<HTMLInputElement | HTMLSelectElement>
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event.preventDefault();
        setNewLocation({ ...newLocation, [event.target.name]: event.target.value });
    }

    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input et appelle la fonction calcule prix location
     * @param event 
     */
    const handleChangeDateFin = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        calculePrix(event.target.value)
    }

    /**
     * Permet de calculer le prix total de la location et de l'enregistrer dans le state
     */
    const calculePrix = (dateFin: string) => {
        // On définit un objet LocationType qui prends la valeurs des attibuts du state
        let newLoca: LocationType = {
            id: newLocation.id,
            nomClient: newLocation.nomClient,
            imma: newLocation.imma,
            dateDebut: newLocation.dateDebut,
            dateFin: dateFin,
            prixLoca: ""
        }

        // Création de deux variables locales qui enregistre les dates de l'utilisateur
        let dateDebutLoca = new Date(newLocation.dateDebut);
        let dateFinLoca = new Date(dateFin);

        // récupère le temps en milliseconde qui sépare les deux dates
        let tmp = dateFinLoca.getTime() - dateDebutLoca.getTime();

        // Permet de récupèrer le nombre de jours entre les deux dates
        tmp = Math.floor((((tmp / 1000) / 60) / 60) / 24);

        // On calcule le prix totale de la location en prenant en compte le prix de location de 1 jours de la voiture
        let prixTotale: number = tmp * parseInt(vehiculeLouer?.prix as string);

        // On convertie la variable en string 
        newLoca.prixLoca = prixTotale.toString();

        // On enregistre la valeurs
        setNewLocation(newLoca)
    }

    /**
     * Permet d'ajouter une location dans la db
     * @param event 
     */
    const addNewLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let vehicule: VehiculeType = vehiculeLouer as VehiculeType;
        vehicule.dispo = false;
        let location: LocationType = newLocation;
        location.imma = vehicule.imma;
        setNewLocation(location);
        setVehiculeLouer(vehicule);
        vehiculeService.modifVehicule(vehicule, vehicule.id);
        locationService.addNewLocation(newLocation);
        navigate("/location")
    }

    return (
        <>
            <div className='retour'>
                <Link to="/vehicule">Retour</Link>
            </div>

            <form className='formulaire'>
                <div className="champ">
                    <p>Marque : {vehiculeLouer?.marque}</p>
                </div>
                <div className="champ">
                    <p>Modele: {vehiculeLouer?.modele}</p>
                </div>
                <div className="champ">
                    <p>Immatriculation: {vehiculeLouer?.imma}</p>
                </div>
                <div className="champ">
                    <p>États du véhicule : {vehiculeLouer?.etat}</p>
                </div>


                <div className="champ">
                    <label htmlFor="client">Le client:</label>
                    <select name='nomClient' onChange={handleChange}>
                        <option value=""></option>
                        {listLocataires && listLocataires.map((locataire) => {
                            return <option value={locataire.nom + " " + locataire.prenom} key={locataire.id}>{locataire.nom + " " + locataire.prenom}</option>
                        })}
                    </select>
                </div>
                <div className="champ">
                    <label htmlFor="DateDebut">Date de début</label>
                    <input type="date" name="dateDebut" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="dateFin">Date de fin</label>
                    <input type="date" name="dateFin" onChange={handleChangeDateFin} />
                </div>
                <div className="champ">
                    <p>Estimation prix: {newLocation.prixLoca}€</p>
                </div>

                <button type="submit" className="bouton" onClick={addNewLocation}>Enregistrer location</button>
            </form>
        </>
    )
}
