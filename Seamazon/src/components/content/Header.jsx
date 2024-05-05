import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logOut } from "../../Redux/slice/userSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());

    window.location.href = "/";
  }

  return (
    <div className="header-container">
      <Link to='/'>
      <div className="icon-container" onClick={handleLogOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
      </Link>
    </div>
  );
}

export default Header;
