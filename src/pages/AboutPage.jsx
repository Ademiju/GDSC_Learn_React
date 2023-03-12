import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
     <div className="about">
        <h1>About Me</h1>
        <p>Hello, my name is Ademiju Taiwo
I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Crown Interactive Limited</p>
       <p><a href='https://ademiju-taiwo.netlify.app/' target={'_blank'} rel="noreferrer">My Portfolio</a></p> 
        <Link to="/">Back to Home</Link>
        <p></p>
        <Link to="/contact">Contact Me</Link>
     </div>
    </Card>
  )
}

export default AboutPage