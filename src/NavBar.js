import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    return(
        <div>
            <nav className='navbar'>
                <ul >
                    <Link to='/boards' className='line1'> Boards </Link>
                    <Link to='/subjects' className='line2'> Subjects </Link>
                    <Link to='/profile'  className='line3'> Profile </Link>
                </ul>
            </nav>
                
            
            
        </div>
    )
}

export default NavBar