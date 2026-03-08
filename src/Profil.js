// Profil.js
import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  return (
    <div>
      <p>{utilisateur.nom}</p>
      <img src={utilisateur.photo} alt={utilisateur.nom} style={{ width: taille, height: taille }} />
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 100,
};

export default Profil;