import React from 'react';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/dashboard/Home";
import { ManageAdverticement } from "./pages/manageadverticement/ManageAdverticement";
import { Profile } from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Report } from "./pages/report/Report";

function App() {
  const isLoggedIn = true; // set this to true if the user is logged in

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/manageAdeverticement" element={<ManageAdverticement />}></Route>
        <Route path="/reports" element={<Report />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {isLoggedIn ? <Route exact  path="/" element={<Home />}></Route> : <Route exact  path="/" element={<Home />}></Route>}
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;