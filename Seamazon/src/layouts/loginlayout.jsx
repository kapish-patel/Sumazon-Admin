import { Outlet } from "react-router-dom"
import suLogo from "../assets/sumazon_logo.png"
import "./loginlayout.css"
function LoginLayout() {
  return (
    <div className="login-register-container">
      <div className="logo-container">
        <img src={suLogo} alt="logo" />
      </div>
      <Outlet />
    </div>
  )
}

export default LoginLayout
