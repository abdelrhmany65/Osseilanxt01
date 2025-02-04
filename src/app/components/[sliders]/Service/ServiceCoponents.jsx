"use client";

import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { sliderImages } from '../../../utils/images';
import CardSlider from '../CardSlider';
import { useTranslation } from 'react-i18next';
import HeadingSection from '@/app/utils/headingSection/HeadingSection';
import styles from './ServiceSlider.module.css';

const ServiceSlider = () => {
  const { t } = useTranslation();

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
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
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };
  
  return (
    <>
    
    <Container className='overflow-hidden'>
      <HeadingSection 
          title={t('Home_services.heading.title')}
          text={t('Home_services.heading.text')}
      />
      <div className={`${styles.serviceslider} mx-auto mt-5`}>
        <Slider {...settings}>
          {sliderImages.map((card, index) => (
            <div key={index}>
              <CardSlider
                imag={card.image}
                title={t(`Home_services.${card.key}.title`)}
                description={t(`Home_services.${card.key}.description`)}
                styles={styles}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
    </>
  );
};

export default ServiceSlider;
