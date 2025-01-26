"use client";

import TopImage from '@/app/utils/topimage/TopImage';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import styles from './MissionVision.module.css'; // تأكد من استيراد الأنماط

const MissionVision = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* العنوان العلوي */}
      <TopImage title={t('OurMissionVision.title')} />

      <Container fluid>
        {/* قسم الرؤية والمهمة */}
        <div>
          <Row className="my-5">
            {/* النصوص */}
            <Col lg={6} md={12} xs={12} className="gap-3">
              <div className="d-flex flex-column">
                <h1 className={styles.OurMissionTitle}>{t('OurMissionVision.heading')}</h1>
                <div>
                  <h3 className={styles.OurMissionhead}>{t('OurMissionVision.vision.title')}</h3>
                  <p className={styles.OurMissiontext}>
                    {t('OurMissionVision.vision.text')}
                  </p>
                </div>
                <div>
                  <h3 className={styles.OurMissionhead}>{t('OurMissionVision.mission.title')}</h3>
                  <p className={styles.OurMissiontext}>
                    {t('OurMissionVision.mission.text')}
                  </p>
                </div>
              </div>
            </Col>

            {/* الصورة */}
            <Col lg={6} md={12} xs={12} className="d-flex justify-content-center align-items-center">
              <img src="/images/why-choose-us.png" alt="Why Choose Us" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MissionVision;
