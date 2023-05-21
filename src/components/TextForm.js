import React, { useState } from "react";

export default function TextForm(props) {
  // UseState For Text
  const [text, setText] = useState("");
  const [buttontext, setButtonText] = useState("Copy Text");
  // Arrow Function For handle Uppercase click Button
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    setText('');
  };
  const handleCopyText = () => {
    if(buttontext == "Copy Text"){
      setButtonText("Text Coppied");
      navigator.clipboard.writeText(text);

    }else{
      setButtonText("Copy Text");
    }
  };
  const handleRemoveSpaces = () =>{
    setText(text.split(/[ ]+/).join(" "));
  }
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
        <h2 className=" my-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="TextBox"
            rows="8"
            style={{background:props.mode === 'dark'?'#121212':'white',color:props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-info mx-2" onClick={handleCopyText}>
          {buttontext}
        </button>
        <button className="btn btn-warning mx-2" onClick={handleRemoveSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2"style={{color:props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters {0.008*text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter Something to Preview'}</p>
      </div>
    </div>
  );
}
