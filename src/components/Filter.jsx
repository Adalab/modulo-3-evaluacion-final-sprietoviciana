import PropTypes from "prop-types";

function Filter({ onChangeFilter }) {
  const handleChangeImput = (event) => {
    onChangeFilter(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Busca tu personaje:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ej: Morty"
          onChange={handleChangeImput}
        />
      </label>
    </form>
  );
}

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
