import React, { ChangeEvent, useEffect, useState, } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LocataireType } from '../../Models/LocataireType'
import { locataireService } from '../../Services/LocataireService';
import "../../Css/Common/formulaire.css";

export const FormulaireModificationLocataire = () => {
    const { id } = useParams();
    const [locataireAModiff, setLocataireAModiff] = useState<LocataireType>({
        id: "",
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateNaiss: "",
    });

    let navigate = useNavigate();


    useEffect(() => {
        getOneLocataireById(id as string);
    }, [id])


    /**
     * Permet de renvoyer les données du locataire identifier par son id
     * 
     * @param idLocataire string
     */
    const getOneLocataireById = (idLocataire: string) => {
        locataireService.getOneLocataireById(idLocataire).then(data => setLocataireAModiff(data)).catch(err => console.log(err));
    }
    /**
         * Change la valeur de l'attribut correspondant avec la valeur de l'input
         * @param event ChangeEvent<HTMLInputElement>
         */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocataireAModiff({ ...locataireAModiff, [event.target.name]: event.target.value })
    }

    /**
     * Envoie le state du locataire modifier
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const modifLocataire = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        locataireService.modifyLocataire(locataireAModiff.id, locataireAModiff );
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
                    <input type="text" value={locataireAModiff.nom} name="nom" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="prenom">prenom</label>
                    <input type="text" value={locataireAModiff.prenom} name="prenom" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="email">email</label>
                    <input type="email" value={locataireAModiff.email} name="email" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="nom">date de naissance</label>
                    <input type="date" value={locataireAModiff.dateNaiss} name="dateNaiss" onChange={handleChange} />
                </div>
                <div className="champ">
                    <label htmlFor="tel">Telephone</label>
                    <input type="number" value={locataireAModiff.tel} name="tel" onChange={handleChange} />
                </div>

                <button type="submit" onClick={modifLocataire} className="bouton">Modifier locataire</button>
            </form>
        </>
    )
}
