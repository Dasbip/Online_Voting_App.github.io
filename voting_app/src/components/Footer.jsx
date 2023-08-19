import React from 'react'
import VoiceLogo from '../images/voice_logo-removebg-preview.png';
import InstaLogo from '../images/instagram-icon.png';
import FacebLogo from '../images/facebook-icon.png';

function Footer() {
  return (
    <div className='footer_wrapper'>
      <footer>
        <div class="company-details">
          <img src={VoiceLogo} alt="Logo" />
          <p>Voice: A cutting-edge e-voting system that makes it incredibly simple and effective for event planners to plan, manage, and carry out their events.</p>
          <p>Location: Kolkata </p>
          <p>Call: +91 1234567890 </p>
        </div>
        
          <div class="links">
            <h2>User & Organisers</h2>
            <div className="linls-wrapper-1">
            <li><a href="/">Login</a></li>
            <li><a href="/">Register</a></li>
            <li><a href="/">Voting Rules and Limits</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Provide Feedback</a></li>
            <li><a href="/">Terms and Condiback</a></li>
          </div>
          </div>
          
          <div class="links">
            <h2>The Platform</h2>
            <div className="linls-wrapper-2">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Active Events</a></li>
            <li><a href="/">Casting Votes</a></li>
            <li><a href="/">FAQs</a></li>
          </div>
        </div>
      </footer>
      <div className='foter-icon-wrapper'>
        <p>All Rights Reserved.</p>
        <ul className='social-icons'>
          <li><img src={InstaLogo} alt="" /></li>
          <li><img src={FacebLogo} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;