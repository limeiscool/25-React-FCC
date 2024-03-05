import PropTypes from "prop-types";

function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((user, i) => (
            <li onClick={handleClick} key={i}>
              {user}
            </li>
          ))
        : null}
    </ul>
  );
}
Suggestions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
};

export default Suggestions;
