const URI = "http://localhost:3001/locataires";


class LocataireService {

    findAllLocataires() {
        return fetch(URI)
            .then(response => response.json())
            .catch(err => console.error(err));
    }


    addLocataire(unLocataire: any) {
        return fetch(URI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unLocataire),
        })

    };

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