import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Userregister.css'

function UserRegister() {
  return (
    <div className="register-container">
        <div className="register-form-container">
            <p>Sign up</p>
            <form className='register-form'>
              <input type="email" id="email" name="email" placeholder='Email' />
              <input type="password" id="password" name="password" placeholder='Password'/>
              <input type="password" id="confirm-password" name="confirm-password"  placeholder='Confirm Password'/>
              <button type="submit">Register</button>
            </form>
        </div>
        <div className="signupwith-google-container">
          <button><FontAwesomeIcon icon={faGoogle}/> Sign up with Google</button>
        </div>
        <div className="register-container">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    </div>
  )
}

export default UserRegister
