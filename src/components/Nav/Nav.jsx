import React from 'react';
import Logo from '../assests/LogoHenry.jpg';
import SearchBar from '../SearchBar/SearchBar.jsx';
import '../Nav/Nav.css';
import {Link} from 'react-router-dom'

function Nav({onSearch}) {
  return (
            <nav className='nav'>
                <img src={Logo} alt="logo henry" id='logoHenry' className='icon'/>
                <Link to ='/' className='textoHenry'> Weather App </Link>
                <div id='bar' ><SearchBar onSearch={onSearch}/></div>
            </nav>
  );
};

export default Nav;
