import React from 'react'
import Logo from '../images/voice_logo-removebg-preview.png';
function navbar() {
  return (
    <div>
        <ul className='navbar-wrapper'>
            <li className='nav-logo'><img src={Logo} alt="Voice" /></li>
            <li>Home</li>
            <li>AbouT</li>
            <li>Events</li>
            <li>Votings</li>
            <li>Contact Us</li>
            <li><button>Login</button></li>
            <li><button>Register</button></li>
        </ul>
    </div>
  )
}

export default navbar;