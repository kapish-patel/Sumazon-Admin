import { Outlet } from 'react-router-dom'
import './Content.css'
import Header from './Header'

function Content() {
  return (
    <div className="content-container">
        <Header />
        <Outlet />
    </div>
  )
}

export default Content
