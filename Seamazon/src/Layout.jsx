import Navigation from "./components/navigation/Navigation";
import Content from "./components/content/Content";
import './Layout.css';

function Layout() {
  return (
    <div className="App-container">
      <Navigation />
      <Content />
    </div>
  )
}

export default Layout
