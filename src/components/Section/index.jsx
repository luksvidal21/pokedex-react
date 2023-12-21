import { useEffect, useState } from "react"
import CardBasico from "../Card"
import Queries from "./service"
import './Section.css'
export function Section () {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const fetchData = async () => {
        const response = await Queries.getPokemon(offset,limit).then(r=>r.json()).then(body => body.results);
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
                    <CardBasico 
                        key={pokemon.nome} 
                        nome={pokemon.name}
                    />
                ))}
            </section>
        </>
    )
}




