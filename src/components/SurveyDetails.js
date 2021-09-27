import React from 'react';
import '../css/SurveyDetails.css';
import {ListGroup, ListGroupItem, NavDropdown} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function SurveyDetails(props){


    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const { survey_id } = useParams();
    useEffect(()=>{
       
        if (isLoading) {
        fetch('http://localhost:3000/SurveyDetails/'+survey_id ,{
            method:'GET',
            headers: {
                'Content-Type' : 'application/json' 
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Error - 404 Not Found')
            }else{
                return response.json()
            }
        }).then((data) => {
            console.log(data)
            setData(data)
            setIsLoading(false)
        });
    }
    
    })
    function displayAnswers(){
        if (data.length>0) {
            return data.map((Answers)=>{
                
                return(
                 
                    <>
                    <ListGroupItem key={Answers.Answer} className="answers">{Answers.Answer} <div>33%</div></ListGroupItem>
                    <NavDropdown.Divider />
                    </>
                
             )   
            })
}             

    }
  
        function displayListGroup(){
            if (data.length>0) {
                  
                    
                        return(  
                            <>  
                            <h1 className="h1Details">{data[0].Title}</h1>
                            <p className="dateDetails">Created on {data[0].Date}</p>
                            <h2 className="h2Details">{data[0].Question}</h2>
                            <ListGroup className="">
                            {displayAnswers()}
                            </ListGroup>
                            </>  
                        
                     )   
                    
            }else{
                return ''
            }
        }             
    return (


<div className="containerCard">

  <div className="card">
    <div className="envelope"></div>

    {displayListGroup()}
    
  </div>

</div>               
    );
}