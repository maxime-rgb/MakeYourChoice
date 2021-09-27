import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import "../css/Home.css";
import App from '../App'



function Home(){


return(
    <div>



            <div className="container btn-survey">
                <label>Need a survey ?</label>
                <Link className="go" to="/PostForm">
                 Go !
                </Link>
                
                <img className="logo" src="/images/logo-mys-white-removebg.png"/>
                
            </div>
            <div className="pictures">
                <div className="picture"></div>
                <div className="picture"></div>
                <div className="picture"></div>
            </div>

    </div>
    
)
}
export default Home;