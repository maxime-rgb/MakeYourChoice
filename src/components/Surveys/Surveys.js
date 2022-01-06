import React from 'react';
import '../../css/Surveys.css';
import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { EmailShareButton, FacebookShareButton, WhatsappShareButton} from "react-share";
import { EmailIcon, FacebookMessengerIcon, WhatsappIcon, FacebookIcon } from "react-share";
import { ENTRYPOINT } from '../../Entrypoint';
import { toast } from 'react-toastify';



export default function Surveys(props){


    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    let user = JSON.parse(props.User)
    // console.log(user);

    useEffect(()=>{
       
        if (isLoading && user) {
        fetch(ENTRYPOINT + '/surveys/Surveys/'+ user.id ,{
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
            
            setData(data)
            setIsLoading(false)
            
        });
    }

    })

        function onDelete(survey_id){
            fetch(ENTRYPOINT + '/surveys/delete/'+ survey_id ,{
                method:'POST',
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
                if (data.message) {
                    toast.error(data.message)
                  } else {
                // console.log(data)
                toast.success('Le sondage à bien été supprimé')
                setIsLoading(true)
                  }
            });
        }
        function displayTable(){
            
            if (data.length>0) {
                    return data.map((Surveys, key)=>{
                        const date = Date.parse(data[0].Date);
                        const dateObject = new Date(date)
                        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        // console.log(Surveys);    console.log(data)
                        const shareUrl =  "http://localhost:3001/SurveyDetails/participate/"+data[0].Id;
                        return(
                         <tr key={key}>
                            <td className="id">{Surveys.Id}</td>
                            <td className="date">{dateObject.toLocaleDateString('en-EN',options)} </td>
                            <td className="question">{Surveys.Title}</td>
                            <td className="questionAccess">
                                <Link className="navbarA" to={`/SurveyDetails/${Surveys.Id}`} >
                                    <img className="logofolder" src="/images/folder.svg"/>
                                </Link>
                            </td>
                            <td className="share">
                            <EmailShareButton url={shareUrl}>
                              <EmailIcon size={40} round={true} />
                            </EmailShareButton>
                            <FacebookShareButton url={shareUrl}>
                              <FacebookIcon size={40} round={true} />
                            </FacebookShareButton>
                            <FacebookShareButton url={shareUrl}>
                              <FacebookMessengerIcon size={40} round={true} />
                            </FacebookShareButton>
                            <WhatsappShareButton url={shareUrl}>
                              <WhatsappIcon size={40} round={true} />
                            </WhatsappShareButton>
                            </td>
                            <td><button className='btn-danger' onClick={()=>{onDelete(Surveys.Id)}}>Delete</button></td>
                        </tr>
                      )   
                    })
            }else{
                console.log('ici');
                return <tr></tr>
            }
        }             
    return (
    
        <Table striped bordered hover variant="dark">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TITLE</th>
                    <th>ACCESS</th>
                    <th>SHARE</th>
                    <th>DELETE</th>  
                </tr>
            </thead>

            <tbody className="history">
                {displayTable()}
            </tbody>
        </Table>
                
    );
}