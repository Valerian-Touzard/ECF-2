import React, { ButtonHTMLAttributes, FormEvent, useState } from 'react'
import { unLocataire } from '../Components/Locataire';
import { locataire } from '../Pages/ListLocataires';
import uuid from 'react-uuid';

export type propsType={
    addLocataire: any
}

export const AddLocataire = (props: propsType) => {

    const [newLocataire, setNewLocataire] = useState<locataire>({
        id: "",
        nom: "",
        prenom: "",
        dateNaiss: "",
        email: "",
        tel: ""
    });
    const [nom, setNom] = useState<string>();
    const [prenom, setPrenom] = useState<string>();
    const [dateNaiss, setdateNaiss] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [tel, setTel] = useState<string>();



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
    const addLocataire = (event: React.FormEvent) => {
        event.preventDefault();
        let newLocataire: locataire={
            id:uuid(),
            nom: nom as string,
            prenom: prenom as string,
            dateNaiss: dateNaiss as string,
            email: email as string,
            tel: tel as string,
        }
        setNewLocataire(newLocataire);
        refreshForm();
        props.addLocataire(newLocataire);
        
    }

    /**
     * Méthode qui remet le formulaire a vide
     */
    const refreshForm = () =>{
        setNom("");
        setPrenom("");
        setdateNaiss("");
        setEmail("");
        setTel("");
    }


    return (
        <>
            <form>
                <label htmlFor="nom">Nom</label>
                <input type="text" onChange={handleChangeNom} value={nom}/>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" onChange={handleChangePrenom} value={prenom}/>
                <label htmlFor="dateNaiss">Date de naissance</label>
                <input type="date" onChange={handleChangeDateNaiss} value={dateNaiss}/>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleChangeEmail} value={email}/>
                <label htmlFor="tel">Téléphone</label>
                <input type="phone" onChange={handleChangeTel} value={tel}/>
                <button type="submit" onClick={addLocataire}>Enregistrer</button>
            </form>
        </>
    )
}
