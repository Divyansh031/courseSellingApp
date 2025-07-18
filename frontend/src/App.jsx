import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import Courses from './components/Courses'
import Buy from './components/Buy'
import Purchases from './components/Purchases'
import AdminSignup from './admin/AdminSignup'
import AdminLogin from './admin/AdminLogin'
import Dashboard from './admin/Dashboard'
import CourseCreate from './admin/CourseCreate'
import UpdateCourse from './admin/UpdateCourse'
import OurCourses from './admin/OurCourses'
import AdminProtectedRoute from './admin/AdminProtectedRoute';
import './index.css';


const App = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  const [admin, setAdmin] = useState(() => JSON.parse(localStorage.getItem("admin")));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser); // this ensures updates
  }, []);

  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));
    setAdmin(storedAdmin);
  }, []);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      

      {/* Other Routes */}
        <Route path='/courses' element={<Courses />} />
        <Route path='/buy/:courseId' element={<Buy />} />
        <Route path='/purchases'  element={ <Purchases />} />

        {/* Admin Routes */}
        <Route path='/admin/signup' element={<AdminSignup />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={
          <AdminProtectedRoute>
            <Dashboard />
          </AdminProtectedRoute>
        } />
        <Route path='/admin/create-course' element={
          <AdminProtectedRoute>
            <CourseCreate />
          </AdminProtectedRoute>
        } />
        <Route path='/admin/update-course/:id' element={
          <AdminProtectedRoute>
            <UpdateCourse />
          </AdminProtectedRoute>
        } />
        <Route path='/admin/our-courses' element={
          <AdminProtectedRoute>
            <OurCourses />
          </AdminProtectedRoute>
        } />

      </Routes>  


      <Toaster/>
    </div>
  )
}

export default App
