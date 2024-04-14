
import {createBrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import UserPage from './pages/User';
import NotFound from './pages/NotFound';


// nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/user',
        element: <UserPage/>
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
])

export default AppRouter;
