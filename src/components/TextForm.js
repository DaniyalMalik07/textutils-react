import React, { useState } from 'react'
export default function TextForm(props) {

  const handleUpcase = ()=>{
    setText(text.toUpperCase());
  }

  const handleOnChange = (event)=> {
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here to analyze');
  return (
    <div>
      <h1>{ props.heading }</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className='btn btn-primary button-styling' onClick={handleUpcase }>Convert to UpperCase</button>
      </div>
    </div>
  )
}
