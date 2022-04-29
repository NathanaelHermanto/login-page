import React from 'react';
import { Routes as RouterLink, Route } from "react-router-dom";
import Login from './Login';
import AdminHome from './AdminHome';
import Staff from './Staff';
import AdminStudents from './AdminStudents';
import AdminStaff from './AdminStaff';


const Routes = () => {
  return (
    <>
        <RouterLink>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/admin' element={<AdminHome/>}/> 
            <Route path='/admin/students' element={<AdminStudents/>}/>
            <Route path='/admin/staff' element={<AdminStaff/>}/>
            <Route path='/staff' element={<Staff/>}/> 
        </RouterLink>
    </>
  )
}

export default Routes;