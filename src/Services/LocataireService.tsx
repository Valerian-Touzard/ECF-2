const URI = "http://localhost:3001/locataires";


class LocataireService {

    /**
     * retourne la liste des locataire
     * @returns JSON
     */
    async getAllLocataires() {
        return await fetch(URI)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    /**
     * Méthode qui retourne un locataire via son id
     * @param id string
     * @returns json
     */
    getOneLocataireById(id: string) {
        return fetch(URI + "/" + id).then(response => response.json()).catch(err => console.log(err));
    }

    /**
     * Ajoute 1 locataire
     * @param unLocataire : locataire
     * @returns JSON
     */
    async addLocataire(unLocataire: any) {
        return await fetch(URI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unLocataire),
        }).then(response => response.json()).catch(err => console.error(err));

    };

    /**
     * Modifie un locataire
     * @param id 
     * @param unLocataire : locataire
     * @returns JSOn
     */
    modifyLocataire(id: string, unLocataire: any) {
        return fetch(URI + `/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unLocataire),
        }).then(response => response.json()).catch(err => console.error(err));
    }

    /**
     * Supprimer un locataire
     * @param id : string
     * @returns JSON
     */
    async deleteLocataire(id: string) {
        return await fetch(URI + `/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}

export const locataireService = new LocataireService();