import React, { useEffect, useState } from 'react'
import { locataireService } from '../Services/LocataireServices';
import { Locataire } from '../Components/Locataire';
import { AddLocataire } from '../Layouts/AddLocataire'
import "../css/Locataire/style.css"
export type locataire = {
    id: string,
    nom: string,
    prenom: string,
    dateNaiss: string,
    email: string,
    tel: string,
}

export const ListLocataires = () => {

    const [locataires, setLocataires] = useState<locataire[]>([])
    const [isClicked, setisClicked] = useState<boolean>(false)
    const [textBouton, setTextBouton] = useState<string>('Ajouter client')

    useEffect(() => {
        findAllLocataires();
    }, []);

    /**
     * Permet de récupérer la liste des locataires
     */
    const findAllLocataires = async () => {
        await locataireService.findAllLocataires()
            .then(async data => await setLocataires(data));
    }

    /**
     * Modifie un locataire via son id
     * @param id string
     * @param newLocataire locataire
     */
    const modifyLocataire = async (id:string, newLocataire: locataire) => {
        await locataireService.modifyLocataire(id, newLocataire);
    }

    /**
     * Ajoute un locataire
     * @param newLocataire locataire
     */
    const addLocataire = async (newLocataire: locataire) => {
        await locataireService.addLocataire(newLocataire).then( await findAllLocataires);
    }

    /**
     * supprime un locataire via son id
     * @param id string
     */
    const deleteLocataire = async (id:string) => {
        await locataireService.deleteLocataire(id).then(await findAllLocataires);
    }

/**
 * Permet d'afficher/cacher le formulaire d'ajout de locataire
 */
    const changeVisibility = () =>{
        if (!isClicked) {
           setisClicked(true);
           setTextBouton("fermer formulaire");
        }else{
            setisClicked(false);
            setTextBouton("Ajouter client");
        }
    }

    return (
        <>
        <button onClick={changeVisibility} className="bouton">{textBouton}</button>
            { isClicked? <AddLocataire addLocataire={addLocataire} />: ""}
            <div >
                <ul>
                    {locataires.map((locataire, id) => {
                        return <Locataire unlocataire={locataire} key={id} deleteLocataire={deleteLocataire} modifyLocataire={modifyLocataire}/>
                    })}
                </ul>
            </div>
        </>
    )
}
