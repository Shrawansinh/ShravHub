import React from 'react'
import '../App.css'
import businessImage from '../images/Business.png'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <>
      <div className={`container text-${props.mode} text-center`}>
        <h1 className='header'>
          Every tool you need to work with Text, Images and PDFs in one place
        </h1>

        <h3 className='mt-3'>
          Every tool you need to use PDFs, Text and Images, at your fingertips.
          All are 100% FREE and easy to use!
        </h3>

        <button className="btn btn-dark btn-lg mt-5">All</button>

        <Link
          to="/textform"
          className="btn btn-outline-dark btn-lg ms-5 mt-5"
        >
          Text
        </Link>

        <Link
          to="/images"
          className="btn btn-outline-dark btn-lg ms-5 mt-5"
        >
          Images
        </Link>

        <Link
          to="/pdf"
          className="btn btn-outline-dark btn-lg ms-5 mt-5"
        >
          Pdf's
        </Link>
      </div>

      <div className="container images">
        <img
          src={businessImage}
          className="rounded mx-auto d-block mt-5 po"
          alt="Business"
          width="400"
        />
      </div>
    </>
  )
}

