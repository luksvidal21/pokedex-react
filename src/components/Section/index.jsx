import { useEffect, useState } from "react"
import CardPokemon from "../Card"
import Queries from "./service"
import './Section.css'
import { Pagination, Skeleton, Stack } from "@mui/material"
export function Section () {
    const [pokemons, setPokemons] = useState([])
    const [countPagination, setCountPagination] = useState(1)
    const [offset, setOffset] = useState(0)
    const [page, SetPage] = useState(1)
    const [limit] = useState(12)
    const fetchData = async () => {
        const response = await Queries.getPokemon(offset,limit);
        setPokemons(response)
    }

    const fetchTotal = async () => {
        const response = await Queries.totalPokemons();
        setCountPagination(Math.ceil(response/limit))
    }

    const handlePage = (e, count) => {
        setPokemons([])
        if(count === 1){
            setOffset(0);
        }
        else{
            setOffset((limit*(count - 1)) + 1)
        }

        SetPage(count)
        fetchData()
    }

    useEffect(()=>{
        fetchTotal()
        fetchData()
    },[])

    return (
        <>
            <section>
                {   pokemons.length > 0 && pokemons.map(pokemon => (
                    <>
                        <CardPokemon
                            key={pokemon.id} 
                            nome={pokemon.nome}
                            cor={pokemon.cor}
                            foto={pokemon.foto}
                            tipo={pokemon.tipo}
                        />
                        <Pagination
                            sx={{
                                minWidth: "6rem",
                                minHeight: "15rem",
                                gridRow:"4",
                                gridColumn:"2/4",
                                ".MuiPagination-ul":{
                                    justifyContent:"center"
                                }
                            }}                
                            count={countPagination}
                            page={page}
                            onChange={handlePage}
                        />
                    </>                    
                    ))
                }
            </section>
        </>
    )
}




