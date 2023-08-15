import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>
    {
        console.log("UpperCase was clicked");
        let val=text.toUpperCase();
        setText(val);
    }
    const handleLowClick=()=>
    {
        console.log("LowerCase was clicked");
        let val=text.toLowerCase();
        setText(val);
    }
    const handleOnChange=(e)=>
    {
        console.log("On Change");
        setText(e.target.value);
    }
    const handleColor=()=>
    {
        let val=document.querySelector("#mybox");
        val.style.color="red";
    }
    
    const[text,setText]=useState("");
  return (
    <>
<div className='container' style={{color:props.mode==='light'?'#212529':'#fff'}}>
    <h3 >{props.heading}</h3>
  <div className="mb-3" >
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#212529':'#fff', color:props.mode==='light'?'#212529':'#fff'}}
          value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
  </div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
 <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
 <button className="btn btn-primary mx-2" onClick={handleColor}>Change Color</button>

</div>
<div className="container my-3">
   <h1>Your Text Summary</h1>
   <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and  {text.replace(/\s+/g, '').length} characters</p>
   <h3>Time to Read</h3>
   <p>{0.08*(text.split(" ").length)}secs</p>
</div>
</>
  )
}
