import React from 'react';
import '../css/Surveys.css';
import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function Surveys(props){


    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    let user = JSON.parse(props.User)


    useEffect(()=>{
       
        if (isLoading) {
        fetch('http://localhost:3000/Surveys/'+ user.id ,{
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
  
        function displayTable(){
            if (data.length>0) {
                    return data.map((Surveys)=>{
                        console.log(Surveys);
                        return(
                         <tr>
                            <td className="id">{Surveys.id}</td>
                            <td className="date">{Surveys.Date}</td>
                            <td className="question">{Surveys.Firstname}</td>
                            <td className="question">{Surveys.Title}</td>
                            <td className="question">
                                <Link className="navbarA" to={`/SurveyDetails/${Surveys.id}`} >
                                <img className="logofolder" src="/images/folder.svg"/>
                                </Link>
                            </td>
                        </tr>
                     )   
                    })
            }else{
                return ''
            }
        }             
    return (
    
        <Table striped bordered hover variant="dark">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>NAME OF AUTHOR</th>
                    <th>TITLE</th>
                    <th>ACCESS</th> 
                </tr>
            </thead>

            <tbody className="history">
                {displayTable()}
            </tbody>
        </Table>
                
    );
}