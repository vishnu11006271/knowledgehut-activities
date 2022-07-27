import logo from './logo.svg';
import {Link, Route, Routes, Router} from 'react-router-dom';
import './App.css';
import { Component } from 'react';
import { FetchUsers, StoreUser, UpdateUser,DeleteUser, ProfileLogin, UserRegistration, LogInUser, StoreContact, ShowContact } from './User';
import {Home} from './Home';
import { UserDashboard } from './components/UserDashboad';
import LoginComponent from './components/LoginComponent';
import { Dashboard } from './components/Dashboard';

function App() {
  return (<div className = 'container-fluid'>
    <h1 className = 'text-center'>This is an example on SPA</h1>
    <div>
      <Link to = "/home">Home</Link> | 
      <Link to = "/contacts">Contact us</Link> | 
      <Link to = "/about">About us</Link> |
      <Link to = "/forms">Form</Link> |
      <Link to = "/fetch">Fetch Users</Link> 
    </div>
    <hr />
    <div>
     <Routes>
       <Route path = "/home" element = {<Dashboard />} />
       <Route path = "/contacts" element = {<StoreContact />} />
       <Route path = "/about" element = {<ShowContact />} />
       <Route path = "/" element = {<ProfileLogin />} />
       <Route path = "/login" element = {<ProfileLogin />} />
       <Route path = "/register" element = {<UserRegistration />} />
     </Routes>
    </div>
  </div>)
 }

export default App;


// function App() {
//   return (<div>
//     <Routes>
//         <Route path = "/login" element = {<ProfileLogin />} />
//         <Route path = "/*" element = {<UserRegistration />} />
//         <Route path = "/register" element = {<UserRegistration />} />
//         <Route path = "/login/:id" element = {<LogInUser />} />
//         {/* <Route path = "/addcontact" element = {<StoreContact />} />
//         <Route path = "/showcontact" element = {<ShowContact />} /> */}
//     </Routes>  
//   </div>)
//  }