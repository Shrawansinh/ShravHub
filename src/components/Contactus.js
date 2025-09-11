import React, { useRef } from 'react';
import {useState} from 'react'
import '../App.css';
export default function Contactus(props) {
  const handelSubmit=(evt)=>{
    evt.preventDefault();
  }
  return (
    <>
    <div className="conatiner d-flex flex-row">
    <div className='container header text-center'>
      <h1 className='fs-1'>Contact Us</h1>
      <h5 className='mt-3'>Contact us to report a problem, clarify any</h5>
      <h5 >doubts about iLovePDF, or just find out more.</h5>
    </div>
    <div className="container header form">
      <form onSubmit={handelSubmit} className='p-5'>
  <div class="form-group">
    <label for="exampleFormControlInput1">Enter Your Register Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">How Many Problem Uou Faces</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>7</option>
      <option>9</option>
      <option>10</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlFile1" className='mt-2'>problem file input</label>
    <br />
    <input type="file" className="form-control-file mt-2" id="exampleFormControlFile1" />
  </div>
  <div className="form-group mt-3">
    <label htmlFor="exampleFormControlTextarea1">Write Brif Description About Your Problem</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mt-3" type="submit" >Submit</button>
</form>
    </div>
</div>
    </>
  )
}
