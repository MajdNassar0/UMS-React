import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home/Home'
import User from './page/user/User'
import Register from './page/register/Register'
import Users from './page/user/Users'
import AddUser from './page/add user/AddUser'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Add' element={<AddUser />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
