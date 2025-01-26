'use client';

import { Row, Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./FormContact.module.css";
import HeadingSection from "@/app/utils/headingSection/HeadingSection";

const FormContact = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <HeadingSection 
          title={t('form.title')}
          text={t('form.description')} 
        />

      <div className={styles.contactHero}>
        <div className={`${styles.overlay}`}></div>
        <div className="container py-5">
          <Row>
            {/* العمود الأول: خريطة */}
            <Col md={6} style={{zIndex:2}}>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.2902976020328!2d39.664610599999996!3d24.440711600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfbcc19f31eb%3A0xadeaa4593bb58015!2z2K_ZitmD2YjYsdin2Kog2KfZhNi52LPZitmE2KfZhg!5e0!3m2!1sar!2seg!4v1736336717195!5m2!1sar!2seg"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>

            {/* العمود الثاني: نموذج الإدخال */}
            <Col md={6} style={{zIndex:2}}>
              <Form>
                {/* الاسم والبريد الإلكتروني على نفس السطر */}
                <Row>
                  <Col xs={6} >
                    <Form.Group controlId="formName">
                      <Form.Label className="text-light">{t("form.name_label")}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={t("form.name_placeholder")}
                        className={styles.inputField}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="text-light">{t("form.email_label")}</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder={t("form.email_placeholder")}
                        className={styles.inputField}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* الهاتف والموضوع على نفس السطر */}
                <Row>
                  <Col xs={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label className="text-light">{t("form.phone_label")}</Form.Label>
                      <Form.Control
                        type="tel"
                        // placeholder={t("form.phone_placeholder")}
                        className={`${styles.inputField}`}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="formSubject">
                      <Form.Label className="text-light">{t("form.subject_label")}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={t("form.subject_placeholder")}
                        className={styles.inputField}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* النص */}
                <Form.Group controlId="formMessage">
                  <Form.Label className="text-light">{t("form.message_label")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder={t("form.message_placeholder")}
                    className={styles.inputField}
                  />
                </Form.Group>

                {/* زر إرسال */}
                <button type="button" className="btnHero m-2">
                  <span>{t("form.submit_button")}</span>
                </button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FormContact;