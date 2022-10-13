const URI = "http://localhost:3001/locataires";


class LocataireService {

    /**
     * retourne la liste des locataire
     * @returns 
     */
    findAllLocataires() {
        return fetch(URI)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    /**
     * Ajoute 1 locataire
     * @param unLocataire : locataire
     * @returns 
     */
    addLocataire(unLocataire: any) {
        return fetch(URI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unLocataire),
        })

    };

    /**
     * Modifie un locataire
     * @param id 
     * @param unLocataire : locataire
     * @returns 
     */
    modifyLocataire(id: string, unLocataire: any) {
        return fetch(URI+`/${id}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unLocataire),
        })
    }

    /**
     * Supprimer un locataire
     * @param id : string
     * @returns 
     */
    deleteLocataire(id: string){
        return fetch (URI+`/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}

export const locataireService = new LocataireService();