import React from 'react'
import abt_img from '../images/about_us.png';

function About() {
  return (
    <div className='about_wrapper'>
      <div className="wrapper_child">
        <div className='abt_img'>
          <img src={abt_img} alt="" />
        </div>
        <div className='text'>
          <ul>
            <li className='abt_head'>About Us</li>
            <li className='abt_text'>At Voice, we are passionate about fostering democratic participation and giving college students a powerful platform to have their voices heard. We believe that every student's opinion is essential in shaping the future of education and society. Through our innovative technology and user-friendly interface, we strive to create a space where students from all walks of life can share their perspectives, engage in meaningful discussions, and drive positive change.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;