import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import ActiveCart from './components/Pages/ActiveCart'
import ArchiveCart from './components/Pages/ArchiveCart'
import HorizontalLinearStepper from './components/Pages/HorizontalLinearStepper'
import FirstPage from './components/Pages/FirstPage'
import ThirdPage from './components/Pages/ThirdPage'
import SecondPage from './components/Pages/SecondPage'
import OrderListContextProvider from './components/Store/OrderListProvider'



function App() {
  return (
    <OrderListContextProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createorder' element={<HorizontalLinearStepper />} />

        </Routes>
      </div>
    </OrderListContextProvider>
  )
}

export default App
