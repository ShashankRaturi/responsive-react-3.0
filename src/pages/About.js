import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
function About() {
  return (
    <div className="about">
      <div 
      className="aboutTop"
      style={{backgroundImage: `url(${MultiplePizzas})`}}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Nisi blanditiis sunt explicabo 
          eligendi, autem voluptatem magnam? Eligendi, 
          quae quisquam delectus, odit praesentium optio, f
          ugiat exercitationem tenetur et obcaecati a com
          modi?</p>
      </div>
    </div>
  )
}

export default About
