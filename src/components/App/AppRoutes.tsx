import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import SearchFeed from '../Search/SearchFeed/SearchFeed'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Feed/>}></Route>
        <Route path='/search' element={<SearchFeed/>}></Route>
    </Routes>
  )
}
