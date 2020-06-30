import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import { GlobalStyles } from './GlobalStyle'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Music from './components/Music'

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <BrowserRouter>
        
        <Navbar />

        <Routes />

        <Footer />

        <Music />

      </BrowserRouter>
    </div>
  )
}

export default App
