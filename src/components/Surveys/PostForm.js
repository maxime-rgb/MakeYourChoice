import React, {useState} from 'react';
import '../../css/Form.css';
import Header from '../Header';
import {Form} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { ENTRYPOINT } from '../../Entrypoint';




function PostForm(props){



const[title, setTitleName] = useState('');
const[question, setQuestion] = useState('');
const[date, setDate] = useState(new Date());  
const[answer, setAnswer] = useState([]);
let user = JSON.parse(props.User)


    const newSurvey = () => {
        const arrayInputs = document.querySelectorAll('#answer')
        console.log(arrayInputs);
        let inputValues = []
        arrayInputs.forEach((input)=>{
            if (input.value.length > 0) {
                inputValues.push(input.value)
            }
        })
        console.log(inputValues);
        fetch( ENTRYPOINT + '/surveys/newSurvey/'+ user.id ,{
            method:'Post',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Title: title, 
                Question: question,    
                Date: date, 
                AllAnswer: JSON.stringify(inputValues), 
            })
          }).then((response)=>{
            console.log(response);
            return response.json()
          }).then((data)=>{
        
            console.log(data);
        }) 
    };


    const [items, setitems] = useState([
        {
            content: 
            <>
                <label>Answer</label>
                <input id="answer" type="text" placeholder="Enter an answer" name="answer" ></input>
            </>
        },
        {
            content: 
            <>
                <label>Answer</label>
                <input id="answer" type="text" placeholder="Enter an answer" name="answer" ></input>
            </>
        }
    ])
     function  add_fields() {
        setitems( 
            items.concat([        
                {
                    content: 
                    <>
                        <label>Answer</label>
                        <input id="answer" type="text" placeholder="Enter an answer" name="answer" ></input>
                    </>
                }
            ])
        )
    }
    function remove_fields() {
        setitems( 
            items.slice(0,-1)
        )
    }


    function displayItems(){
        return items.map((item)=>{
            return item.content
        })
    }
    function Redirection(){
        alert("Votre sondage à bien été crée !")

        document.location.href="/Surveys";
      }
    return(
        <>
        
        <div className="page">
            <div className="survey">
                
                <form className="FormNewSurvey" onSubmit={(e)=>{
                    e.preventDefault() 
                    newSurvey()
                    Redirection()
                     
                   
                }}  method="POST">
                            <label>Title of survey</label>
                            <input type="text" placeholder="Enter the title of the survey" onChange={(e) => {setTitleName(e.target.value);}} name="title" ></input>

                            <label>Question</label>
                            <input type="text" placeholder="Enter your question" onChange={(e) => {setQuestion(e.target.value);}} name="question" ></input>

                            <label>Date :</label>
                            <Form.Group controlId="duedate">
                                <Form.Control
                                    type="date"
                                    name="duedate"
                                    placeholder="Due date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </Form.Group>

                            {displayItems()}
                        
                            <br />
                            <input className="fieldsAdd" type="button" id="more_fields" onClick={() => add_fields()} value="Add an answer"></input>
                    
                            <input className="fieldsRemove" type="button" id="remove_field" onClick={() => remove_fields()} value="Remove an answer"></input>

                            <input className="validate" type="submit" id="remove_field"  value="Validate"></input>
                    </form>              
            </div>
        </div>
        </>
    ); 
}
export default PostForm;
