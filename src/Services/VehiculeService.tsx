import { VehiculeType } from "../Models/VehiculeType";

const URI = "http://localhost:3001/vehicules";

class VehiculeService {

    /**
     * Méthode qui retourne la liste de tout les véhicules
     * @returns la liste de tout les véhicules
     */
    getAllVehicules() {
        return fetch(URI)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    /**
     * Méthode qui retourne un véhicule via son id
     * @param id string
     * @returns json
     */
    getOneVehiculeById(id: string) {
        return fetch(URI + "/" + id).then(response => response.json()).catch(err => console.log(err));
    }


    /**
     * Méthode qui ajoute un véhicule dans la bdd
     * @param vehicule VehiculeType
     * @returns json
     */
    addNewVehicule(vehicule: VehiculeType) {
        return fetch(URI, {
            method: "POST",
            body: JSON.stringify(vehicule),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).catch(err => console.log(err));
    }


    /**
     * Méthode qui ajoute un véhicule dans la bdd
     * @param vehicule VehiculeType
     * @param idVehicule string
     * @returns json
     */
    modifVehicule(vehicule: VehiculeType, idVehicule: string) {
        return fetch(URI + "/" + idVehicule, {
            method: "PUT",
            body: JSON.stringify(vehicule),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).catch(err => console.log(err));
    }

    /**
     * Méthode qui supprime un vehicule via son id
     * @param id string
     * @returns 
     */
    deleteVehicule(id: string) {
        return fetch(URI + "/" + id, {
            method: "DELETE",
        }).then(response => response.json()).catch(err => console.log(err));
    }

}

export const vehiculeService = Object.freeze(new VehiculeService());