import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Favorites from './page/FavoritesPage'
import HomePage from './page/HomePage'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App;
