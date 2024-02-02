import React, {useState} from 'react'; 

const Textform = (props) => {
  const handleUpperCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }


  const handleLowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }


  const handleClear = ()=>{
    setText("");
  }


  const handleCopy = ()=>{
  let copy =document.getElementById("textbox");
  copy.select();
  document.getSelection().removeAllRanges();
  navigator.clipboard.writeText(copy.value);
  }
  const handleExtraSpace=()=>{
    let newText = text.replace(/\s{2,}/g,' ').trim();
    setText(newText);
  }

  const handleChange= (event)=>{
    setText(event.target.value);
  }
  const [text,setText]=useState("enter the text");
  return (
    <div>
      
  <div className="container">
    <h1>{props.heading}</h1>
    <textarea style={{backgroundColor: props.mode==="light"?"white":"#212529",color:props.mode==="light"?"black":"white"}} className="form-control my-3" onChange={handleChange} value={text} id="textbox" rows="8"></textarea>
    <button className='btn btn-primary' onClick={handleUpperCase}>Convert to UpperCase</button>
    <button className='btn btn-primary mx-1' onClick={handleLowerCase}>Convert to LowerCase</button>
    <button className='btn btn-primary ' onClick={handleExtraSpace}>Remove extra spaces</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy}>Text Copy</button>
    <button className='btn btn-danger ' onClick={handleClear}>Clear text</button>
  </div>

  <div className='container my-3'>
    <p>Word count: {text.split(" ").filter((element)=>{return element.length!==0}).length}  and character count: {text.length}</p>
    <p>{text.split(" ").length*0.008} minute to read</p>
    <h4>Preview</h4>
    <p>{text}</p>
  </div>
    </div>
  )
}

export default Textform;
