import React, { useState } from 'react'
import uuid from 'react-uuid';
import { vehiculeType } from '../Pages/ListVehicule';

export type propsType={
    addVehicule: any
}

export const AddVehicule = (props: propsType) => {

    const [newVehicule, setNewVehicule] = useState<vehiculeType>({
        idVehicule: "",
        marque: "",
        modele: "",
        imma: "",
        etat: "",
        dispo: true,
        type: "",
        prixLoca: "",
    });
    const [marque, setMarque] = useState<string>();
    const [modele, setModele] = useState<string>();
    const [imma, setImma] = useState<string>();
    const [etat, setEtat] = useState<string>();
    const [dispo, setDispo] = useState<boolean>();
    const [type, setType] = useState<string>();
    const [prixLoca, setPrixLoca] = useState<string>();



    /**
     * Ensemble de méthode qui permete de mettre a jours le state
     * @param event : React.ChangeEvent<HTMLInputElement>
     */
    const handleChangeMarque = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMarque(event.target.value);
    }
    const handleChangeModele = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModele(event.target.value);
    }
    const handleChangeImma = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImma(event.target.value);
    }
    const handleChangeEtat = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEtat(event.target.value);
    }
    const handleChangeDispo = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setDispo(event.target.value);
    }
    const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    }
    const handleChangeprixLoca = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrixLoca(event.target.value);
    }

    /**
     * Méthode qui envoie le nouvelle utilisateur créer
     */
    const addVehicule = (event: React.FormEvent) => {
        event.preventDefault();
        let newVehiculeTmp: vehiculeType={
            idVehicule:uuid(),
            marque: marque as string,
            modele: modele as string,
            imma: imma as string,
            etat: etat as string,
            dispo: dispo as boolean,
            type: type as string,
            prixLoca: prixLoca as string,
        }
        setNewVehicule(newVehiculeTmp);
        refreshForm();
        props.addVehicule(newVehicule);
        
    }

    /**
     * Méthode qui remet le formulaire a vide
     */
    const refreshForm = () =>{
        setMarque("");
        setModele("");
        setImma("");
        setEtat("");
        setDispo(false);
        setType("");
        setPrixLoca("");
    }


    return (
        <>
            <form>
                <label htmlFor="marque">marque</label>
                <input type="text" onChange={handleChangeMarque} value={marque}/>
                <label htmlFor="modele">modele</label>
                <input type="text" onChange={handleChangeModele} value={modele}/>
                <label htmlFor="imma">immatriculation</label>
                <input type="text" onChange={handleChangeImma} value={imma}/>
                <label htmlFor="etat">Etat</label>
                <input type="text" onChange={handleChangeEtat} value={etat}/>
                <label htmlFor="dispo">Disponible</label>
                <input type="checkbox" onChange={handleChangeDispo}/>
                <label htmlFor="type">Type</label>
                <input type="type" onChange={handleChangeType} value={type}/>
                <label htmlFor="prix">PrixLoacation</label>
                <input type="phone" onChange={handleChangeprixLoca} value={prixLoca}/>
                <button type="submit" onClick={addVehicule}>Enregistrer</button>
            </form>
        </>
    )
}
