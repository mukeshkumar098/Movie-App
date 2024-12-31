import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'
import Header from './component/Header'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<><Header/><Home/></>}>
        </Route>
      </Routes>
    </>
  )
}

export default App
