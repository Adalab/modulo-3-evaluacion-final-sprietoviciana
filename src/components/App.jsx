import "../scss/App.scss";
import Header from "./Header";
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
        const charactersData = data.results.map((character) => {
          return {
            id: String(character.id),
            photo: character.image,
            name: character.name,
            specie: character.species,
            episodes: character.episode.length,
            status: character.status,
            origin: character.origin.name,
            species: character.species,
          };
        });

        return setCharacters(charactersData);
      });
  }, []);

  const changeSearch = (value) => {
    setChangeInput(value);
  };

  const filteredCharacter = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(changeInput.toLocaleLowerCase());
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Header />
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
          <Route
            path="/person/:idPerson"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
