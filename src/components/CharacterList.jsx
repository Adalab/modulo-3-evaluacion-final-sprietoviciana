import "../scss/layout/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({ characters }) {
  return (
    <ul className="list">
      {characters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            photo={character.photo}
            name={character.name}
            specie={character.specie}
            id={character.id}
          />
        );
      })}
    </ul>
  );
}

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};
