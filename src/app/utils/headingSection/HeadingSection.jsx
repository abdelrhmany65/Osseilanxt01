import React from 'react'
import styles from "./Headingsection.module.css";
const HeadingSection = ({title , text}) => {
  return (
    <div className={styles.Heading}>
        <div className="container">
            <div className={styles.HeadingTeaxt}>
                <h1>{title}</h1>
                <h3>{text}</h3>
            </div>
        </div>
    </div>
  )
}

export default HeadingSection