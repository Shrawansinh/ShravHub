import React, { useRef }  from 'react'
import '../App.css';
import businessImage from '../images/Business.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Home(props) {
  return (
    <>
    <div className={`container text-${props.mode} text-center`}>
      <h1 className='header'>Every tool you need to work with Text, Images and PDFs in one place</h1>
      <h3 className='mt-3'>Every tool you need to use PDFs , Text And  Images , at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h3>
      <button type="button" className="btn btn-dark btn-lg mt-5">All</button>
      <Link to="/textform">
      <button type="button" className="btn btn-outline-dark btn-lg ms-5 mt-5">Text</button>
    </Link>
    <button type="button" className="btn btn-outline-dark btn-lg ms-5 mt-5">Images</button>
      <button type="button" className="btn btn-outline-dark btn-lg ms-5 mt-5">Pdf's</button>
    </div>
    <div className="container images">
        <img src={businessImage} className="rounded mx-auto d-block mt-5 po" alt="..." width="400"></img>
    </div>


    </>
  )
}
