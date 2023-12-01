import React from 'react'
import AboutMe from './containers/AboutMe'
import Home from './containers/Home'
import Portfolio from './containers/Portfolio'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Home />
      <Portfolio />
      <AboutMe />
      <footer>
        <div>
          <p>2023 &copy; Carolina Mattos - Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
