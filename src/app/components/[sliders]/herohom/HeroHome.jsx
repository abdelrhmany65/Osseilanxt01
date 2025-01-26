'use client';
import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { heroHomeSlider } from '../../../utils/images';
import styles from './HeroHome.module.css';  

const HeroHome = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Carousel fade>
        {t('hero.slides', { returnObjects: true }).map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="position-relative">
              <Image
                className={styles.imagesHero}  // استخدام الفئة المودولية هنا
                src={
                  index === 0
                    ? heroHomeSlider.imagehero03
                    : index === 1
                    ? heroHomeSlider.imagehero01
                    : heroHomeSlider.imagehero02
                }
                alt={`slide${index + 1}`}
                layout="intrinsic"  // استخدم layout="intrinsic" لتحديد الأبعاد
                width={1200}  // تحديد عرض الصورة
                height={800}  // تحديد ارتفاع الصورة
              />
              <div className={styles.overlay}></div> {/* استخدام فئة overlay */}
              <Carousel.Caption className={`${styles.carouselCaption} position-absolute d-flex justify-content-center align-items-center`}>
                <div className={`${styles.carouselTextContainer} w-50  position-absolute bottom-(-50) end-(-50)`}>
                  <h6 className="caption-heading">{slide.heading}</h6>
                  <h1 className="carousel-caption-text">{slide.text}</h1>
                  <div className={`${styles.heroButton} d-flex align-items-center justify-content-center`}>
                    <Link href="/services" passHref className='text-decoration-none'>
                      <button type="button" className="btnHero m-2">
                        <span>

                            {slide.buttons.explore}
                        </span>
                      </button>
                    </Link>
                    <Link href="/contact" passHref className='text-decoration-none'>
                      <button type="button" className="btnHero m-2">
                        <span>
                            {slide.buttons.start}
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroHome;
