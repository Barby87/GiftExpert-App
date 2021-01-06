
import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
// Simulando llamada a esa ruta
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GiGrid/>', () => {

    const category = 'One Punch'
    
    test('Debe mostrarse correctamente', () => {

        const wrapper = shallow( <GifGrid category={ category }/>)
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa',
            title: 'cualquier cosa'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs, 
            loading: true
        });
           
        const wrapper = shallow( <GifGrid category={ category }/>)

        expect( wrapper.find('p').exists() ).toBe( false );
        // Verificando existencia del elemento GifGridItem
        expect( wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
})
