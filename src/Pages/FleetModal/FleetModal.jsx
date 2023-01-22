import React, { useState } from 'react'
import graphic from '../../Assets/fleet.png'
import { Button } from '../../Components/Button/Button'
import styles from './FleetModal.module.scss'

const FleetModal = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        pricePerHour: '',
        pricePerMile: '',
        files: []
    })

    const { name, description, pricePerHour, pricePerMile, files } = formData

    const handleChange = e => {
        if (e.target.name === 'file') {
            var files = e.target.files;
            console.log(files);
            var filesArr = Array.prototype.slice.call(files);
            console.log(filesArr);
            setFormData({ files: [...files, ...filesArr] });
        }
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    return (
        <section className="mainContainer">
            {/* TITLE */}
            <h1 className="title">Our Fleet Modal</h1>
            {/* CARD */}
            <div className="sectionCard">
                <div className={styles.container}>
                    {/* image container */}
                    <div className={styles.imgContainer}>
                        <img src={graphic} alt="graphic" />
                        <Button
                            name="Choose File"
                            margin="25px 0px 0px 0px"
                            padding="10px 20px"
                        />
                        <input type="file" name="files" onChange={handleChange} className={styles.hideInput} />
                        <span className={styles._files}>
                            {
                                files
                            }
                        </span>
                    </div>
                    {/* Form */}
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="heading">Heading</label>
                            <input type="text" name="heading" placeholder="Business Sedan Limo" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="bodyText">Body text</label>
                            <input type="text" name="bodyText" placeholder="All our drivers have years of experience" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="price">Price</label>
                            <input type="text" name="price" placeholder="from $25.65" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="button">Button</label>
                            <input type="text" name="button" placeholder="Learn More" />
                        </div>
                        <div className={styles.btnContainer}>
                            <Button
                                name="Save"
                                padding="22px 130px"
                                margin="0"
                                fontSize="20px"
                            />
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default FleetModal