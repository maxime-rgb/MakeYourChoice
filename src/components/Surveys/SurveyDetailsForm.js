import React from 'react';
import '../../css/SurveyDetails.css';
import {ListGroup, ListGroupItem, NavDropdown} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { ENTRYPOINT } from '../../Entrypoint';

export default function SurveyDetailsForm(props){


    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const { survey_id } = useParams();


    useEffect(()=>{
        if (isLoading) {
        fetch('http://localhost:3000/surveys/SurveyDetails/'+survey_id ,{
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
            const answers = JSON.parse(data[0].answers)
            return answers.map((answer)=>{
                
                return(
                 
                    <>
                    <ListGroupItem key={answer} className="answers">{answer} 
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" value={answer} className='choiceInput' />
                        </Form.Group>
                    </ListGroupItem>
                    <NavDropdown.Divider />
                    </>
                
             )   
            })
        }             
    }
    function displayListGroup(){
        if (data.length>0) {
                console.log(data[0].Date);
                const formatYmd = date => date.toISOString().slice(0, 10);
                // Example
                formatYmd(new Date()); 
                    return(  
                        <>  
                        <h1 className="h1Details">{data[0].Title}</h1>
                        <p className="dateDetails">Created on {data[0].Date} </p>
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
    
    function handleSubmit(e){
        e.preventDefault()
        const choices = document.querySelectorAll('.choiceInput')
        const userChoice = []
        choices.forEach((choice)=>{
            if (choice.children[0].checked) {
                userChoice.push(choice.children[0].value)
            }
        })
        const User = JSON.parse(props.User)
        console.log(User);
        fetch(ENTRYPOINT + '/answers/new', {
            method:'Post',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                surveyId: survey_id,
                userId: User.id,
                answer : JSON.stringify(userChoice)
            })
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data);
        })
    }
    return (
        <div className="containerCard">
            <div className="card">
                <div className="envelope"></div>
                <Form onSubmit={(e)=>{handleSubmit(e)}}>
                    {displayListGroup()}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>               
    );
}