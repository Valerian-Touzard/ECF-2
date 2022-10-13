const URI = "http://localhost:3001/locataires";


class LocataireService {
    
    findAllLocataires(){
        return fetch(URI)
               .then(response => response.json())
               .catch(err => console.error(err));
    }


}

export const locataireService = new LocataireService();