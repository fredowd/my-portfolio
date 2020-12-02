import React from 'react';
import './Header.css';

// Components
import AppBar from '../AppBar/AppBar';

function Header({ mobileMenuIsOpen, setMobileMenuIsOpen }) {
  return (
    <div display='flex'>
      <AppBar mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen} />
    </div>
  );
}

export default Header