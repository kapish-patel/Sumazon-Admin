import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Userlogin.css'
function UserLogin() {
  return (
    <div className="login-container">
        <div className="login-form">
          <p>Sign In</p>
          <form>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder='Email' />
            </div>
            <div className="form-group">
              <input type="password" id="password" name="password" placeholder='Password' />
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <div className="signupwith-google-container">
          <button><FontAwesomeIcon icon={faGoogle}/> Sign in with Google</button>
        </div>
        <div className="register-container">
          <p>Don&apos;t have an account? <a href="/register">Register</a></p>
        </div>
    </div>
  )
}

export default UserLogin
