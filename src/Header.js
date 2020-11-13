import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

function Heading() {
  return (
    <div className="App">
     <header className='App-header'>
       <div className='App-header-main'>Viveka</div>
       <Link  className='App-header-item1'>Home</Link>
       <Link  className='App-header-item2'>About</Link>
       <Link to='./login' className='App-header-item3'>Login</Link>
     </header>
    </div>
  );
}

export default Heading;
