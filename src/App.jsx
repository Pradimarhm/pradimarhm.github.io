

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Layout
import Navbar from './components/layouts/navbar.ly'

// Pages
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden bg-transparent'>      
      <Router>
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
      </Router>

      {/* <Home/>  */}
    </div>
  )
}

export default App

