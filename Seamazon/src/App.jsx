
import { RouterProvider } from 'react-router-dom';
import AppRouter from './appRouter';

function App() {
  return (
    <div className="App-container">
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
