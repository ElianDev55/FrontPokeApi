import { PokemonsProvider } from './Context/ContextPokemons'
import { Pokemon } from './Page/Pokemon'


function App() {

  return (
    
    <PokemonsProvider>
      <Pokemon />
    </PokemonsProvider>
    
  )
}

export default App
