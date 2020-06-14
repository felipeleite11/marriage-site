import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import { GlobalStyles } from './GlobalStyle'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <BrowserRouter>
        
        <Navbar />

        <Routes />

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
