import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../styles/StylePokeCard.css';
import { useContext, useState } from 'react';
import { PokemonsContext } from '../Context/ContextPokemons';
import { useEffect } from 'react';
import axios from 'axios';



export const PokemonCard = (data) => {

  const {name} = data.data;


  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data.data.name]);





    return (

        
        <Card sx={{ display: 'flex' }}  className= {`HoverCard  Card${pokemonData?.types[0].type.name}`}  >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
       
          <CardContent sx={{ flex: '1 0 auto' }}>
          <Stack direction="row" spacing={1}>
        
        <Chip 
        label={`#${pokemonData?.id || '0'}`}  
        color="warning"
        size="medium"
        variant="filled"
        />

        </Stack>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
            Height :  {pokemonData?.height} 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
            Types :  {pokemonData?.types.map((type) => type.type.name).join(', ')}
            </Typography>
          </CardContent>
         
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.data?.id}.png`}
          alt="Live from space album cover"
        />
      </Card>
    )
};