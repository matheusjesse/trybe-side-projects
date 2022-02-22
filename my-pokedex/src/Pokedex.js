import React from "react";
import LeftPokedex from "./LeftPokedex";
import RightPokedex from "./RightPokedex";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex-body">
        <LeftPokedex />
        <RightPokedex />
      </div>
    );
  }
}

export default Pokedex;