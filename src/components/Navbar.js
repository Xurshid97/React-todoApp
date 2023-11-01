import React from 'react'

function Navbar() {
  return (
    <nav className='navBar'>
        <div className='logo'><a>Logo</a></div>
        <ul>
            <li>My profile</li>
            <li>Design</li>
            <li>Analytics</li>
        </ul>
        <div className='logo'>
            <img></img>Img
        </div>
    </nav>
  )
}

export default Navbar