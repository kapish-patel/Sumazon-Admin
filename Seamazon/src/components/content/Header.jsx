import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

function handleUserIconClick(){
  console.log("this is user-icon button")
}

function Header() {
  return (
    <div className="header-container">
        <div className="icon-container" onClick={handleUserIconClick}>
            <FontAwesomeIcon icon={faUser} />
        </div>
    </div>
  )
}

export default Header
