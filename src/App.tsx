import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Projects from './pages/Projects'
import Sobre from './pages/Sobre'
import Home from './containers/Home'
import Footer from './containers/Footer'

import EstiloGlobal from './styles/styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Projects />
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
