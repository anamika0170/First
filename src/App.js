import React from "react";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EditUser from "./components/EditUser";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
       
        <Route exact path="/" element={<Main />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
