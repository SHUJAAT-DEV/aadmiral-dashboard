import React, { useState, useEffect } from 'react'
import AllBooking from './AllBookings/AllBookings'
import InProgress from './InProgress/InProgress'
import Completed from './Completed/Completed'
import Cancel from './Cancel/Cancel'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooking, getCompletedBooking, getCancelledBooking } from '../../redux/bookings/actions'
import styles from './Bookings.module.scss'

const Bookings = () => {
    const dispatch = useDispatch()

    const booking = useSelector(state => state.booking)
    const {
        loading,
        data,
        updated,
        error
    } = booking

    useEffect(() => {
        dispatch(getAllBooking())
        dispatch(getCancelledBooking())
        dispatch(getCompletedBooking())
    }, [loading])


    const [allBookings, setAllBookings] = useState(true)
    const [inprogress, setInprogress] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [cancel, setCancel] = useState(false)

    const handleClick = e => {
        if (e.currentTarget.dataset.id === '1') {
            setAllBookings(true)
            setInprogress(false)
            setCompleted(false)
            setCancel(false)
        } else if (e.currentTarget.dataset.id === '2') {
            setAllBookings(false)
            setInprogress(true)
            setCompleted(false)
            setCancel(false)
        } else if (e.currentTarget.dataset.id === '3') {
            setAllBookings(false)
            setInprogress(false)
            setCompleted(true)
            setCancel(false)
        } else if (e.currentTarget.dataset.id === '4') {
            setAllBookings(false)
            setInprogress(false)
            setCompleted(false)
            setCancel(true)
        }
    }

    let items = 144
    let title = allBookings ? 'All Booking' : inprogress ? 'In Progress' : completed ? 'Completed' : cancel ? 'Cancel' : null


    return (
        <section className="mainContainer">
            {/* TITLE */}
            <h1 className="title">{title}</h1>

            {/*** Tab Navigation ***/}

            <div className={styles.nav}>
                <div
                    className={allBookings ? styles.activeNavItem : styles.navItem}
                    data-id="1"
                    onClick={handleClick}
                >
                    <h6>All Booking</h6>
                    <small>{data.all.bookings && data.all.bookings.length}</small>
                </div>

                <div
                    className={inprogress ? styles.activeNavItem : styles.navItem}
                    data-id="2"
                    onClick={handleClick}
                >
                    <h6>In Progress</h6>
                    <small>{data.inProgress.bookings && data.inProgress.bookings.length}</small>
                </div>

                <div
                    className={completed ? styles.activeNavItem : styles.navItem}
                    data-id="3"
                    onClick={handleClick}
                >
                    <h6>Completed</h6>
                    <small>{data.completed.bookings && data.completed.bookings.length}</small>
                </div>
                <div
                    className={cancel ? styles.activeNavItem : styles.navItem}
                    data-id="4"
                    onClick={handleClick}
                >
                    <h6>Cancel</h6>
                    <small>{data.cancelled.bookings && data.cancelled.bookings.length}</small>
                </div>
            </div>

            {/* CARD */}
            <div className="sectionCard">
                <div className={styles.container}>
                    {
                        allBookings ? <AllBooking /> :
                        inprogress ? <InProgress /> :
                        completed ? <Completed /> :
                        cancel ? <Cancel /> : null
                    }
                </div>

            </div>
        </section>
    )
}

export default Bookings