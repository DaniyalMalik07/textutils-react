import React, { useState } from 'react'
export default function TextForm(props) {

  const handleUpcase = ()=>{
    setText(text.toUpperCase());
  }

  const handleLowerCase = ()=>{
    setText(text.toLowerCase())
  }

  const handleOnChange = (event)=> {
    setText(event.target.value)
  }

  const handleClearCase = ()=> {
    setText("")
  }

  const handleReverseCase = ()=> {
    setText(text.split('').reverse().join(''))
  }

  const [text, setText] = useState('Enter text here to analyze');
  return (
    <>
      <div className='container'>
        <h1>{ props.heading }</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
          <button className='btn btn-primary button-styling' onClick={handleUpcase}>Convert to UpperCase</button>
          <button className='btn btn-primary button-styling' onClick={handleLowerCase}>Convert to LowerCase</button>
          <button className='btn btn-primary button-styling' onClick={handleReverseCase}>Reverse Text</button>
          <button className='btn btn-primary button-styling' onClick={handleClearCase}>Clear Text</button>
          <button className='btn btn-primary button-styling' onClick={handleCopy}>Copy Text</button>
        </div>
      </div>
      <div className='container my-2'>
        <h3>Your text summary</h3>
        <p>{text.split(' ').length} words, {text.length} characters</p>
        <p>{text.split(' ').length * 0.008 }</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  )
}
