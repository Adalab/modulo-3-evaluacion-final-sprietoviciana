import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const charactersData = data.results.map((character) => {
          console.log(character);
          return {
            id: character.id,
            photo: character.image,
            name: character.name,
            specie: character.species,
            episodes: character.episode.length,
          };
        });
        console.log(charactersData);
        return setCharacters(charactersData);
      });
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      <Filter />
      <CharacterList characters={characters} />
    </>
  );
}

export default App;
