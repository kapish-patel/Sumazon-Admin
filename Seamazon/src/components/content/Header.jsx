import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logOut } from "../../Redux/slice/userSlice";

function Header() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  }

  return (
    <div className="header-container">
      <div className="icon-container" onClick={handleLogOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
    </div>
  );
}

export default Header;
