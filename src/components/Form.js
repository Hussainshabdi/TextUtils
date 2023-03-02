import React,{useEffect, useState} from "react";


// import {font2} from '../App.css';
// import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";

// const newText = createGlobalStyle`
// @font-face {
//   font-family: 'Roboto Condensed' ;
//   src: url(${RobotoWoff2}) format('woff2'),
//        url(${RobotoWoff}) format('woff');
// }
 
// `;
export default function Form(props) {
const [text,setText] = useState(" ");
// const[output,setOutput] =useState([]); 

// useEffect(()=>{
// const fetch =
// })
 


// start


// end
function upperCase(){
  setText(text.toUpperCase())
}
function lowerCase(){
  setText(text.toLowerCase())
}

const clearText=()=>{
  setText(' ')
}
const changeOn=(e)=>{
setText(e.target.value);
}
  return (
    <>
    <div>
        <h1 className="text-center">Enter a text</h1>
      <div className="form-floating">
        <textarea
          className="form-control form"
          placeholder="Leave a comment here"
          id="para" value={text} onChange={changeOn}
          // eslint-disable-next-line react/style-prop-object
        //   style="height: 100px"
        style={{height : 230}}
        ></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={upperCase}>Change to UpperCase</button>
      <button className="btn btn-primary my-3 m-2" onClick={lowerCase}>Change to LowerCase </button>
      <button className="btn btn-primary my-3 m-2 " onClick={clearText}>Clear Text </button>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      {/* <p>{text.split(" ").length}Words.</p> */}
      <p>{text.length} Characters.</p>
      <p>{0.08*text.split(" ").length}Minutes to read</p>
     
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
