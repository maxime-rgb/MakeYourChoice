import React from 'react';
import { Link } from "react-router-dom";
import "../css/Home.css";




function Home(props){
    console.log(props);
    let user = JSON.parse(props.User)

    return(
        <div>
            <div className="container btn-survey">
                <label>Need a survey ?</label>
                {(props.User != 'null') && (props.User != null) ? <Link className="go" to="/PostForm">
                    Start ! </Link> : <Link className="go" to="/SignUp"> Sign In!</Link> } 
                <img className="logo" src="\images\MYC_white.png"/>
            </div>
        </div>
        
    )
}
export default Home;