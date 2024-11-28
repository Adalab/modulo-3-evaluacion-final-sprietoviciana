import PropTypes from "prop-types";

function CharacterCard({ photo, name, specie }) {
  return (
    <li>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{specie}</p>
    </li>
  );
}

export default CharacterCard;

CharacterCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
};
