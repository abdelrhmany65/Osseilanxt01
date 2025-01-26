"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from './aboutco.module.css';

const About = ({ language, imageAbout01, imageAbout02 }) => {
  const { t } = useTranslation();

  return (
    <div> 
      <Container>
        <Row className={`${styles.RowsAbout} d-flex align-items-center justify-content-around`}>
          <Col lg={6} md={12}> 
            <div className={`contant-about`}>
              <h2 className={`${styles.TitleAbout} mb-5`}>{t('Home_about_us.heading')}</h2>
              <p className={`${styles.textAbout} mb-5`}>
                {t('Home_about_us.paragraph')}
              </p>
              <button type="button" className={`btnTrans`}>
                <span> {t('Home_about_us.start')} </span>
              </button>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={`${styles.imagesAbout} d-flex align-items-center justify-content-around gap-4`}>
              <img src="./images/pixlr-image-generator-5be8e5ef-538f-45bc-a756-cb096a0e8997.png" alt="aboutImage" className={`${styles.imageAbout01} rounded`} />
              <img src="./images/pixlr-image-generator-4ed18034-014e-4d33-8851-2d3a568a92a9.png" alt="aboutImage" className={`${styles.imageAbout02} rounded`} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
