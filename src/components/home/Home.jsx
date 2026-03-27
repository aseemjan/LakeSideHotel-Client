import React from 'react'
import MainHeader from '../layout/MainHeader'
import RoomCarousel from '../common/RoomCarousel'
import RoomSearch from '../common/RoomSearch'
import Parallax from '/Users/admin/Desktop/GitHub/LakeSide-Hotel/Client/src/components/common/Parallax.jsx'
import HotelService from '/Users/admin/Desktop/GitHub/LakeSide-Hotel/Client/src/components/common/HotelService.jsx'



const home = () => {
  return (
    <section>
        <MainHeader />
        <section className='container'>
          <RoomSearch />
          <RoomCarousel />
          <Parallax />
          <RoomCarousel />
          <HotelService />
          <Parallax />
          <RoomCarousel />
        </section>
    </section>
  )
}

export default home
