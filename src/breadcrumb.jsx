import React from 'react';

import './styles/breadcrumb.css'
import { Link, useLocation } from 'react-router-dom'; 

const BreadCrumb = ({currentPage}) => {
  const location = useLocation();
  return (
    <>
         <div className="breadcrumb">
            <Link to="/" className='navigate-link'>Главная</Link>
            <span> { ">" } </span>
            <a className="link">{currentPage}</a>
        </div>
    </>
  );
}

export default BreadCrumb;
