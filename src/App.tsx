import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Works from './pages/Works'
import Sobre from './pages/Sobre'
import EstiloGlobal from './styles'
import Home from './containers/Home'
import Footer from './containers/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Works />
  },
  {
    path: '/cv',
    element: <Sobre />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Home />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
