import React from 'react'
import '../App.css'

export default function About(props) {
  return (
    <div className="container py-5">

      <h2
        className="header text-center mb-5"
        style={{
          animation: "fadeDown 0.8s ease forwards"
        }}
      >
        <b>Our Story</b>
      </h2>

      <p
        className={`font-monospace text-${props.mode} text-center fs-4 mx-auto mb-4`}
        style={{
          maxWidth: "900px",
          lineHeight: "1.8",
          animation: "fadeUp 0.9s ease forwards",
          animationDelay: "0.1s",
          opacity: 0
        }}
      >
        ShravHub team is here to make managing documents effortless. From firsthand
        experience, we know that dealing with PDF files can be very time-consuming.
        Wouldn't it be better if your time was well spent instead of stressing over PDFs?
      </p>

      <p
        className={`font-monospace text-${props.mode} text-center fs-5 mx-auto mb-4`}
        style={{
          maxWidth: "900px",
          lineHeight: "1.8",
          animation: "fadeUp 0.9s ease forwards",
          animationDelay: "0.25s",
          opacity: 0
        }}
      >
        My name is Shrawansinh. Born and based in India, Gujarat in 2010, our goal has
        always been to offer a free, accessible, and top-quality service that is easy
        to use. Our project started as a personal need, but it has grown into a global
        community.
      </p>

      <p
        className={`font-monospace text-${props.mode} text-center fs-5 mx-auto mb-4`}
        style={{
          maxWidth: "900px",
          lineHeight: "1.8",
          animation: "fadeUp 0.9s ease forwards",
          animationDelay: "0.4s",
          opacity: 0
        }}
      >
        You showed us that all PDF problems were worth solving, and that's why our small
        team of developers works tirelessly to offer you an enjoyable editing experience.
      </p>

      <p
        className={`font-monospace text-${props.mode} text-center fs-5 mx-auto mb-4`}
        style={{
          maxWidth: "900px",
          lineHeight: "1.8",
          animation: "fadeUp 0.9s ease forwards",
          animationDelay: "0.55s",
          opacity: 0
        }}
      >
        You showed us that all Text problems were worth solving, and that's why our small
        team of developers works tirelessly to offer you an enjoyable editing experience.
      </p>

      <p
        className={`font-monospace text-${props.mode} text-center fs-5 mx-auto`}
        style={{
          maxWidth: "900px",
          lineHeight: "1.8",
          animation: "fadeUp 0.9s ease forwards",
          animationDelay: "0.7s",
          opacity: 0
        }}
      >
        You showed us that all Image problems were worth solving, and that's why our small
        team of developers works tirelessly to offer you an enjoyable editing experience.
      </p>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  )
}
