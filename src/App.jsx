import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Role from './components/Role'
import Position from './components/Position'
import Department from './components/Department'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <div>
    <ul>
      <li>
        <Link to="/role">Role Details</Link>
      </li>
      <li>
        <Link to="/position">Position Details</Link>
      </li>
      <li>
        <Link to="/department">Department Details</Link>
      </li>
    </ul>
    
    <Routes>
      <Route exact path='/role' element={< Role />}></Route>
      <Route exact path='/position' element={< Position />}></Route>
      <Route exact path='/department' element={< Department />}></Route>
    </Routes>
  </div>
  </Router>
)


