import React, { useState } from 'react'

export default function TextForm(props) {
    function countWords(text) {
        const words = text.match(/\b\w+\b/g);
        return words ? words.length : 0;
    }
    
    const [text, setText] = useState("");

    const convertToUpper =()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success")
    }
    const convertToLower =()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!", "success")
    }
    const clearText =()=>{
        setText("");
        props.showAlert("Textbox is cleared!", "success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success")
    }
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }
    const convertOnChange =(event)=>{
        setText(event.target.value);
    }
  return (
    <div>
        <div className="container">
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">
                    <h1>Enter the text here to analyze</h1>
                </label>
                <textarea className={`form-control {if(body.backgroundColor==='dark'{{background-color: 'red'})}`} value={text} onChange={convertOnChange} id="myBox" rows="5"></textarea>
                {/* <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={convertOnChange} id="myBox" rows="5"></textarea> */}
            </div>
            <button disabled={text.length===0} className="btn btn-primary border border-white mx-2 my-2" onClick={convertToUpper}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary border border-white mx-2 my-2" onClick={convertToLower}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary border border-white mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary border border-white mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-danger border border-white mx-2 my-2" onClick={clearText}>Clear All</button>
        </div>
        <div className="container">
            <h3>Your text summary</h3>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{0.008 * countWords(text)} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </div>
  )
}
