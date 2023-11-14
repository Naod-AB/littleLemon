import { faPersonBurst, faPersonCircleXmark, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faPersonCircleXmark} size="3x" />
      <h2>Coming Soon!</h2>
    </div>
  );
};

export default UnderConstruction;
