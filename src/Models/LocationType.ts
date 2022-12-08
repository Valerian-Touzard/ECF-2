import { LocataireType } from './LocataireType';
export interface LocationType{
    id: string,
    locataire: LocataireType,
    idVehicule: string,
    imma: string,
    dateDebut: string,
    dateFin: string,
    prixLoca: string,
}