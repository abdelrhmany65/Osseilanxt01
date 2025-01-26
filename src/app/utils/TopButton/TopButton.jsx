'use client';
import React, { useState, useEffect } from "react";
import styles from "./TopButton.module.css"; 

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    showButton && (
      <button className={styles.topbutton} onClick={scrollToTop}>
        <img src="./icons/arrow-up-square-fill.svg" alt="Scroll to top" />
      </button>
    )
  );
};

export default TopButton;
