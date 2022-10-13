import React, { useState } from 'react'
import { locataire } from '../Pages/ListLocataires';
import uuid from 'react-uuid';
import { locataireService } from '../Services/LocataireServices';
import { unLocataire } from '../Components/Locataire';

export type propsType ={
    unLocataire: unLocataire,
}


export const ModifyLocataire = (props: propsType) => {
    const [newLocataire, setNewLocataire] = useState<locataire>(props.unLocataire.unlocataire);
    const [nom, setNom] = useState<string>(props.unLocataire.unlocataire.nom);
    const [prenom, setPrenom] = useState<string>(props.unLocataire.unlocataire.prenom);
    const [dateNaiss, setdateNaiss] = useState<string>(props.unLocataire.unlocataire.dateNaiss);
    const [email, setEmail] = useState<string>(props.unLocataire.unlocataire.email);
    const [tel, setTel] = useState<string>(props.unLocataire.unlocataire.tel);



    /**
     * Ensemble de méthode qui permete de mettre a jours le state
     * @param event : React.ChangeEvent<HTMLInputElement>
     */
    const handleChangeNom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNom(event.target.value);
    }
    const handleChangePrenom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrenom(event.target.value);
    }
    const handleChangeDateNaiss = (event: React.ChangeEvent<HTMLInputElement>) => {
        setdateNaiss(event.target.value);
    }
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handleChangeTel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTel(event.target.value);
    }

    /**
     * Méthode qui envoie le nouvelle utilisateur créer
     */
    const modifyLocataire = (event: React.FormEvent) => {
        event.preventDefault();
        let newLocataire: locataire = {
            id: uuid(),
            nom: nom as string,
            prenom: prenom as string,
            dateNaiss: dateNaiss as string,
            email: email as string,
            tel: tel as string,
        }
        setNewLocataire(newLocataire);
        
    }


    return (
        <>
            <form>
                <label htmlFor="nom">Nom</label>
                <input type="text" onChange={handleChangeNom} value={nom} />
                <label htmlFor="prenom">Prénom</label>
                <input type="text" onChange={handleChangePrenom} value={prenom} />
                <label htmlFor="dateNaiss">Date de naissance</label>
                <input type="date" onChange={handleChangeDateNaiss} value={dateNaiss} />
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleChangeEmail} value={email} />
                <label htmlFor="tel">Téléphone</label>
                <input type="phone" onChange={handleChangeTel} value={tel} />
                <button type="submit" onClick={modifyLocataire}>Enregistrer</button>
            </form>
        </>
    )
}
