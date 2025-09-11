import React, { useRef }  from 'react'
import '../App.css';
import { useState } from 'react';
export default function About(props){
    return (
        <div className="container ">
            <h2 className='justify-content-center header text-center'><b>Our Story</b></h2>

            <p className='{font-monospace m-3 lh-1 text-${props.mode} mt-lg-5 ms-5 text-center align-middle fs-1}'>ShravHub team is here to make managing documents effortless. From firsthand experience, we know that dealing with PDF files can be very time-consuming. Wouldn't it be better if your time was well spent instead of stressing over PDFs?</p>
            <p className='{font-monospace m-3 lh-1 text-${props.mode} mt-lg-5 ms-5 text-center align-middle fs-2}'>My Name Is Shrawansinh , Born and based in india,Gujarat in 2010, our goal has always been to offer a free, accessible, and top-quality service that is easy to use. Our project started as a personal need, but it has grown to become a global community as one of the most visited PDF websites. Being able to help so many people makes each one of us feel truly lucky.</p>
            <p className='{font-monospace m-3 lh-1 text-${props.mode} mt-lg-5 ms-5 text-center align-middle fs-2}'>You showed us that all PDF problems were worth solving, and that's why our small team of developers works tirelessly to offer you an enjoyable editing experience.</p>
            <p className='{font-monospace m-3 lh-1 text-${props.mode} mt-lg-5 ms-5 text-center align-middle fs-2}'>You showed us that all Text problems were worth solving, and that's why our small team of developers works tirelessly to offer you an enjoyable editing experience.</p>
            <p className='{font-monospace m-3 lh-1 text-${props.mode} mt-lg-5 ms-5 text-center align-middle fs-2}'>You showed us that all Pics problems were worth solving, and that's why our small team of developers works tirelessly to offer you an enjoyable editing experience.</p>
        </div>
    )
}