

// import React from 'react' 
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Navbar from './components/layouts/navbar.ly'

// Pages
import Home from './pages/home'
import About from './pages/about'
import ContactMe from './pages/contact'
import Experience from './pages/experience'
import Project from './pages/project'
import ProjectDetail from './pages/projectDetail'
import Design from './pages/design';

// --- KOMPONEN LOADING SCREEN ---
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A]">
      <div className="relative">
        {/* Logo kamu */}
        <img 
          src="./images/logo-nobg.webp" 
          alt="Loading..." 
          className="w-24 h-24 animate-pulse" 
        />
        {/* Ring Loading di luar logo */}
        <div className="absolute -inset-4 border-8 border-t-brand-500 border-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fungsi ini hanya berjalan saat SEMUA aset (gambar, iframe, stylesheet) selesai di-download
    const onPageLoad = () => {
      // Tambahkan sedikit delay (misal 500ms) agar transisi tidak terlalu mengagetkan
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Periksa apakah halaman sudah selesai load sebelumnya (cache)
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Clean up event listener
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <div className='min-h-screen bg-transparent'>      
            <Navbar/>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<ContactMe/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/experience' element={<Experience/>} />
                <Route path='/myProject' element={<Project/>} />
                <Route path='/project/:slug' element={<ProjectDetail/>} />

                <Route path='/myDesign' element={<Design/>} />
            </Routes>
          </div>
        </Router>
        
      )}
    </>
  )
}

export default App

