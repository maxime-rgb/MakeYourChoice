import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profil from "./components/Profil";
import Home from "./components/Home";
import PostForm from "./components/PostForm";
import Header from "./components/Header";
import Surveys from "./components/Surveys";
import SurveyDetails from "./components/SurveyDetails";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';


export default function Routers() {
  const [User, setUser]= useState(sessionStorage.getItem('user'))

  return (
    <Router>
      <div>
      <Header User={User} setUser={setUser}/>
        <Switch>
          <Route path="/Profil">
            <Profil  User={User} setUser={setUser}/>
          </Route>

          <Route path="/PostForm">
          
            <PostForm User={User} setUser={setUser}/>
          </Route>

          <Route path="/Surveys">
            <Surveys User={User} setUser={setUser}/>
          </Route>

          <Route path="/Signup">
            <SignUp  User={User} setUser={setUser}/>
          </Route>

          <Route path="/SurveyDetails/:survey_id">
            <SurveyDetails User={User} setUser={setUser}/>
          </Route>


          <Route path="/">
            
            <Home />
          </Route>

        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}