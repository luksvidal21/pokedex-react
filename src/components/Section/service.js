class Queries {
    static async getPokemon(offset,limit){
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(pokemons => pokemons.map(pokemon => (fetch(pokemon.url).then(resp => resp.json())))
        )
        .then(pokeRequests => Promise.all(pokeRequests));
        return request;
    }
}


export default Queries;