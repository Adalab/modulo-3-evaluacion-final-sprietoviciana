import "../scss/layout/CharacterDetail.scss";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterDetail({ characters }) {
  const { idPerson } = useParams();

  if (characters == []) {
    return <p>Cargando...</p>;
  }

  const character = characters.find((character) => idPerson == character.id);

  if (character === undefined) {
    return <p>El personaje que buscas no existe</p>;
  }

  return (
<>
    <Link to={"/"} className="back">
    {" "}
    <p className="back-a">Volver</p>
  </Link>

    <section className="section-character">
      <img
        className="section-character-img"
        src={character.photo}
        alt={character.name}
      />
      <h3 className="title-name">{character.name}</h3>
      <p>
        <b>Status: </b>
        {character.status}
      </p>
      <p>
        <b>Species: </b>
        {character.species}
      </p>
      <p>
        <b>Origin: </b>
        {character.origin}
      </p>
      <p>
        <b>Episodes: </b> {character.episodes}
      </p>
    </section>
    </>
  );
}

export default CharacterDetail;

CharacterDetail.propTypes = {
  characters: PropTypes.array.isRequired,
};
