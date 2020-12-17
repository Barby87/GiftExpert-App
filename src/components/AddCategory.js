import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // Actualizar inputValue con el último valor actualizado con lo que la persona escribió en el input
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');

        // Método trim borra espacios en blanco que puedan haber en el input
        if( inputValue.trim().length > 2 ) {
            // Agregando el valor del input (inputValue) al arreglo categories
            setCategories(cats => [inputValue])
            // Limpiar input 
            setInputValue('');
        }

        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
            {/* <p>{ inputValue }</p> */}
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
