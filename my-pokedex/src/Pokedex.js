import React from "react";
import LeftPokedex from "./LeftPokedex";
import RightPokedex from "./RightPokedex";
import PokemonSelector from "./PokemonSelector";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex-body">
        <PokemonSelector />
        <LeftPokedex />
        <RightPokedex />
      </div>
    );
  }
}

export default Pokedex;