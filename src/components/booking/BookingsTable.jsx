import { parseISO } from "date-fns"
import React, { useState, useEffect } from "react"
import DateSlider from "../common/DateSlider"

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
	const [filteredBookings, setFilteredBookings] = useState(bookingInfo)

	const filterBooknigs = (startDate, endDate) => {
		let filtered = bookingInfo
		if (startDate && endDate) {
			filtered = bookingInfo.filter((booking) => {
				const bookingStarDate = parseISO(booking.checkInDate)
				const bookingEndDate = parseISO(booking.checkOutDate)
				return (
					bookingStarDate >= startDate && bookingEndDate <= endDate && bookingEndDate > startDate
				)
			})
		}
		setFilteredBookings(filtered)
	}
    useEffect(() => {
		setFilteredBookings(bookingInfo)
	}, [bookingInfo])

	return (
        <section>

        </section>
        )
}

export default BookingsTable