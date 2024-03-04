
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StyleTable.css'

export const PokemonTable = ({ data }) => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = data.map(pokemon => axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`));
                const responses = await Promise.all(promises);
                const newPokemonData = responses.map(response => response.data);
                setPokemonData(newPokemonData);
            } catch (error) {
                console.error(error);
            }
        };

        if (data.length > 0) {
            fetchData();
        }
    }, [data]);

    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 10 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Pokemons</TableCell>
                        <TableCell align="right">id</TableCell>
                        <TableCell align="right">Height</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pokemonData.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.height}</TableCell>
                            <TableCell align="right">
                                {row.types.map((type) => type.type.name).join(', ')}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
