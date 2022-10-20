import React, { useState, useEffect } from 'react'
import { Location } from '../Layouts/Location'
import { LocationType } from '../Models/LocationType'
import { locationService } from '../Services/LocationService'

export const ListLocations = () => {

    const [listLocations, setListLocations] = useState<LocationType[]>([])

    useEffect(() => {
      getAllLocations()
    }, [])
    
    /**
     * Permet de récupérer les locations de la base de données
     */
    const getAllLocations = () => {
        locationService.getAllLocations().then(data => setListLocations(data))
    }


    return (
        <>
            <table className='tableau-style'>
                <thead>
                    <tr>
                        <th>Nom du locataire</th>
                        <th>immatriculation</th>
                        <th>Date de début</th>
                        <th>Date de Fin</th>
                        <th>prix</th>
                        <th>option</th>
                    </tr>
                </thead>

                <tbody>
                    {listLocations && listLocations.map((location) => {
                        return <tr key={location.id}><Location location={location} /></tr>
                    })}
                </tbody>
            </table>

        </>
    )
}
