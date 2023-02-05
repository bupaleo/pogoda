import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import Main from './pages/Main.jsx'
import Notfoundpages from './pages/Notfoundpages.jsx'
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navbar/> */}
      <Section/>

    {/* <Routes> 
      <Route path='/'element={<Header/>}/>
      <
      <Route path='*'element={<Notfoundpages/>}/>
    </Routes> */}
    </div>
  )
}
export default App
