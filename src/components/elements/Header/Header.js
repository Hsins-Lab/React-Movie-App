import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className='rmdb-header'>
    <div className='rmdb-header-content'>
      <Link to='/udemy_React-Movie-App'>
        <img
          className='rmdb-logo'
          src='/udemy_React-Movie-App/images/reactMovie_logo.png'
          alt='rmdb-logo'
        />
      </Link>
      <img
        className='rmdb-tmdb-logo'
        src='/udemy_React-Movie-App/images/tmdb_logo.png'
        alt='tmdb-logo'
      />
    </div>
  </div>
);

export default Header;
