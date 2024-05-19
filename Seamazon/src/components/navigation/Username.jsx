
import { useSelector } from 'react-redux';

function Username() {

  const userName = useSelector((state) => state.user.userDetails.userName);
  return (
    <div className="username-container">
        <p>{userName}</p>
    </div>
  )
}

export default Username
