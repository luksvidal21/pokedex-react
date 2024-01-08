import Pokemon from "../../model/pokemon";
import colors from "../../utils/colors";

class Queries {
    static async getPokemon(offset,limit){
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(pokemons => pokemons.map(pokemon => (
            fetch(pokemon.url)
            .then(resp => resp.json())
            .then(pokeDados => {
                    let pokeModel = new Pokemon();
                    pokeModel.id = pokeDados.order
                    pokeModel.nome = pokeDados.name
                    const types = pokeDados.types.map(typeSlot => typeSlot.type.name)
                    const [type] = types
                    pokeModel.tipo = type
                    pokeModel.tipos = types
                    pokeModel.foto = pokeDados.sprites.other.dream_world.front_default
                    pokeModel.cor = colors[type]
                    return pokeModel;

                }
            )))
        )
        .then(pokeRequests => Promise.all(pokeRequests));
        return request;
    }
}


export default Queries;