import React from 'react';
import '../../css/SurveyDetails.css';
import {ListGroup, ListGroupItem, NavDropdown} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ENTRYPOINT } from '../../Entrypoint';
import { EmailShareButton, FacebookShareButton, WhatsappShareButton} from "react-share";
import { EmailIcon, FacebookMessengerIcon, WhatsappIcon, FacebookIcon } from "react-share";

export default function SurveyDetails(props){


    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const { survey_id } = useParams();
    const shareUrl = ENTRYPOINT + "/SurveyDetails/participate/"+survey_id;


    useEffect(()=>{
       
        if (isLoading) {
        fetch( ENTRYPOINT + '/surveys/SurveyDetails/'+survey_id ,{
            method:'GET'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setData(data)
            setIsLoading(false)
        });
    }
    
    })
    function displayAnswers(){
        if (data.length>0) {
            const answers = JSON.parse(data[0].answers)
            return answers.map((answer)=>{
                return(
                 
                    <>
                    <ListGroupItem key={answer} className="answers">{answer} <div>33%</div></ListGroupItem>
                    <NavDropdown.Divider />
                    </>
                
             )   
            })
}             

    }
  
        function displayListGroup(){

            
            if (data.length>0) {
                  console.log(data[0].Date);
                  const formatYmd = date => date.toISOString().slice(0, 10);

                  // Example
                  formatYmd(new Date()); 
                    
                        return(  
                            <>  
                            <h1 className="h1Details">{data[0].Title}</h1>
                            <p className="dateDetails">Created on {data[0].Date} </p>
                            <h2 className="h2Details">{data[0].Question}</h2>
                            <ListGroup className="">
                            {displayAnswers()}
                            </ListGroup>
                            </>  
                        
                     )   
                    
            }else{
                return ''
            }
        }             
    return (


<div className="containerCard">

  <div className="card">
    <div className="envelope"></div>

    {displayListGroup()}
  </div>
  <div class="share">
    <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={60} round={true} />
    </FacebookShareButton>
    <EmailShareButton url={shareUrl}>
        <EmailIcon size={60} round={true} />
    </EmailShareButton>
    <FacebookShareButton url={shareUrl}>
        <FacebookMessengerIcon size={60} round={true} />
    </FacebookShareButton>
    <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={60} round={true}/>
    </WhatsappShareButton>
    </div>
</div>       
       
    );
}