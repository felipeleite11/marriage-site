import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar />

        <Routes />

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
