import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <>
      <ul>{characters}</ul>
      <CharacterCard />
    </>
  );
}

export default CharacterList;
