import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Admin from './layouts/admin/admin'
import Login from './layouts/login/login'
import Signup from './layouts/signup/signup'
import Update from './layouts/update_user/update'
import User from './layouts/user/user'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/home-user' element={<User />} />
        <Route exact path='/home-admin' element={<Admin />} />
        <Route exact path='/update-user' element={<Update />} />
      </Routes>
    </Router>
  )
}
export default App
