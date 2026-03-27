import axios from "axios"

export const api = axios.create({
    baseURL : "http://localhost:9192"
})


/* This Function Adds a New Room to the Database */
export async function addRoom(photo, roomType, roomPrice){
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)
    if(response.status == 201){
        return true
    }else{
        return false
    }
}

/* This Function Gets all Room Types from the Database */
export async function getRoomTypes(){
    try{
        const response = await api.get("/rooms/room/types")
        return response.data

    }catch (error) {
        throw new Error("Error Fetching Room Types")
    }
}

/* This function Gets All the Rooms from the Database */
export async function getAllRooms(){
    try {
        const result = await api.get("/rooms/all-rooms")
        return result.data

    }catch(error){
        throw new Error("Error Fetching Rooms")
    }
}

/* This function Deletes room by Id */
export async function deleteRoom(roomId){
    try {
        const result = await api.delete(`rooms/delete/room/${roomId}`)
        return result.data
    }catch(error){
        throw new Error(`Error deleting room ${error.message}`)
    }
}

/* This function Updates a Room by Id */ 
export async function updateRoom(roomId, roomData){
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("photo", roomData.photo)

    const response = await api.put(`/rooms/update/${roomId}`,formData)
    return response
}

/* This function gets a room by Id */
export async function getRoomById(roomId){
    try{
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    }catch(error){
        throw new Error(`Error fetching room with id ${roomId} : ${error.message}`)
    }
}

/* This Function saves new Booking in The Database*/
export async function bookRoom(roomId, booking){
    try{
        const response = await api.post(`/bookings/room/${roomId}/booking`, booking)
        return response.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error(error.response.data)
        }else{
            throw new Error(`Error booking room : ${error.message}`)
        }
    }
}

/* This Function gets all Bookings from The Database */
export async function getAllBookings(){
    try{
        const result = await api.get('/bookings/all-bookings')
        return result.data
    }catch(error){
        throw new Error(`Error fetching bookings : ${error.message}`)
    }
}

/* This Function gets a Booking by Confirmation Code */
export async function getBookingByConfirmationCode(confirmationCode){
    try{
        const result = await api.get(`/bookings/confirmation/${confirmationCode}`)
        return result.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error(error.response.data) 
        }else{
            throw new Error(`Error finding booking : ${error.message}`)
        }
    }
}

/* This Function cancels a Booking by Id */
export async function cancelBooking(bookingId){
    try{
        const result = await api.delete(`/bookings/booking/${bookingId}/delete`)
        return result.data
    }catch(error){
        throw new Error(`Error cancelling booking : ${error.message}`)
    }
}

/* This function gets all availavle rooms from the database with a given date and a room type */
export async function getAvailableRooms(checkInDate, checkOutDate, roomType) {
	const result = await api.get(
		`rooms/available-rooms?checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}&roomType=${roomType}`
	)
	return result
}