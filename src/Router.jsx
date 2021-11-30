import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/logins/Login";
import Activities from "./pages/activities/Activities";
import Tests from "./pages/tests/Tests";
import Register from "./pages/logins/Register";
import Navbar from "./global/navbar/Navbar";
import App from "./App";
import Forum from "./pages/forum/Forum";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />

          <Route path='activities' element={<Activities />} />

          <Route path='tests' element={<Tests />} />

          <Route path='forum' element={<Forum />} />
        </Route>

        <Route path='/register' element={<Register />} />

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
