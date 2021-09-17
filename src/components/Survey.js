import React from 'react';
import '../css/Form.css';


function Survey(){
    
    return(

        <div className="survey">
            
            <h1>Your Survey</h1>
            
                <form action="App.js"  method="POST">
                        <label>Title</label>
                        <input type="text" placeholder="Enter the title of the survey" name="title" ></input>

                        <label>Question</label>
                        <input type="text" placeholder="Enter your question" name="Question" ></input>

                        <label>Answer</label>
                        <input type="text" placeholder="Enter an answer" name="Answer" ></input>
                        <input type="checkbox" checked="checked" />

                        <label>Answer</label>
                        <input type="text" placeholder="Enter an answer" name="Answer" ></input>
                        <input type="checkbox" checked="checked" />


                        <div id="content">
                    
                        </div>

                        <input type="button" style={{width:'50%'}} id="more_fields" onClick={() => add_fields()} value="Add an answer" />

                
                        <input type="button" style={{width:'50%'}} id="remove_field" onClick={() => remove_fields()} value="Remove an answer" />
                    

                        <button type="submit" onClick={() => handleValidateClick()}> Validate the survey</button>
                </form>              
        </div>
    );
}

export default Survey;
