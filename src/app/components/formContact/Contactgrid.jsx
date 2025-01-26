'use client';

import { ContactGridImage } from '@/app/utils/images';
import TopImage from '@/app/utils/topimage/TopImage';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import styles from "./pageservice.module.css";

const Contactgrid = () => {
  const { t } = useTranslation();

  return (
    <>
    <TopImage title={t('contact_us.title')} />

    <div className={styles.maincontact}>
    <Container>
      <Row className="g-4">
        {ContactGridImage.map((item, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <Card className={`${styles.ContactCard} shadow-sm p-3 mb-5 bg-body-tertiary rounded`}>
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <img
                    src={item.Contact_image}
                    alt={t(item.Contact_titleKey)}
                    className={`${styles.contactusImage}`}
                  />
                </div>
                <Card.Title className="text-center my-3 fw-bold">
                  {t(item.Contact_titleKey)}
                </Card.Title>
                <Card.Text className="text-center fw-bold">
                  {item.Contact_titleKey === "contact_us.contact_card.Contactphone.title" ? (
                    <a href={`tel:+966${item.Contact_textKey}`} className="text-decoration-none">
                      {t(item.Contact_textKey)}
                    </a>
                  ) : item.Contact_titleKey === "contact_us.contact_card.Contactemail.title" ? (
                    <a href={`mailto:${item.Contact_textKey}`} className="text-decoration-none">
                      {t(item.Contact_textKey)}
                    </a>
                  ) : (
                    t(item.Contact_textKey)
                  )}
                </Card.Text>
                <Card.Text className="text-center text-muted">
                  {t(item.additionalTextKey)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    </>
  );
};

export default Contactgrid;
