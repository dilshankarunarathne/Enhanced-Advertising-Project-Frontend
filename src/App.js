import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/dashboard/Home";
import Login from "./pages/login/Login";
import { ManageAdverticement } from "./pages/manageadverticement/ManageAdverticement";
import { Profile } from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Report } from "./pages/report/Report";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/manageAdeverticement" element={<ManageAdverticement />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/profile" element={<Profile />} />
        {isLoggedIn ? <Route exact path="/" element={<Home />} /> : <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />}
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
