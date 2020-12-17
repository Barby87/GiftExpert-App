import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

// Recibiendo category desde GifGrid
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        // Función getGifs retorna una promesa
        getGifs(category).then( imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })
    // Si la categoría cambia, se volverá a ejecutar useEffect
    }, [ category ]);

    return state; // {data: [], loading: true}
}