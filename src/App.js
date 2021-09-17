import logo from './logo.svg';
import './css/App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [data, setData]= useState([])
  const [isLoading, setIsLoading]= useState(true)
  
  let answer

    useEffect(()=>{
      if (isLoading) {
        fetch('http://localhost:3000/',{
          method:'GET',
          // body: {}
        }).then((response)=>{
          console.log(response);
          return response.json()
        }).then((data)=>{
          setData(data)
          setIsLoading(false)
          console.log(data[0]);
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
        <img src={logo} className="App-logo" alt="logo" /> 
   
        {callApi()}

      </header>
    </div>
    
  );
}

export default App;
