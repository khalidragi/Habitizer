import React from 'react';
import { Link } from 'react-router-dom';
import SignedLinks from './SignedLinks';
import UnsignedLinks from './UnsignedLinks';

const Navbar = () => {
  return (
    <nav className='nav-wrapper indigo lighten-1'>
      <div className='container'>
        <Link to='/' className='brand-logo left'>
          Habitizer
        </Link>
        <SignedLinks />
        <UnsignedLinks />
      </div>
    </nav>
  );
};

export default Navbar;
