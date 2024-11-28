import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import CharacterDetail from "./CharacterDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [changeInput, setChangeInput] = useState("");

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
            status: character.status,
            origen: character.origen.name,

          };
        });
        // console.log(charactersData);
        return setCharacters(charactersData);
      });
  }, []);

  const changeSearch = (value) => {
    setChangeInput(value);
  };

  const filteredCharacter = characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(changeInput.toLocaleLowerCase());
  });

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onChangeFilter={changeSearch} />
                <CharacterList characters={filteredCharacter} />
              </>
            }
          />
         <Route path="/person/:idPerson" element ={<CharacterDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
