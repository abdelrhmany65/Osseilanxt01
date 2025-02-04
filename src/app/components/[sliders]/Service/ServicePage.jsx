"use client";

import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { serviceImages } from '@/app/utils/images';
import Slider from 'react-slick';
import CardSlider from '../CardSlider';
import HeadingSection from '@/app/utils/headingSection/HeadingSection';

import styles from "./pageservice.module.css";
import TopImage from '@/app/utils/topimage/TopImage';

const ServicePage = () => {
  const { t } = useTranslation();

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
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
        breakpoint: 978,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 527,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <div className='overflow-hidden'>
    
    <TopImage title={t('page_service_card.title')}/>
    <Container className={`${styles.pageserviceslider} m-auto my-5`}>
        <HeadingSection 
              title={t('page_service_card.heading_service.title')}
              text={t('page_service_card.heading_service.decoration')}
        />
        <div>
            <Slider {...settings}>
                {serviceImages.map((card, index) => (
                <div key={index}>
                    <CardSlider
                        imag={card.image}
                        title={t(card.titleKey)}
                        description={t(card.textKey)}
                        styles={styles}
                        />
                </div>
                ))}
            </Slider>
        </div>
    </Container>
    </div>
  );
};

export default ServicePage;