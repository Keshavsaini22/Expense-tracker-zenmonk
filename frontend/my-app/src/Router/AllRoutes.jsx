import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import Home from '../components/Home/Home'


function AllRoutes() {
  return (

    <Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='/product' element={<ProductPage/>}/>
        <Route path='/shop' element={<ListingPage/>}/>
        <Route path='/men' element={<LandingPage/>}/>
        <Route path='/women' element={<LandingPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/> */}
    </Routes>

  )
}

export default AllRoutes;