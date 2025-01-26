"use client";

import { Col, Row } from 'react-bootstrap';
import { partnersImages } from '@/app/utils/images';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import CardSlider from '../CardSlider';


import styles from "./partnerslider.module.css"; 

const Partners = () => {
  const { t } = useTranslation();

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerPadding: '20',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };

  return (

    <section>
        <Row className="d-flex justify-content-center align-items-center">
            <Col
             lg={6}
             md={12}
             xs={12}
             
             >

                <img
                src="/images/success.png"
                alt="Success"
                className={`w-100`}
                />
                
            </Col>

                

            <Col
             lg={6}
             md={12}
             xs={12}
             
            >
            <div className={`${styles.partnerslider} m-auto`}>
                <Slider {...settings}>
                    {partnersImages.map((card, index) => (
                    <div key={index}>
                        <CardSlider
                        imag={card.image}
                        title={t(`About_partners.${card.key}.title`)}
                        styles={styles}  
                        isPartner  
                        />
                    </div>
                    ))}
                </Slider>
                </div> 
            </Col>
        </Row>
    </section>



  );
}

export default Partners;