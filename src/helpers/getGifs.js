export const getGifs = async (category) => {
    // encodeURI elimina espacios de la url
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Qn6KgF0yP7oEvqW22g842fqeDj2nW5KL&q=${ encodeURI( category ) }&limit=10`;

    const resp = await fetch( `${url}` );

    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs);
    // La función asíncrona regresa una promesa que resuelve la colección de las imágenes
    return gifs;
}