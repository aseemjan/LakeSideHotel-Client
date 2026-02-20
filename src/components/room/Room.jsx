import React, { useEffect, useState } from 'react'
import { getAllRooms } from "../utils/ApiFunctions"
import RoomCard from './RoomCard'
import { Col, Container, Row } from 'react-bootstrap'

import RoomFilter from "../common/RoomFilter"
import RoomPaginator from "../common/RoomPaginator" 

const Room = () => {
    const[data, setData] = useState([])
    const[error, setError] = useState(null)
    const[isLoading, setisLoading] = useState(false)

    const[currentPage, setCurrentPage] = useState(1)
    const[roomsPerPage]= useState(6)
    const[filterData, setFilterData] = useState([{id :""}])

    useEffect(() =>{
        setisLoading(true)
        getAllRooms().then((data) => {
            setData(data)
            setFilterData(data)
            setisLoading(false)
        }).catch((error) => {
            setError(error.message)
            setisLoading(false)
        })    
    }, [])

    if(isLoading){
        return <div>Loading Rooms</div>
    }

    if(error){
        return <div className="text-danger">Error : {error}</div>
    }


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const totalPages = Math.ceil(filterData.length / roomsPerPage)

    const renderRooms = () => {
        const startIndex = (currentPage - 1) * roomsPerPage
        const endIndex = startIndex + roomsPerPage
        return filterData
        .slice(startIndex, endIndex)
        .map((room) =>  <RoomCard key={room.id} room={room} />)
    }

  return (
    <Container>
        <Row>
            <Col md={6} className='mb-3 mb-md-0'>
                <RoomFilter data={data} setFilterData={setFilterData} />
            </Col>
            <Col md={6} className='d-flex align-items-center justify-content-end'>
                <RoomPaginator 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Col>
        </Row>

        <Row>{renderRooms()}</Row>

        <Row>
            <Col md={6} className='d-flex align-items-center justify-content-end'>
                <RoomPaginator 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Col>
        </Row>
    </Container>
  )
}

export default Room
