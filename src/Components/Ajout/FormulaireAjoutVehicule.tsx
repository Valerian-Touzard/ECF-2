import React, { ChangeEvent, useState } from 'react'
import { VehiculeType } from '../../Models/VehiculeType'
import uuid from 'react-uuid';
import { vehiculeService } from '../../Services/VehiculeService';
import { Link, useNavigate } from 'react-router-dom';
import "../../Css/Common/formulaire.css";

export const FormulaireAjoutVehicule = () => {

    const [newVehicule, setNewVehicule] = useState<VehiculeType>({
        id: uuid(),
        marque: "",
        modele: "",
        type: "",
        imma: "",
        etat: "A",
        prix: "",
        dispo: true,
    })
    let navigate = useNavigate();

    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input
     * @param event ChangeEvent<HTMLInputElement | HTMLSelectElement>
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setNewVehicule({ ...newVehicule, [event.target.name]: event.target.value })
    }

    /**
     * Change la valeur de l'attribut dispo avec la valeur de la checkbox
     * @param event ChangeEvent<HTMLInputElement>
     */
    const handleChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
        setNewVehicule({ ...newVehicule, [event.target.name]: event.target.checked });
    }


    /**
     * Methode qui effectue une requete API pour l'insertion du nouveau véhicule
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const addNewVehicule = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        vehiculeService.addNewVehicule(newVehicule);
        vehiculeService.getAllVehicules();
        navigate("/vehicule");
    }

    return (
        <>
            <div className='retour'>
                <Link to="/vehicule">Retour</Link>
            </div>

            <form className='formulaire'>
                <div className="champ">
                    <label htmlFor="marque">marque</label>
                    <input type="text" value={newVehicule.marque} name="marque" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="modele">modele</label>
                    <input type="text" value={newVehicule.modele} name="modele" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="type">type</label>
                    <input type="text" value={newVehicule.type} name="type" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="imma">immatriculation</label>
                    <input type="text" value={newVehicule.imma} name="imma" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="tel">Etat de la voiture</label>
                    <select name='etat' onChange={handleChange}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                </div>
                <div className="champ">
                    <label htmlFor="prix">Prix location</label>
                    <input type="number" value={newVehicule.prix} name="prix" onChange={handleChange} />
                </div>
                <div className="dispo">
                    <label htmlFor="dispo">disponible</label>
                    <input type="checkbox" checked={newVehicule.dispo} name="dispo" onChange={handleChangeCheckBox} />
                </div>

                <button type="submit" onClick={addNewVehicule} className="bouton">Ajouter véhicule</button>
            </form>
        </>
    )
}
