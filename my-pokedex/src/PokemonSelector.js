import React from "react";
import pokemons from "./data";
import PokemonCard from "./PokemonCard";

class PokemonSelector extends React.Component {
  render(){
    return(
      <div className="pokemon-selector" data-testid="pokemons-selector">
        {
          pokemons.map((pokemon) => (
            <PokemonCard
              key={ pokemon.id }
              pokemonImage={ pokemon.image }
              pokemonName={ pokemon.name }
              pokemonType={ pokemon.type}
            />
          ))
      }
      </div>
    );
  }
}

export default PokemonSelector;