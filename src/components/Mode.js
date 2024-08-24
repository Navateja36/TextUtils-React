import { useState } from "react"
import React from 'react'
// import img from './img.jpg'

export default function Mode() {
  const [mystyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white',

  })
  const [btntext,setBtnstext]=useState("Enable Dark Mode")

  let toggleStyle=()=>{
    if(mystyle.color==='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnstext("Enable Dark Mode")
    }
    else{
      setMyStyle({
        color:'white',
        backgroundColor:'black'
      })
      setBtnstext("Enable Light Mode")
    }
  }
  
  return (
    <>
      <div className="container" style={{ marginBottom: '100px', width:'330px'}}>
        <div className="card" style={mystyle} >
              <img src='..' className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
        </div>
        <div className="container my-3" >
          <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
      </div>   
    </>
  )
}
