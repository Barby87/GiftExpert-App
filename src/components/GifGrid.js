import React from 'react';
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    // Desestructurando objeto state que retorna la función useFetchGifs
    // Mandando como argumento la categoría a useFetchGifs
    // Renombrando la variable data a images
    const { loading, data:images } = useFetchGifs( category );

    console.log(loading);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            {/* Forma corta de operador ternaro, no evalúa una segunda condición */}
            { loading && <p className="animate__animated animate_flash">Loading</p> }

            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                // Mandando elementos del objeto img como props
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid;