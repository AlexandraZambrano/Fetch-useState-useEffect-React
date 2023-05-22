import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Edit from '../pages/Edit';
import Create from '../pages/Create';
import UsersList from '../pages/ListOfUsers';

const AppRoutes = () => {
  return (
    <Router>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/list' element={<UsersList />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  </Router>
  )
}

export default AppRoutes
