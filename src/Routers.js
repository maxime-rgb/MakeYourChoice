import React from "react";
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

export default function Routers() {
  return (
    <Router>
      <div>


        <Switch>
          <Route path="/Profil">
            <Header />
            <Profil />
          </Route>
          <Route path="/PostForm">
            <PostForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}