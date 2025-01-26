'use client';

import React, { useState } from 'react';
import { galleryImages } from '@/app/utils/images';
import styles from './projects.module.css';
import HeadingSection from '@/app/utils/headingSection/HeadingSection';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const [model, setModel] = useState(false);
    const [temimg, setTemimg] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation();

    const getImg = (image, index) => {
        setTemimg(image);
        setCurrentIndex(index);
        setModel(true);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setTemimg(galleryImages[nextIndex]?.image || '/path/to/default-image.jpg');
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setTemimg(galleryImages[prevIndex]?.image || '/path/to/default-image.jpg');
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="pt-5">
            <HeadingSection
                title={t('home_projects.title')}
                text={t('home_projects.description')}
            />

            {/* Model Section */}
            {model && (
                <div className={`${styles.model} ${styles.open} pt-3`}>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setModel(false)}
                    >
                        <img src="./icons/x.svg" alt="Close" />
                    </button>

                    {temimg && (
                        <img
                            src={temimg}
                            alt="Preview"
                            className={`${styles.image} p-5`}
                        />
                    )}

                    <button className={styles.prevBtn} onClick={handlePrev}>
                        <img
                            src="/icons/caret-left-square-fill.svg"
                            alt="Previous"
                        />
                    </button>
                    <button className={styles.nextBtn} onClick={handleNext}>
                        <img
                            src="/icons/caret-right-square-fill.svg"
                            alt="Next"
                        />
                    </button>

                    <div className={styles.dots}>
                        {galleryImages.map((_, index) => (
                            <span
                                key={index}
                                className={
                                    index === currentIndex
                                        ? styles.dotActive
                                        : styles.dot
                                }
                                onClick={() =>
                                    getImg(
                                        galleryImages[index]?.image ||
                                            '/path/to/default-image.jpg',
                                        index
                                    )
                                }
                            ></span>
                        ))}
                    </div>
                </div>
            )}

            {/* Gallery Section */}
            <div className={styles.gallery}>
                {galleryImages.map((item, index) => (
                    <div
                        key={index}
                        className={styles.pice}
                        onClick={() =>
                            getImg(
                                item?.image || '/path/to/default-image.jpg',
                                index
                            )
                        }
                    >
                        <div className={styles.overlay}>
                            <img
                                src="./icons/search .svg"
                                alt="Search Icon"
                                className={styles.searchIcon}
                            />
                        </div>
                        <img
                            src={item?.image || '/path/to/default-image.jpg'}
                            alt={`Gallery Image ${index}`}
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
