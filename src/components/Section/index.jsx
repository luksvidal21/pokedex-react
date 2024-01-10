import { useEffect, useState } from "react"
import CardPokemon from "../Card"
import Queries from "./service"
import './Section.css'
export function Section () {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(12)
    const fetchData = async () => {
        const response = await Queries.getPokemon(offset,limit);
        setPokemons(response)
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        console.log(pokemons)
    },[pokemons])

    return (
        <>
            <section>
                {pokemons.length > 0 && pokemons.map(pokemon => (
                    <CardPokemon
                        key={pokemon.id} 
                        nome={pokemon.nome}
                        cor={pokemon.cor}
                        foto={pokemon.foto}
                        tipo={pokemon.tipo}
                    />
                ))}
            </section>
        </>
    )
}




