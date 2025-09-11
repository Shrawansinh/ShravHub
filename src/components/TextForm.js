import React, { useRef } from 'react';
import {useState} from 'react'
import '../App.css';
//import PropTypes from 'prop-types'
// we use states in this component
export default function TextForm(props) {
  let newText;
    const [text,setText]=useState("");
    const HandelClickUpper=()=>{
        //console.log("Clicked"+text);
        newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upperCase sucessfully !" , "info");
    }
    const HandelClickLower=()=>{
      newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Convert to LowerCase sucessfully !" , "info");
    }
    const HandelClickClear=()=>{
      newText="";
      setText(newText);
      props.showAlert("Clear sucessfully !" , "info");
    }
    const HandelClickSentenceCase=()=>{
      newText=text.charAt(0).toUpperCase()+text.slice(1);
      setText(newText);
      props.showAlert("Convert to SentenceCase sucessfully !" , "info");
    }
    const HandelClickCapitalized=()=>{
      const words=text.split(" ");
      console.log(words);// return as an array
      newText=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
      setText(newText);
      props.showAlert("Convert to Capitalized sucessfully !" , "info");
    }
    const HandelClickCopy=()=>{
      navigator.clipboard.writeText(text)
      .then(()=>{
        alert("copied!");
      })
      .catch(err=>{
        alert("Failed to copy:");
      })
      props.showAlert("Copied to Clipboard sucessfully !" , "info");
    }
    const toChange=(evt)=>{
    setText(evt.target.value);
    }
  return (
    <form>
  <div className="form-group container mt-5">
    <h1 className='header'>Enter The Text For Analyze</h1>
    <label htmlFor="exampleFormControlTextarea1"></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={toChange} rows="8"></textarea>
      <button type="button" disabled={text.length===0}className="btn btn-primary mt-2" onClick={HandelClickUpper}>UpparCase</button>
      <button type="button" disabled={text.length===0}className="btn btn-primary  mt-2 mx-2" onClick={HandelClickLower}>LowerCase</button>
      <button type="button" disabled={text.length===0}className="btn btn-primary  mt-2 mx-2" onClick={HandelClickSentenceCase}>Sentence Case</button>
      <button type="button" disabled={text.length===0}className="btn btn-primary  mt-2 mx-2" onClick={HandelClickCapitalized}>Capitalized Text</button>
      <button type="button" disabled={text.length===0}className="btn btn-primary  mt-2 mx-2" onClick={HandelClickCopy}>Copy to clipbord</button>
      <button type="button" disabled={text.length===0}className="btn btn-primary  mt-2 mx-2" onClick={HandelClickClear}>ClearText</button>
  </div>
  <div className="container mt-2">
    <h1>Text Summary</h1>
    <p>Your text have {text.trim().split(" ").filter(Boolean).length} words {text.trim().length} Characters</p>
    <p>You read this text {0.0013333*(text.trim().split(" ").filter(Boolean).length)} min to read.</p>
  </div>
  <div className="container">
  <h2>Preview Output</h2>
  <textarea className="form-control mb-3" id="exampleFormControlTextarea1" value={text==="" ?'Enter Text Buddy!!':text} onChange={toChange} rows="8"></textarea>
  </div>
</form>
  );
}
