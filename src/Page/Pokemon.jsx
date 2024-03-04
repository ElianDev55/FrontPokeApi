import React, { useContext, useState } from 'react';
import { PokemonsContext } from '../Context/ContextPokemons';
import { PokemonCard } from '../components/PokemonCard';
import { Searcher } from '../components/Searcher';
import { PokeLayout } from '../layouts/PokeLayout';
import { SearcherLayout } from '../layouts/SeacherLayout';
import { PokemonTable } from '../components/PokemonTable';

export const Pokemon = () => {
    const context = useContext(PokemonsContext);
    const [showTable, setShowTable] = useState(false);

    const toggleView = () => {
        setShowTable(prevState => !prevState);
    };

    return (
        <>
            <SearcherLayout>
                <Searcher />
            </SearcherLayout>

                <button onClick={toggleView} className='botones setLayout'>
                    {showTable ? 'Mostrar Tarjetas' : 'Mostrar Tabla'}
                </button>
            <PokeLayout>
                {showTable ? (
                    <PokemonTable data={context.searchResults} />
                ) : (
                <div className='card-container'>

                    { context.searchResults?.map((pokemon) => {
                         return <PokemonCard key={pokemon.id} data={pokemon} />;
                     })}
                </div>
                )}
               
            </PokeLayout>
        </>
    );
}
