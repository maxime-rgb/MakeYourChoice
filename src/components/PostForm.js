import React from 'react';
import axios from 'axios';


function handleRemoveClick(){
    
}


function handleAddClick(){

}


function PostForm(){
    
    return(

    <div class="survey">
        <h1>Login</h1>

            <form action="/users/create" multiple method="POST">
                    <label>Title</label>
                    <input type="text" placeholder="Enter the title of the survey" name="title" required></input>
                    <label>Question</label>
                    <input type="text" placeholder="Enter your question" name="Question" required></input>
                    <label>Answer</label>
                    <input type="text" placeholder="Enter an answer" name="Answer" required></input>
                    <label>Answer</label>
                    <input type="text" placeholder="Enter an answer" name="Answer" required></input>
                    <button onClick={() => handleRemoveClick()}>Add an answer </button>
                    <button onClick={() => handleAddClick()}> Remove an answer</button>  
            </form>              
    </div>
    );
}

export default PostForm;
