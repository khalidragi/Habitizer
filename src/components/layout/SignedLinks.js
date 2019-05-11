import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedLinks = () => {
  return (
    <div>
      <ul className='right'>
        <li>
          <NavLink to='/'>Tracker</NavLink>
        </li>
        <li>
          <NavLink to='/'>Log Out</NavLink>
        </li>
        <li>
          <NavLink to='/' className='btn btn-floating grey lighten-1'>
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedLinks;
