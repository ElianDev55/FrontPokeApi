import { useEffect, useState } from 'react';
import axios from 'axios';

const GetPokemons = (initialSearchTerm = '') => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [pokemons, setPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0');
        const pokemonNames = response.data.results.map(pokemon => pokemon.name);
        const pokemonData = await Promise.all(pokemonNames.map(name => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)));
        const pokemonsWithId = pokemonData.map(data => ({
          id: data.data.id,
          name: data.data.name,
        }));
        setPokemons(pokemonsWithId);
      } catch (error) {
        console.error('Error al obtener pokemones:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.id.toString().includes(searchTerm)
    );
    setSearchResults(filteredPokemons);
  }, [searchTerm, pokemons]);



  return { searchTerm, setSearchTerm, searchResults, setSearchResults };
};





export { GetPokemons };