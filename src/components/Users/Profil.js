import React from 'react';
import { useState } from 'react';
import '../../css/Profil.css';
import { ENTRYPOINT } from '../../Entrypoint';


function Profil (props){

    const[userfirstNameUp, setUserFirstNameUp] = useState('');
    const[userlastNameUp, setUserLastNameUp] = useState('');
    const[passwordUp, setPasswordUp] = useState('');


    let user = JSON.parse(props.User)
   

    const UpdateForm = () => {
        
        fetch(ENTRYPOINT + '/users/Profil/' + user.id ,{
            method:'PUT',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                FirstName: userfirstNameUp, 
                LastName: userlastNameUp, 
                Password: passwordUp, 
            })
        }).then((response)=>{
            console.log(user.id);
            return response.json()
          }).then((data)=>{
            console.log(data);
            if (data.message) {
              return false
            }else{
              sessionStorage.setItem('user', JSON.stringify(data));
              props.setUser(sessionStorage.getItem('user'))
            }
          }) 
        };

    return(
        
        <div className="page">
            <div className="survey">
                
                    <form className="FormUpdate" onSubmit={(e)=>{ 
                        e.preventDefault() 
                        UpdateForm()
                    }}   
                    method="POST">

                            <label>Your Firstname</label>
                            {props.User !== 'null' ?<input className="formProfil" type="text" placeholder={user.FirstName} name="firstname" onChange={(e) => {setUserFirstNameUp(e.target.value);}} required></input>: <input className="formProfil" type="text" placeholder="Firstname" name="firstname" required></input> }

                            <label>Your Lastname</label>
                            {props.User !== 'null' ?<input className="formProfil" type="text" placeholder={user.LastName} name="lastname" onChange={(e) => {setUserLastNameUp(e.target.value);}} required></input>: <input className="formProfil" type="text" placeholder="Lastname" name="firstname" required></input> }
                            
                            <label>Your Email </label>
                            <label className="cannotMail"> ( Cannot be modified)</label>
                            {props.User !== 'null' ?<input className="formProfil" type="email" placeholder={user.Mail} name="email"></input>: <input className="formProfil" type="text" placeholder="Email" name="firstname" required></input> }
                            
                            <label>Your Password</label>
                            {props.User !== 'null' ?<input className="formProfil" type="password" minlength="5" placeholder={user.Password} name="password" onChange={(e) => {setPasswordUp(e.target.value);}} required></input>: <input className="formProfil" type="text" placeholder="******" name="firstname" required></input> }
                            
                            <input className="validate" type="submit"  value="SAVE  CHANGES" />
                    </form>              
            </div>
        </div>
      
    );
}

export default Profil;