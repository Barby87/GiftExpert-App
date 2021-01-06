import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGifs fetch', () => {

    test('debe tener 10 elementos', async() => {
        const gifs = await getGifs('');
        console.log(getGifs); // Array vacío
        expect( gifs.length ).toBe( 0 );
    })
})