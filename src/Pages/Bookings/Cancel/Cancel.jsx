import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCancelledBooking } from '../../../redux/bookings/actions'
import ReuseableTable from '../../../Components/ReuseableTable/ReuseableTable'

const Cancel = () => {
    const dispatch = useDispatch()

    const booking = useSelector(state => state.booking)
    const {
        loading,
        data,
        updated,
        error
    } = booking

    useEffect(() => {
        dispatch(getCancelledBooking())
    }, [loading])

    return (
        <ReuseableTable
            headings={['Name', 'Email', 'Book Number', 'Car Name', 'From', 'To', 'Date', 'Time', 'Price', 'Status']}
            data={data.cancelled.bookings}
        />
    )
}

export default Cancel