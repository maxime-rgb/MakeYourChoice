import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [data, setData]= useState([])
  const [isLoading, setIsLoading]= useState(true)
  

    useEffect(()=>{
      if (isLoading) {
        fetch('http://localhost:3000/register',{
          method:'Post',
          headers: {
            'Content-Type' : 'application/json'
          },
           body: JSON.stringify({a:1})
        }).then((response)=>{
          console.log(response);
          return response.json()
        }).then((data)=>{
      
          console.log(data);
        })  
      }
    })


    function callApi(){
      if (data.length > 0) {
        
        return data.map((Surveys)=>{

          return (
            <div key={Surveys.Title}>
              <h1>{Surveys.Title}</h1>
              <h3>{Surveys.Question}</h3>
              <p>
              
              </p>
              </div>
          )
        })
      }
    }
  
  return (
    <div className="App">
      <header className="App-header">
   
        {callApi()}

      </header>
    </div>
    
  );
}

export default App;
