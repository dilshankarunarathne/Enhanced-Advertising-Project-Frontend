import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/dashboard/Home";
import Login from "./pages/login/Login";
import { ManageAdverticement } from "./pages/manageadverticement/ManageAdverticement";
import { Profile } from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Report } from "./pages/report/Report";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register></Register>} />
    <Route path="/login" element={<Login />}></Route>
    <Route path="/manageAdeverticement" element={<ManageAdverticement />}></Route>
    <Route path="/reports" element={<Report />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
    <Route exact  path="/" element={<Home />}></Route>
  
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
