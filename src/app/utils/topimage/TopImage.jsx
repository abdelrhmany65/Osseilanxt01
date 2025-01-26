"use client";

import React from 'react';
import { Row } from 'react-bootstrap';
import styles from "./topimage.module.css";

const TopImage = ({ title }) => {
  return (
    <div className={styles.TopImage}>
      <div className={styles.overlay}></div>  
      <Row>
        <h1 className={`fs-2 font-bold text-white mt-5 ${styles.title}`}>
          {title}
        </h1>
      </Row>
    </div>
  );
};

export default TopImage;
