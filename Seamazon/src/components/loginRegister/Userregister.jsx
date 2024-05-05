
function UserRegister() {
  return (
    <div className="register-container">
        <div className="register-form">
            <h1>Register</h1>
            <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" />
            <button type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}

export default UserRegister
