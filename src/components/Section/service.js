class Queries {
    static async getPokemon(offset,limit){
        return await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    }
}

export default Queries;