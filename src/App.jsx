import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }, {

    }
  ])

  return (
    <div>
      <Navbar />
      <div>
        <Home router={router} />
      </div>
    </div>
  )
}

export default App
