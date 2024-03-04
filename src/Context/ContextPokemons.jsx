import { createContext } from "react";
import {GetPokemons} from '../Hooks/Pokemons';


export const PokemonsContext = createContext();


export const PokemonsProvider = ({ children }) => {

    const {searchTerm, setSearchTerm, searchResults,setSearchResults} =  GetPokemons('');


    const SeachPokemonsData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
    }


    return (
        <PokemonsContext.Provider value={{
            searchTerm,
            SeachPokemonsData,
            searchResults,
            setSearchResults
        }}>
            {children}
        </PokemonsContext.Provider>
    )

}

