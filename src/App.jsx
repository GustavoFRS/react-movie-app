import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './context/MovieContext'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import './css/App.css'

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home> </Home>} />
        <Route path='/favorites' element={<Favorites> </Favorites>} />
      </Routes>
    </main>
    </MovieProvider>

  )
}

export default App
