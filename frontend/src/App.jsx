
import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios"
import PostResources from "./Components/Resource/PostResources";
import Resources from "./Components/Resource/Resources";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import { Toaster } from "react-hot-toast";
import SignUp from "./Components/Auth/SignUp";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


const App = () => {


  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);



  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        
        <Route path="/resource/postresources" element={<PostResources></PostResources>}></Route>
        <Route path="/resource/resources" element={<Resources></Resources>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
       
      </Routes>
    
      <ToastContainer position="top-center" />
      <Toaster />
    </BrowserRouter>
  </>
  )
}

export default App