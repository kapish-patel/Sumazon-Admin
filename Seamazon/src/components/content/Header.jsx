import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <div className="header-container">
        <div className="icon-container">
            <FontAwesomeIcon icon={faUser} />
        </div>
    </div>
  )
}

export default Header
