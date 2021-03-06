import React from 'react';
import './Header.css';

// Components
import AppBar from '../AppBar/AppBar';

function Header({ mobileMenuIsOpen, setMobileMenuIsOpen }) {
  return (
    <div display='flex sticky-top'>
      <AppBar mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen} />
    </div>
  );
}

export default Header