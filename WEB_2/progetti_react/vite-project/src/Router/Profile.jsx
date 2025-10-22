import React from 'react'

const Profile = () => {
  return (
    <>
    <div>Profile</div>
    <nav className='navbar'>
      <Link to="me">My Profile</Link>
      <Link to="/profile/2">Profilo 2</Link>
    </nav>
    <div><Outlet></Outlet></div>
    </>
  )
}

export default Profile