import React from 'react'
import { Link } from "react-router-dom";


const AdminHeader = () => {
  return (
    <nav className='navBox'>
        <Link to="/admin">Admin</Link>
        <Link to="/admin/UserList">UserList</Link>
  </nav>
  )
}

export {AdminHeader}