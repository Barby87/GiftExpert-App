import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import AddCategory from '../../components/AddCategory'

describe('Pruebas en <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>)
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
    
        // Simulando eventto onChange
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe( value )
    })
    
    test('No debe postear la información onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
    
        expect( setCategories ).not.toHaveBeenCalled()
    })

    test('Debe llamar el setCategories y limpiar la caja de exto', () => {
        const value = 'Hola Mundo';
        // Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });
        // Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        // setCategories se debe de haber llamado al menos una vez del
        expect( setCategories ).toHaveBeenCalled();
        // El valor del input debe de estar vacío
        expect(wrapper.find('input').prop('value')).toBe('');

    })
})

