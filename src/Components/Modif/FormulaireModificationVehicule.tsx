import React, { ChangeEvent, useEffect, useState, } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VehiculeType } from '../../Models/VehiculeType';
import { vehiculeService } from '../../Services/VehiculeService';
import "../../Css/Common/formulaire.css";

export const FormulaireModificationVehicule = () => {
    const { id } = useParams();
    const [vehiculeAModiff, setVehiculeAModiff] = useState<VehiculeType>({
        id: "",
        marque: "",
        modele: "",
        type: "",
        imma: "",
        etat: "",
        prix: "",
        dispo: true,
    });

    let navigate = useNavigate();


    useEffect(() => {
        getOneVehiculeById(id as string);
    }, [id])


    /**
     * Permet de renvoyer les données du locataire identifier par son id
     * 
     * @param idVehicule string
     */
    const getOneVehiculeById = (idVehicule: string) => {
        vehiculeService.getOneVehiculeById(idVehicule).then(data => setVehiculeAModiff(data)).catch(err => console.log(err));
    }

    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input
     * @param event ChangeEvent<HTMLInputElement | HTMLSelectElement>
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setVehiculeAModiff({ ...vehiculeAModiff, [event.target.name]: event.target.value })
    }

    /**
     * Change la valeur de l'attribut dispo avec la valeur de la checkbox
     * @param event ChangeEvent<HTMLInputElement>
     */
    const handleChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
        setVehiculeAModiff({ ...vehiculeAModiff, [event.target.name]: event.target.checked });
    }

    /**
     * Envoie le state du locataire modifier
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const modifVehicule = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        vehiculeService.modifVehicule(vehiculeAModiff, vehiculeAModiff.id);
        navigate("/");
    }

    return (
        <>
            <div className='retour'>
                <Link to="/vehicule">Retour</Link>
            </div>

            <form className='formulaire'>
                <label htmlFor="marque">marque</label>
                <input type="text" value={vehiculeAModiff.marque} name="marque" onChange={handleChange} />

                <label htmlFor="modele">modele</label>
                <input type="text" value={vehiculeAModiff.modele} name="modele" onChange={handleChange} />

                <label htmlFor="type">type</label>
                <input type="text" value={vehiculeAModiff.type} name="type" onChange={handleChange} />

                <label htmlFor="imma">immatriculation</label>
                <input type="text" value={vehiculeAModiff.imma} name="imma" onChange={handleChange} />

                <label htmlFor="tel">Etat de la voiture</label>
                <select name='etat' onChange={handleChange} value={vehiculeAModiff.etat}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>

                <label htmlFor="prix">Prix location</label>
                <input type="number" value={vehiculeAModiff.prix} name="prix" onChange={handleChange} />

                <label htmlFor="dispo">disponible</label>
                <input type="checkbox" checked={vehiculeAModiff.dispo} name="dispo" onChange={handleChangeCheckBox} />

                <button type="submit" onClick={modifVehicule} className="bouton">Ajouter véhicule</button>
            </form>
        </>
    )
}