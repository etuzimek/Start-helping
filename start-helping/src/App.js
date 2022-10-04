import React from "react"
import './App.css';
import Home from './components/Home'
import HomeLocal from "./components/HomeLocal";
import HomeOrganizations from "./components/HomeOrganizations";
import Login from "./components/Login";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
        <Home/>
            {/* <Routes> */}
                {/* <Route path="/Homelocal" element={<HomeLocal/>}/> */}
                {/* <Route path="/HomeOrganizations" element={<HomeOrganizations/>}/> */}
                {/* <Route path="/Login" element={<Login/>}/> */}
            {/* </Routes> */}
    </div>
  );
}

export default App;