import { useState } from 'react';
import '../../css/SignUp.css';
import { ENTRYPOINT } from '../../Entrypoint';



function SignUp(props){

const[userfirstNameReg, setUserFirstNameReg] = useState('');
const[userlastNameReg, setUserLastNameReg] = useState('');
const[mailReg, setMailReg] = useState('');
const[passwordReg, setPasswordReg] = useState('');
const[mailLog, setMailLog] = useState('');
const[passwordLog, setPasswordLog] = useState('');

    const register = () => {
        console.log('response');
        fetch(ENTRYPOINT + '/users/register',{
            method:'Post',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                FirstName: userfirstNameReg, 
                LastName: userlastNameReg, 
                Mail: mailReg, 
                Password: passwordReg, 
            })
          }).then((response)=>{
            console.log(response);
            return response.json()
          }).then((data)=>{
            sessionStorage.setItem('user', JSON.stringify(data));
            props.setUser(sessionStorage.getItem('user'))
          }) 
    };
    const login = () => {
        console.log('response');
        fetch(ENTRYPOINT + '/users/login',{
            method:'Post',
            headers: {
              'Content-Type' : 'application/json'
            },
             body: JSON.stringify({
            Mail: mailLog, 
            Password: passwordLog, 
             })
          }).then((response)=>{
            console.log(response);
            return response.json()
          }).then((data)=>{
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            props.setUser(sessionStorage.getItem('user'))
            Redirection()
        }) 
    };
    function Redirection(){
      document.location.href="/";
    }


    return(
        <div className="boxsignup">  
            <div className="containForms">
                <form className="FormSignUp" 
                 onSubmit={(e)=>{
                    e.preventDefault() 
                    login()
                    
                    }}  method="POST">
                    <h1 className="TitleSign">Login</h1>
                    
                    <label>Your Email</label>
                    <input className="InputSignIn" type="email" placeholder="xxx@xxx.com" name="email" onChange={(e) => {setMailLog(e.target.value);}}required ></input>

                    <label>Your Password</label>
                    <input className="InputSignIn" type="password" minlength="3"  onChange={(e) => {setPasswordLog(e.target.value);}}placeholder="*****" name="password" required></input>

                    <input className="InputSignIn" className="validate" type="submit"  value="Login" />
                </form> 

                <form className="FormSignUp" onSubmit={(e)=>{
                    e.preventDefault() 
                    register()
                    }}  method="POST">
                    <h1 className="TitleSignUp">Create an account </h1>

                    <label>Your Firstname</label>
                    <input className="InputSignup" type="text" onChange={(e) => {setUserFirstNameReg(e.target.value);}} placeholder="Maxime" name="firstname" required></input>

                    <label>Your Lastname</label>
                    <input className="InputSignup" type="text" onChange={(e) => {setUserLastNameReg(e.target.value);}} placeholder="THOMAS" name="lastname" required></input>
                    
                    <label>Your Email</label>
                    <input className="InputSignup" type="email" onChange={(e) => {setMailReg(e.target.value);}} placeholder="xxx@xxx.com" name="email" required ></input>

                    <label>Your Password</label>
                    <input className="InputSignup" type="password" onChange={(e) => {setPasswordReg(e.target.value);}} minlength="3" placeholder="*****" name="password" required></input>

                    <input className="InputSignup" className="validate" type="submit" value="Create" />
                </form> 
            </div>
        </div>
    )
}
  export default SignUp;
  