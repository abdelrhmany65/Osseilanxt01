'use client'; // مهم لكي نستخدم hooks في App Router

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // من i18next
import Image from 'next/image';
import { topheaderimage } from '../../utils/images'; // مسارات الصور
import styles from './header.module.css';

const TopHeader = () => {

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);


  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); 
    setLanguage(lang);         
  };

  return (
    <div className={`${styles.topHeader} m-0 py-3`}>
      <div className="container">
        <div className="content-topheader d-flex justify-content-between align-items-center">
          {/* القسم الأيسر: معلومات التواصل */}
          <div className="left d-flex justify-content-between align-items-center">
            <div className={`${styles.ContentLeft}`}>
              <a
                href="mailto:info@osseilan.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Image
                  width={24}
                  height={24}
                  src={topheaderimage.mail}
                  alt="mail"
                  className={styles.leftImg}
                />
                <span className={`${styles.textSpan} text-white`}>
                  {' '}info@osseilan.net
                </span>
              </a>
            </div>
            <div className={`${styles.ContentLeft}`}>
              <a
                href="tel:+966543044442"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Image
                  width={24}
                  height={24}
                  src={topheaderimage.phoneoutline}
                  alt="phone"
                  className={styles.leftImg}
                />
                <span className={`${styles.textSpan} text-white`}>
                  {' '}0543044442
                </span>
              </a>
            </div>
          </div>

          {/* القسم الأيمن: dropdown اختيار اللغة */}
          <div className="right d-flex align-items-center justify-content-center">
            <div className="align-items-center justify-content-center">
              <div className="dropdown">
                <button
                  className="d-flex align-items-center border-0 bg-black text-light p-2"
                  type="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language === 'ar' ? t('arabic') : t('english')}
                  {/* أيقونة العلم */}
                  <span
                    className={`fi fis ${
                      language === 'ar' ? 'fi-sa' : 'fi-us'
                    } me-2 ms-2`}
                  ></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                  <li onClick={() => handleLanguageChange('ar')}>
                    <button className="dropdown-item d-flex align-items-center">
                      <span className="fi fis fi-sa me-2"></span>
                      {t('arabic')}
                    </button>
                  </li>
                  <li onClick={() => handleLanguageChange('en')}>
                    <button className="dropdown-item d-flex align-items-center">
                      <span className="fi fis fi-us me-2"></span>
                      {t('english')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;
