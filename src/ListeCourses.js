// ListeCourses.js
import PropTypes from 'prop-types';

function ListeCourses({ elements }) {
  return (
    <ul>
      {elements.map((element, index) => (
        <li key={index}>{element}</li>  // ✅ key={index} sans guillemets
      ))}
    </ul>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;