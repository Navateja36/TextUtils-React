import React ,{useState}from 'react'


export default function TextForm(props) {
    const handleupclick=()=>{
        // console.log("uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!","success");
        
    }
    const handleupclick1=()=>{
        // console.log("lowercase was clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase!","success");
        
    }
    const handleOnChage=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var text=document.getElementById('myid');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    

    const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    }

    const handleCleartext=()=>{
        let newtext='';
        setText(newtext);
        props.showAlert("Text Cleared!","success");
    }

    const [text,setText]=useState("");
    // setText("new text");

    
  return (
        <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myid" onChange={handleOnChage} value={text} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick} >Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleupclick1} >Convert to Lowecase</button>
        <button type="submit" onClick={handleCleartext} className="btn btn-warning mx-2 my-2">Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button type="submit" onClick={handleCopy} className="btn btn-warning mx-2 my-2">Copy Text</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>your text summary</h1>
        <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
        </>
  )
}
