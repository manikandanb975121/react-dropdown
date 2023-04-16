import React from 'react'
import {Route, Link, Routes, useLocation} from 'react-router-dom';

const Page = () => {
    const location = useLocation();
  return (
    <div><h1 style={{ color: 'white'}}>{location.pathname.split('/')[1].toUpperCase()}</h1></div>
  )
}

export default Page