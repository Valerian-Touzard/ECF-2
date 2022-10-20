import React, { useState, useEffect } from 'react'
import { LocataireType } from '../Models/LocataireType'
import { locationService } from '../Services/LocationService'

export const ListLocation = () => {

    const [ListLocations, setListLocations] = useState<LocataireType[]>([])


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
        <div>ListLocation</div>
    )
}
