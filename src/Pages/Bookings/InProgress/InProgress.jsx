import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInProgressBooking } from '../../../redux/bookings/actions'
import ReuseableTable from '../../../Components/ReuseableTable/ReuseableTable'

const InProgress = () => {
    const dispatch = useDispatch()

    const booking = useSelector(state => state.booking)
    const {
        loading,
        data,
        error
    } = booking

    useEffect(() => {
        dispatch(getInProgressBooking())
    }, [loading])

    return (
        <ReuseableTable
            headings={['Name', 'Email', 'Book Number', 'Car Name', 'From', 'To', 'Date', 'Time', 'Price', 'Status']}
            data={data.inProgress.bookings}
        />
    )
}

export default InProgress