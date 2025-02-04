"use client";
import React, { useState } from 'react';
import { Card, Container, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import CardSlider from '../CardSlider';
import { certificateImages } from '@/app/utils/images';
import HeadingSection from '@/app/utils/headingSection/HeadingSection';



import styles from "./certificates.module.css"; 
const Certificates = () => {

  const { t } = useTranslation(); 

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
        
      },
    ],
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className={`${styles.certificateslider} m-auto overflow-hidden`}>
      
        <HeadingSection 
            title={t('certificates.certificatesTitle')}
            text={t('certificates.certificatesText')} 
           
          />
      
      
      <Slider {...settings}>
        {certificateImages.map((card, index) => (
          <div key={index}>
            <CardSlider 
              imag={card.image} 
              styles={styles} 
              onClick={() => handleImageClick(card.image)} 
            />
          </div>
        ))}
      </Slider>

      {/* Modal for displaying full image */}
      <Modal show={showModal} onHide={handleCloseModal} centered className={styles.model}>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <img srcSet={selectedImage} alt="Full view" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certificates;