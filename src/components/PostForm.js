import React, {useState} from 'react';
import '../css/Form.css';
import Header from './Header';





 


function handleValidateClick(){

}

function PostForm(){

    
    
    const [items, setitems] = useState([
        {
            content: 
            <>
                <label>Answer</label>
                <input type="text" placeholder="Enter an answer" name="Answer" ></input>
            </>
        },
        {
            content: 
            <>
                <label>Answer</label>
                <input type="text" placeholder="Enter an answer" name="Answer" ></input>
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
                        <input type="text" placeholder="Enter an answer" name="Answer" ></input>
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



    return(
        <>
        <Header />
        <div className="page">
            <div className="survey">
                
                <h1>Your Survey</h1>
                
                    <form action="App.js"  method="POST">
                            <label>Title</label>
                            <input type="text" placeholder="Enter the title of the survey" name="title" ></input>

                            <label>Question</label>
                            <input type="text" placeholder="Enter your question" name="Question" ></input>

                            {displayItems()}
                        
                            <br />
                            <input className="fieldsAdd" type="button" id="more_fields" onClick={() => add_fields()} value="Add an answer" />
                    
                            <input className="fieldsRemove" type="button" id="remove_field" onClick={() => remove_fields()} value="Remove an answer" />

                            <input className="validate" type="submit" id="remove_field"  value="Validate" />
                    </form>              
            </div>
        </div>
        </>
    );
}

export default PostForm;
