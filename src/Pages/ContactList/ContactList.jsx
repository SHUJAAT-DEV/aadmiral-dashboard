import React, { useState, useEffect } from 'react'
import deleteBtn from '../../Assets/usersPage/delete.svg'
import styles from '../css/Users.module.scss'
import { Button } from '../../Components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getContactUs, loadContactUs, deleteContactUs, loadDeleteContactUs } from '../../redux/getContactUs/action'
import Loader from '../../Components/Loader/Loader'

const ContactList = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.contactUs.data && state.contactUs.data.contactUs)
    const getLoading = useSelector(state => state.contactUs.loading)

    useEffect(() => {
        dispatch(getContactUs())
    }, [getLoading])
    return (
        <section className="mainContainer">
            {/* TITLE */}
            <h1 className="title">Contact List</h1>
            {/* CARD */}
            <div className="sectionCard">
                {/* USERS CONTAINER */}
                <div className={styles.container}>
                    {
                        !getLoading ? data.map(user => (
                            <div className={styles.userContainer}>
                                <div className={styles.leftSection}>
                                    {/* FORM */}
                                    <form className={styles.form}>
                                        <div className={styles.field}>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" value={user.email} placeholder="abc@gmail.com" />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="number">Phone Number</label>
                                            <input type="number" name="number" value={user.phoneNumber} placeholder="090078601" />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                type="text"
                                                name="message"
                                                className={styles.message}
                                                value={user.message}
                                                placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className={styles.rightSection}>
                                    <img 
                                        src={deleteBtn} 
                                        onClick={() => {
                                            dispatch(loadDeleteContactUs())
                                            dispatch(deleteContactUs(user._id))
                                        }} 
                                        alt="delete" 
                                    />
                                </div>
                            </div>
                        )) : <Loader />
                    }
                </div>
            </div>
        </section>
    )
}

export default ContactList