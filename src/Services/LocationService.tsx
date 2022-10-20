import { LocationType } from "../Models/LocationType";

const URI = "http://localhost:3001/locations";

class LocationService{
     /**
     * Méthode qui retourne la liste de toutes les locations
     * @returns JSON
     */
      getAllLocations() {
        return fetch(URI)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    /**
     * Méthode qui retourne une Location via son id
     * @param id string
     * @returns json
     */
    getOneLocationById(id: string) {
        return fetch(URI + "/" + id).then(response => response.json()).catch(err => console.log(err));
    }


    /**
     * Méthode qui ajoute une Location dans la bdd
     * @param location LocationType
     * @returns json
     */
    addNewLocation(location: LocationType) {
        return fetch(URI, {
            method: "POST",
            body: JSON.stringify(location),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).catch(err => console.log(err));
    }


    /**
     * Méthode qui ajoute une location dans la bdd
     * @param location LocationType
     * @param id string
     * @returns json
     */
    modifLocation(location: LocationType, id: string) {
        return fetch(URI + "/" + id, {
            method: "PUT",
            body: JSON.stringify(location),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).catch(err => console.log(err));
    }

    /**
     * Méthode qui supprime une location via son id
     * @param id string
     * @returns 
     */
    deleteLocation(id: string) {
        return fetch(URI + "/" + id, {
            method: "DELETE",
        }).then(response => response.json()).catch(err => console.log(err));
    }

}

export const locationService = Object.freeze(new LocationService());