import { Outlet } from "react-router-dom"
function LoginLayout() {
  return (
    <div className="login-register-container">
      <Outlet />
    </div>
  )
}

export default LoginLayout
