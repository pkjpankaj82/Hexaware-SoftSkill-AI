import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import backgroundImg from '../components/back.jpg';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { color } from 'chart.js/helpers';

const GenAIContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

const GenTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


function GenAI (){
const navigate = useNavigate(); // Hook for navigation
document.getElementById("message").style.display = "none";
//const genAI = new GoogleGenerativeAI (process.env.REACT_GENAI_GOOGLE_API_KEY);
const genAI = new GoogleGenerativeAI ('AIzaSyC8vww2mh2v7QKACNd1Z0edwVci4ChJekA');
console.log('genAI :- '+genAI);
const [search, setSearch] = useState('');
const [aiResponse, setResponse] = useState('');
const [loading, setLoading] = useState(false);
 async function aiRun (){
    setLoading(true);
    setResponse('');
    const model     = genAI.getGenerativeModel({model :"gemini-pro"});
    const prompt    = `random question search to ${search} category wise`;
    const result    = await model.generateContent(prompt);
    const response  = await result.response;
    const text      = response.text();
    setResponse(text);
    setLoading(false);
 }
 const handleChangeSearch = (e) =>{
    setSearch(e.target.value);
 }
 const handleClick = () =>{
    aiRun();
 }

 const handleBack = () => {
   navigate('/dashboard'); // Redirect to dashboard
 };

 return(
   <GenAIContainer>
   <GenTitle>Generative AI Question search</GenTitle>
    <div>
        <div style={{display:'flex',color:'black'}}>
            <input placeholder='Search Question & Answer' onChange={(e) =>handleChangeSearch(e)}></input>
            <button style={{marginLeft:'10px',color:'black'}} onClick={() => handleClick()}>Search</button>
        </div>
        {
            loading == true && (aiResponse == '') ?
            <p style={{margin:'30px 0',color:'black'}}>Loading...</p>
            :
            <div style={{margin:'30px 0',color:'black'}}>
            <p>{aiResponse}</p>
            </div>
        }
    </div>
    <BackButton onClick={handleBack}>Back to Dashboard</BackButton>
    </GenAIContainer>
 );
}

export default GenAI;