import { useState, useContext } from 'react';
import { PokemonsContext } from '../Context/ContextPokemons';
import '../styles/StyleSeacherLayout.css';

export const SearcherLayout = ({ children }) => {
    const context = useContext(PokemonsContext);
    const pokemons = context.searchResults;

    const [orderByIdAsc, setOrderByIdAsc] = useState(true);
    const [orderByNameAsc, setOrderByNameAsc] = useState(true);

    const toggleOrderById = () => {
        setOrderByIdAsc(!orderByIdAsc);
    };

    const toggleOrderByName = () => {
        setOrderByNameAsc(!orderByNameAsc);
    };

    const OrderById = (event) => {
        event.preventDefault();
        const pokemonsOrdered = [...pokemons].sort((a, b) => {
            return orderByIdAsc ? a.id - b.id : b.id - a.id;
        });
        context.setSearchResults(pokemonsOrdered);
        toggleOrderById();
    };

    const OrderByName = (event) => {
        event.preventDefault();
        const pokemonsOrdered = [...pokemons].sort((a, b) => {
            return orderByNameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });
        context.setSearchResults(pokemonsOrdered);
        toggleOrderByName();
    };

    return (

        <div className='centrado'>
            <img className='letrero' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
            <div className="card-container-search">
                {children}
            </div>
            
            <div className='dire-botones'>

            <button onClick={OrderById} className='botones'>
                {orderByIdAsc ? '1 2 3 ⬆️' : '3 2 1 ⬇️'} 
            </button>
            <button onClick={OrderByName} className='botones'>
                {orderByNameAsc ? 'A B C ⬆️' : 'Z Y X ⬇️'}
            </button>

            </div>
        </div>
    );
};
