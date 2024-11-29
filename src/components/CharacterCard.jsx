import "../scss/layout/CharacterCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({ photo, name, specie, id }) {
  return (
    <li>
      <Link to={`/person/${id}`}>
        <img className="photo-list" src={photo} alt={name} />
        <h2>{name}</h2>
        <p>{specie}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;

CharacterCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
