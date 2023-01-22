import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompletedBooking } from '../../../redux/bookings/actions'
import ReuseableTable from '../../../Components/ReuseableTable/ReuseableTable'

const Completed = () => {
    const dispatch = useDispatch()

    const booking = useSelector(state => state.booking)
    const {
        loading,
        data,
        updated,
        error
    } = booking

    useEffect(() => {
        dispatch(getCompletedBooking())
    }, [loading])

    return (
        <ReuseableTable
            headings={['Name', 'Email', 'Book Number', 'Car Name', 'From', 'To', 'Date', 'Time', 'Price', 'Status']}
            data={data.completed.bookings}
        />
    )
}

export default Completed