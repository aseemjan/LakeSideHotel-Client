import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <section className='container mt-5'>
      <h2>Welcome To Admin Dashboard</h2>
      <hr />

      <h2><Link to={"/existing-rooms"}>Manage Rooms</Link></h2> {/* The 'h2' tags are written by me for styling purpose, not by the mentor */}
      <h2><Link to={"/existing-bookings"}>Manage Bookings</Link></h2>{/* The 'h2' tags are written by me for styling purpose, not by the mentor */}
    </section>
  )
}

export default Admin
