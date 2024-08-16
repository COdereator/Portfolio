import { useState } from 'react';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/About/About'
import './App.css'
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonals from './components/Testimonals/Testimonals';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Testimonals/>
      <Contact/>
      
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App
