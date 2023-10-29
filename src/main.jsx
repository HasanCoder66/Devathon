import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route , createBrowserRouter ,createRoutesFromElements , RouterProvider   } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Courses from './components/courses/Courses.jsx'
// import Rightbar from './components/rightbar/Rightbar.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route >
      {/* <Route path="" element={<Home/>}/> */}
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="home" element={<Dashboard/>}/>
      <Route path="courses" element={<Courses/>}/>
      {/* <Route path="contact" element={<Contact/>}/> */}
      {/* <Route path="rightbar" element={<Rightbar/>}/> */}
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
