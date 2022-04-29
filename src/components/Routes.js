import React from 'react';
import { Routes as RouterLink, Route } from "react-router-dom";
import Login from './Login';
import Admin from './Admin';
import Staff from './Staff';

const Routes = () => {
  return (
    <>
        <RouterLink>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/> 
            <Route path='/Staff' element={<Staff/>}/> 
        </RouterLink>
    </>
  )
}

export default Routes;