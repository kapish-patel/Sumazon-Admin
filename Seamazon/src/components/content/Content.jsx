import { Outlet } from 'react-router-dom'
import './Content.css'
function Content() {
  return (
    <div className="content-container">
        <h1>this is a content part</h1>
        <Outlet />
    </div>
  )
}

export default Content
