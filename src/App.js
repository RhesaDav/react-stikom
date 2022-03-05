import React from "react";
import "./style.css";
import {Link,Outlet} from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact'

export default function App() {
  return (
    <div>
      <Link to='/home'>Home</Link><br/>
      <Link to='/contact'>Contact</Link><br/>
      <Link to='/blog'>Blog</Link><br/>
      <Outlet/>
    </div>
  );
}
