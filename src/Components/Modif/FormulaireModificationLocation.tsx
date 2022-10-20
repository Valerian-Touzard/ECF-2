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
        idClient: "",
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
        setLocationAModiff({ ...locationAModiff, [event.target.name]: event.target.value });
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
                    <input type="date" name='dateFin' value={locationAModiff?.dateFin} onChange={handleChange}/>
                </div>

                <button type="submit" onClick={modifLocation} className="bouton">Modifier location</button>
            </form>
        </>
    )
}
