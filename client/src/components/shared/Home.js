import React from "react";
import { Card } from 'react-bootstrap';
import cloud from '../styles/cloud.jpg';
import { ContainerPadding } from "../styles/Styles";

const Home = () => {
  return(

 
    <>
    <header style={{ backgroundSize: "cover" , backgroundImage: `url(${cloud})`}}>

        
    <div className='p-5 text-center bg-image' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '400px' }}>
        <div className="row align-items-center justify-content-center text-center text-white h-100">
        <div className="col-lg-8"> 
        
        <h1 className="display-1 font-weight-bold mb-3">
                 Notes
                 
         </h1>
   
         <hr className="my-4 bg-white " />
        
         <p className="font-weight-light mx-5 mb-3">
                 This site can store notes.
         </p>
   
         <a className='btn btn-outline-light btn-lg mb-3' href='/notes' role='button'>
                  Notes!
         </a>
        
        </div>
   
        </div>
   
        </div>
   
   
   
   
   </header>



   <div>

  <ContainerPadding>
  <Card>
  <Card.Header>NOTE</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        This is a simple site to store notes.{' '}
      </p>
    
    </blockquote>
  </Card.Body>
</Card>

  </ContainerPadding>






    </div>
    </>


  )

 
}

export default Home;
