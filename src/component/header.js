import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import "../App.css";
import {  useSelector } from 'react-redux';
const Header = () => {
  const getdata = useSelector((state) => state.cartreducer);


  return (
    <div>
      <span className="header">Cart -Redux </span>
      <ul className="nav">
        <li >
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart({getdata.carts.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
