import React from 'react'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import PublicLayout from './layouts/PublicLayout';

export const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<h1>HOME</h1>} />
      </Route>
    </Routes>    
  )
}
