import { vehiculeType } from "../Pages/ListVehicule";

const URI = "http://localhost:3001/vehicules";

class VehiculeService {

    /**
     * retourne la liste des vehicules
     * @returns JSON
     */
    findAllVehicule() {
        return fetch(URI)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    /**
     * Ajoute 1 vehicule
     * @param unVehicule : vehicule
     * @returns JSON
     */
    addVehicule(unVehicule: vehiculeType) {
        return fetch(URI, {
            method: "POST",
            body: JSON.stringify(unVehicule),
            headers: {
                "Content-Type": "application/json"
            }
            
        }).then(response => response.json()).catch(err => console.error(err));

    };

    /**
     * Supprimer un vehicule
     * @param idVehicule : string
     * @returns JSON
     */
    deleteVehicule(ididVehicule: string) {
        return fetch(URI + `/${ididVehicule}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).catch(err => console.error(err));
    }
}

export const vehiculeService = new VehiculeService();