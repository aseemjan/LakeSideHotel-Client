import React from 'react'
import MainHeader from '../layout/MainHeader'
import RoomCarousel from '../common/RoomCarousel'
import RoomSearch from '../common/RoomSearch'
import Parallax from '/Users/admin/Desktop/GitHub/LakeSide-Hotel/Client/src/components/common/Parallax.jsx'
import HotelService from '/Users/admin/Desktop/GitHub/LakeSide-Hotel/Client/src/components/common/HotelService.jsx'
import { useLocation } from "react-router-dom"
import { useAuth } from '../auth/AuthProvider'


const home = () => {
  const location = useLocation()

	const message = location.state && location.state.message
	const currentUser = localStorage.getItem("userId")

  return (
    <section>
      {message && <p className="text-warning px-5">{message}</p>}
			{currentUser && (
				<h6 className="text-success text-center"> You are logged-In as {currentUser}</h6>
			)}
        <MainHeader />
        <div className='container'>
          <RoomSearch />
          <RoomCarousel />
          <Parallax />
          <RoomCarousel />
          <HotelService />
          <Parallax />
          <RoomCarousel />
        </div>
    </section>
  )
}

export default home
