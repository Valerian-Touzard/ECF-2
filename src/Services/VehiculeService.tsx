const URI = "http://localhost:3001/vehicules";


class VehiculeService {

    /**
     * retourne la liste des vehicules
     * @returns 
     */
    findAllVehicule() {
        return fetch(URI)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    /**
     * Ajoute 1 vehicule
     * @param unVehicule : vehicule
     * @returns 
     */
    addVehicule(unVehicule: any) {
        return fetch(URI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unVehicule),
        })

    };

    /**
     * Modifie un vehicule
     * @param id 
     * @param unVehicule : vehicule
     * @returns 
     */
    modifyVehicule(id: string, unVehicule: any) {
        return fetch(URI+`/${id}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unVehicule),
        })
    }

    /**
     * Supprimer un vehicule
     * @param id : string
     * @returns 
     */
    deleteVehicule(id: string){
        return fetch (URI+`/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export const vehiculeService = new VehiculeService();