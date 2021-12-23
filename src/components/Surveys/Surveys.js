import React from 'react';
import '../../css/Surveys.css';
import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { EmailShareButton, FacebookShareButton, WhatsappShareButton} from "react-share";
import { EmailIcon, FacebookMessengerIcon, WhatsappIcon, FacebookIcon } from "react-share";
import { ENTRYPOINT } from '../../Entrypoint';



export default function Surveys(props){


    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    let user = JSON.parse(props.User)
    console.log(user);

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
            console.log(data)
            setData(data)
            setIsLoading(false)
        });
    }

    })
    const shareUrl = ENTRYPOINT + "/SurveyDetailsForm/1";
  
        function displayTable(){
            if (data.length>0) {
                    return data.map((Surveys)=>{
                        console.log(Surveys);
                        return(
                         <tr>
                            <td className="id">{Surveys.Id}</td>
                            <td className="date">{Surveys.Date}</td>
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
                        </tr>
                     )   
                    })
            }else{
                return ''
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
                    <th>Share</th> 
                </tr>
            </thead>

            <tbody className="history">
                {displayTable()}
            </tbody>
        </Table>
                
    );
}