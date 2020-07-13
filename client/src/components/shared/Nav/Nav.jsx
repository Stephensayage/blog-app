import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">PostsApp</NavLink>
        <div className="links">
          <NavLink className="link" to="/products">Posts</NavLink>
          <NavLink className="link" to="/add-product">Add Post</NavLink>
        </div>
      </div>
    </nav>
  )

}

export default Nav