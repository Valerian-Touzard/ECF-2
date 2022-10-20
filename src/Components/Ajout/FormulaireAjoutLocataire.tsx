import React, { ChangeEvent, useState } from 'react'
import { LocataireType } from '../../Models/LocataireType';
import uuid from 'react-uuid';
import { locataireService } from '../../Services/LocataireService';
import { Link, useNavigate } from 'react-router-dom';
import "../../Css/Common/formulaire.css";

export const FormulaireAjoutLocataire = () => {

    const [newLocataire, setNewLocataire] = useState<LocataireType>({
        id: uuid(),
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateNaiss: "",
    });

    let navigate = useNavigate();


    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input
     * @param event ChangeEvent<HTMLInputElement>
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewLocataire({ ...newLocataire, [event.target.name]: event.target.value })
    }

    /**
     * Envoie le state du nouveau locataire a l'api pour enregistrement
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const addNewLocataire = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        locataireService.addLocataire(newLocataire);
        navigate("/");
    }

    return (
        <>
            <div className='retour'>
                <Link to="/">Retour</Link>
            </div>

            <form className='formulaire'>
                <div className="champ">
                    <label htmlFor="nom">nom</label>
                    <input type="text" value={newLocataire.nom} name="nom" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="prenom">prenom</label>
                    <input type="text" value={newLocataire.prenom} name="prenom" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="email">email</label>
                    <input type="email" value={newLocataire.email} name="email" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="nom">date de naissance</label>
                    <input type="date" value={newLocataire.dateNaiss} name="dateNaiss" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="tel">Telephone</label>
                    <input type="number" value={newLocataire.tel} name="tel" onChange={handleChange} />
                </div>

                <button type="submit" onClick={addNewLocataire} className="bouton">Ajouter client</button>
            </form>
        </>
    )
}
