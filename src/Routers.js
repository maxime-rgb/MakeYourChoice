import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profil from "./components/Users/Profil";
import Home from "./components/Home";
import PostForm from "./components/Surveys/PostForm";
import Header from "./components/Header";
import Surveys from "./components/Surveys/Surveys";
import SurveyDetails from "./components/Surveys/SurveyDetails";
import SurveyDetailsForm from './components/Surveys/SurveyDetailsForm';
import SignUp from "./components/Users/SignUp";
import ContactUs from "./components/Contact";
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
          <Route exact path="/SurveyDetails/participate/:survey_id">
            <SurveyDetailsForm User={User} setUser={setUser}/>
          </Route>

          <Route path="/SurveyDetails/:survey_id">
            <SurveyDetails User={User} setUser={setUser}/>
          </Route>

          <Route path="/Contact">
              <ContactUs User={User} setUser={setUser} />
          </Route>

          <Route path="/">
            <Home User={User} setUser={setUser} />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}