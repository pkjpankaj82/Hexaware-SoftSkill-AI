import React, {useState} from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GenAI = () =>{
const genAI = new GoogleGenerativeAI (process.env.REACT_GENAI_GOOGLE_API_KEY);
const [search, setSearch] = useState('');
const [aiResponse, setResponse] = useState('');
const [loading, setLoading] = useState(flase);
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

 return(
    <div>
        <div style={{display:'flex'}}>
            <input placeholder='Search Question & Answer' onChange={(e) =>handleChangeSearch(e)}></input>
            <button style={{marginLeft:'20px'}} onClick={() => handleClick()}>Search</button>
        </div>
        {
            loading == true && (aiResponse == '') ?
            <p style={{margin:'30px 0'}}>Loading...</p>
            :
            <div style={{margin:'30px 0'}}>
            <p>{aiResponse}</p>
            </div>
        }
    </div>
 );
};

export default GenAI;