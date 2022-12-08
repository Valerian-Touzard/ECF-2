import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { LocataireType } from '../../Models/LocataireType';
import { LocationType } from '../../Models/LocationType';
import { VehiculeType } from '../../Models/VehiculeType';
import { locataireService } from '../../Services/LocataireService';
import { locationService } from '../../Services/LocationService';
import { vehiculeService } from '../../Services/VehiculeService';
import "../../Css/Common/formulaire.css";

export const FormulaireAjoutLocation = () => {
    const { id } = useParams();
    const [isValid, setisValid] = useState<boolean>();
    const [vehiculeLouer, setVehiculeLouer] = useState<VehiculeType>();
    const [listLocataires, setListLocataires] = useState<LocataireType[]>();
    const [newLocation, setNewLocation] = useState<LocationType>({
        id: uuid(),
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
     * Change la valeur de l'attribut correspondant avec la valeur de l'input et appelle la fonction calculePrixLocation()
     * @param event ChangeEvent<HTMLInputElement>
     */
    const handleChangeDateFin = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        calculePrix(event.target.value);
    }

    /**
     * Permet de calculer le prix total de la location et de l'enregistrer dans le state
     */
    const calculePrix = (dateFin: string) => {
        // On définit un objet LocationType qui prends la valeurs des attibuts du state
        let newLoca: LocationType = {
            id: newLocation.id,
            locataire: newLocation.locataire,
            idVehicule: newLocation.idVehicule,
            imma: newLocation.imma,
            dateDebut: newLocation.dateDebut,
            dateFin: dateFin,
            prixLoca: ""
        }

        // Création de deux variables locales qui enregistre les dates de l'utilisateur
        let dateDebutLoca = new Date(newLocation.dateDebut);
        let dateFinLoca = new Date(dateFin);

        if (dateDebutLoca < dateFinLoca) {
            setisValid(true)
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
        }else{
            setisValid(false);
        }


    }

    /**
     * Permet d'ajouter une location dans la db
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const addNewLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // on empêche le comportement par défaut du bouton

        // On crée un objet véhicule et locataire 
        let vehicule: VehiculeType = vehiculeLouer as VehiculeType;
        vehicule.dispo = false; // On change la disponibilité du véhicule
        let location: LocationType = newLocation;
        location.imma = vehicule.imma; // On enregistre l'immatriculation du véhicule
        location.idVehicule = vehicule?.id as string;
        // location.locataire.id = newLocation.locataire.id as string;

        setNewLocation(location); // On change le state du véhicule
        setVehiculeLouer(vehicule); // On change le state de la location

        // vehiculeService.modifVehicule(vehicule, vehicule.id); // On enregistre les modification du véhicule dans la db
        locationService.addNewLocation(newLocation, vehicule.id); // On enregistre la nouvelle location dans la base
        locationService.getAllLocations();
        navigate("/location") // on retourne sur la page d'affichage de toutes les locations
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
                    <label htmlFor="locataire">Le client:</label>
                    <select name='locataire' onChange={handleChange}>
                        <option value=""></option>
                        {listLocataires && listLocataires.map((locataire) => {
                            return <option value={locataire.id} key={locataire.id}>{locataire.nom + " " + locataire.prenom}</option>
                        })}
                    </select>
                </div>
                <div className="champ">
                    <label htmlFor="DateDebut">Date de début</label>
                    <input type="date" name="dateDebut" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="dateFin">Date de fin</label>
                    <input type="date" name="dateFin" onChange={handleChangeDateFin} min={new Date().toISOString().slice(0, -14)} />
                </div>
                {isValid === false ? <p className='warning'>Attention, la date de fin doit être supérieur à la date de début !</p> : ""}
                <div className="champ">
                    <p>Estimation prix: {newLocation.prixLoca}€</p>
                </div>

                {isValid === true ? <button type="submit" className="bouton" onClick={addNewLocation}>Enregistrer location</button> : ""}

            </form>
        </>
    )
}
