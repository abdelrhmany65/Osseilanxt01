'use client';
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';               
import Image from 'next/image';  
import { Footerimage } from '../../utils/images';
import { useTranslation } from "react-i18next";

import styles from "./footer.module.css";

const nav__link = [
  { path: '/', displayKey: 'home' },
  { path: '/about', displayKey: 'about' },
  { path: '/shop', displayKey: 'products' },
  { path: '/services', displayKey: 'services' },
  { path: '/contact', displayKey: 'contact' },
];

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.footer}>
      <Container>
        <h1 className={styles.headingfooter}>{t("footer.heading_footer")}</h1>
        <Row>
          {/* القسم الأول */}
          <Col lg={2} md={6} sm={12} className="m-auto mt-2 d-flex align-items-center justify-content-center">
            <div>
              <Link href="/">
                <Image 
                  src={Footerimage.LogoHeader} 
                  width={150} 
                  height={20} 
                  className={styles.footerLogo} 
                  alt="logo" 
                  priority
                />
              </Link>

              <p className="mt-3">{t("footer.team_description")}</p>
              <div className="d-flex align-items-center my-5">
                <input
                  type="email"
                  className={`${styles.inputsend} form-control rounded-0`}
                  placeholder={t("footer.email_placeholder")}
                />
                <button
                  type="submit"
                  className={`${styles.butoonsend} btn rounded-0`}
                >
                  <Image src={Footerimage.sendEmail} alt="Send" width={20} height={20} />
                </button>
              </div>
            </div>
          </Col>

          {/* قسم اللينكات  */}
          <Col lg={2} md={6} sm={12}>
            <h1 className={`${styles.latestProjects} ${i18n.language === 'ar' ? 'pe-5' : 'p-0'}`}>
              {t("footer.links_projects")}
            </h1>
            <ul className={`navbar-nav ${styles.FooternavbarNav}`}>
              {nav__link.map(({ path, displayKey }) => (
                <li key={path} className="nav__item py-2 fw-bold text-center">
                  <Link 
                    href={path} 
                    className={styles.textStyle}
                  >
                    {t(displayKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* قسم المشاريع */}
          <Col lg={5} md={12} sm={12} className={`${styles.projectsSection} m-auto text-center d-flex flex-column gap-4`}>
          <h1 className={styles.latestProjects}>
            {t("footer.latest_projects")}
          </h1>
          <div className={`${styles.resntproject} `}>
            {/* مشروع 1 */}
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div className="d-flex gap-2 w-100">
                <div className={`${styles.imageWrapper} w-100`}>
                  <Image
                    src={Footerimage.image01}
                    alt="Project Image 1"
                    className={`${styles.footimage01}`}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
                <div className={`${styles.imageWrapper} w-100`}>
                  <Image
                    src={Footerimage.image02}
                    alt="Project Image 2"
                    className={styles.footimage02}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-md-start">
                <h5>{t("footer.text_date_1")}</h5>
                <h6>{t("footer.project_1")}</h6>
              </div>
            </div>

            {/* مشروع 2 */}
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div className="d-flex gap-2 my-2 w-100">
                <div className={`${styles.imageWrapper} w-100`}>
                  <Image
                    src={Footerimage.image03}
                    alt="Project Image 3"
                    className={styles.footimage03}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
                <div className={`${styles.imageWrapper} w-100`}>
                  <Image
                    src={Footerimage.image04}
                    alt="Project Image 4"
                    className={styles.footimage04}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-md-start">
                <h5>{t("footer.text_date_2")}</h5>
                <h6>{t("footer.project_2")}</h6>
              </div>
            </div>
          </div>
        </Col>


          {/* قسم الإنستغرام */}
          <Col lg={3} md={12} sm={12} className="m-auto mt-1 d-flex align-items-center justify-content-center">
            <div className="d-grid gap-3">
              <h1 className={`${styles.latestProjects} `}>
                {t("footer.instagram")}
              </h1>
              <div className="d-flex gap-3 ">
                <div className={`${styles.imageWrapper}  w-100`}>
                  <Image
                    src={Footerimage.image05}
                    alt="Instagram"
                    className={`${styles.footimage05} w-100`}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
                <div className={`${styles.imageWrapper}  w-100`}>
                  <Image
                    src={Footerimage.image06}
                    alt="Instagram"
                    className={`${styles.footimage06} w-100`}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 w-100">
                <div className={`${styles.imageWrapper}  w-100`}>
                  <Image
                    src={Footerimage.image07}
                    alt="Instagram"
                    className={`${styles.footimage05}  w-100`}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
                <div className={`${styles.imageWrapper}  w-100`}>
                  <Image
                    src={Footerimage.image08}
                    alt="Instagram"
                    className={`${styles.footimage06} w-100`}
                    width={110}
                    height={110}
                  />
                  <div className={styles.overlay}>
                    <a
                      href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Footerimage.Footer_instagram}
                        alt="Instagram Icon"
                        className={styles.instagramIcon}
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
