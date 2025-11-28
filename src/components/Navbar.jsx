import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">200ok Blog</Link>
      </div>
    </nav>
  )
}