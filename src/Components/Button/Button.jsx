import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ name, padding, margin, fontSize, onClick }) => {
    return (
        <button
            className={styles.btn}
            style={{ padding: padding, margin: margin, fontSize: fontSize }}
            onClick={onClick}
        >{name}</button>
    )
}