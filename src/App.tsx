import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Works from './pages/Works'
import Sobre from './pages/Sobre'
import EstiloGlobal from './styles'

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
      {/* <Home /> */}
      <div>
        <RouterProvider router={rotas} />
      </div>
      <footer>
        <div>
          <p>2023 &copy; Carolina Mattos - Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
