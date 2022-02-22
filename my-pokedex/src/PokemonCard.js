import React from "react";

class PokemonCard extends React.Component {
  render() {
    const {pokemonImage, pokemonName, pokemonType} = this.props;
    return(      
      <div className="pokemon-card" data-testid="pokemon-card">
        <img src={ pokemonImage } alt={ pokemonName } />
        <p data-testid="pokemon-name">{ pokemonName }</p>
        <p data-testid="pokemon-type">{ pokemonType }</p>
      </div>
    );
  }
}

export default PokemonCard;