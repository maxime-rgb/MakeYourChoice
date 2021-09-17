import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import "../css/Home.css"




function Home(){


return(
    <div>

        <Header/>

            <div className="container btn-survey">
                <label>Need a survey ?</label>
                <Link className="go" to="/PostForm">
                 Go !
                </Link>
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