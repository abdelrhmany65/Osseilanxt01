
"use client";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from 'react-bootstrap'
import HeadingSection from '@/app/utils/headingSection/HeadingSection';
import { choseImages } from "@/app/utils/images";

import styles from "./chose.module.css";
const ChoseUs = () => {

    const { t } = useTranslation();


  return (
    <div className='pt-4'>
    <HeadingSection 
      title={t('why_choose_us.why_choose_us_heading')}
      text={t('why_choose_us.reason_for_trust')} 
    />
    <div className={`${styles.choseContent}`}>
      <Container>
        <Row>
        <Col lg={6} md={6} xs={12} className={styles.colCose}>

            <div className="card d-flex flex-row align-items-center border-0">
              <div className="flex-shrink-0  mt-5">
                <img
                  src={choseImages.design01}
                  alt="image w-50"
                  className="img-fluid w-75"
                />
              </div>
              <div className="flex-grow-1">
                <div className="card-body">
                  <h5 className="card-title mt-5">{t('why_choose_us.modern_design.title')}</h5>
                  <p className="card-text mt-3 w-75">
                    {t('why_choose_us.modern_design.text')}
                  </p>
                </div>
              </div>
            </div>

            <div className="card d-flex flex-row align-items-center border-0">
              <div className="flex-shrink-0 mt-5">
                <img
                  src={choseImages.expert01}
                  alt="image w-50"
                  className="img-fluid w-75"
                />
              </div>
              <div className="flex-grow-1">
                <div className="card-body">
                  <h5 className="card-title mt-5">{t('why_choose_us.expert_team.title')}</h5>
                  <p className="card-text mt-3 w-75">
                    {t('why_choose_us.expert_team.text')}
                  </p>
                </div>
              </div>
            </div>

            <div className="card d-flex flex-row align-items-center border-0">
              <div className="flex-shrink-0 mt-5">
                <img
                  src={choseImages.price01}
                  alt="image w-50"
                  className="img-fluid w-75"
                />
              </div>
              <div className="flex-grow-1">
                <div className="card-body">
                  <h5 className="card-title mt-5">{t('why_choose_us.reasonable_price.title')}</h5>
                  <p className="card-text mt-3 w-75">
                    {t('why_choose_us.reasonable_price.text')}
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} xs={12} className="d-flex flex-column flex-md-row gap-3 py-5">
            {/* الصورة الأولى */}
            <div className="col-md-6 col-sm-12">
              <img
                src={choseImages.services01}
                alt="image"
                className={`${styles.imageOneChose} img-fluid h-100`}
              />
            </div>

            {/* الصور الثانية والثالثة */}
            <div className="d-flex flex-column gap-3 col-md-6 col-sm-12">
              <img
                src={choseImages.services03}
                alt="image"
                className={`${styles.imagetwoChose} img-fluid`}
              />
              <img
                src={choseImages.services02}
                alt="image"
                className={`${styles.imagethreeChose} img-fluid`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default ChoseUs