import React from 'react'
import Skills from './pages/Skill'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Banner from './components/Banner'
import Project from './pages/Project'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div className='container mx-24'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/skills' element={<Skills/>} />
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
