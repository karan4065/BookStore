 import React from 'react'
import Homepage from './home/Homepage'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
 
const App = () => {

  {
    const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
     document.documentElement.classList.add('dark');
} else {
      document.documentElement.classList.remove('dark');
}

  }

    const [authUser,setAuthUser  ] = useAuth();
    console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element = {<Homepage/>}/>
      <Route path='/course' 
      element = {authUser? <Courses/> : <Navigate to="/"/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/login' element = {<Login/>}/>
    </Routes>
    <Toaster/>
    </div>
     </>
   );
 }
 
 export default App