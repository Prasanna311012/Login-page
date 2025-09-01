import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Success from './Success'
import Fail from './Fail'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='/fail' element={<Fail/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
