import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom'
import UserProvider from './context/UserContext'
import Form from './routes/Form'

function App() {

  return (
    <UserProvider>
      <Router>
        <Link to='/form'>Form</Link>        
        <Routes>
          <Route path="form" element={<Form />}/>
        </Routes>
        <Outlet/>  
      </Router>
    </UserProvider>
  )
}

export default App
