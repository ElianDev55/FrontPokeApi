import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/StylePokeSearch.css';
import { useContext } from 'react';
import { PokemonsContext } from '../Context/ContextPokemons';



export  const Searcher = () => {

  const context = useContext(PokemonsContext);
  const {SeachPokemonsData} = context;

  return (
    <Paper
    className='SearcherInput'
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000  }}
    >
     
      <InputBase 
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Pokemon"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => SeachPokemonsData(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    
    </Paper>
  );
}