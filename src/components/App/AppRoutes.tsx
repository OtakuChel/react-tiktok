import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Feed } from '../Feed/Feed'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Feed/>}></Route>
    </Routes>
  )
}
