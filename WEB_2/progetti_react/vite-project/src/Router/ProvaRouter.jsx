import React from "react";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProfile from "./SingleProfile";
import MyProfile from "./MyProfile";

const ProvaRouter = () => {
  //   const [link, setLink] = useState("Home");

  //   const renderCondizionale = () => {
  //     if (link == "Home") {
  //       return <Home></Home>;
  //     }
  //     if (link == "About") {
  //       return <About></About>;
  //     }
  //     if (link == "Profile") {
  //       return <Profile></Profile>;
  //     }
  //   };

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="About">About</Link>
          <Link to="Profile">Profile</Link>
        </nav>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route
            path="/profile/:id"
            element={<SingleProfile></SingleProfile>}
          ></Route>
          <Route 
            path="/profile/me" 
            element={<MyProfile></MyProfile>}
          ></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <nav className="navbar justify-content-between">
          <button
            className="btn btn-link nav-link"
            onClick={() => setLink("Home")}
          >
          
            Home
          </button>
          <button
            className="btn btn-link nav-link"
            onClick={() => setLink("About")}
          >
            About
          </button>
          <button
            className="btn btn-link nav-link"
            onClick={() => setLink("Profile")}
          >
            Profile
          </button>
      </nav> */}
      {/* <div>
        <br></br>
        <hr></hr>
        <b>{renderCondizionale()}</b>
      </div> */}
    </div>
  );
};

export default ProvaRouter;
