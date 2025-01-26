"use client";
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { experienceImages } from "@/app/utils/images";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import styles from "./experience.module.css";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const counterValues = [12, 1500, 2000]; 
  const [ref, inView] = useInView({
    threshold: 0.3, 
    triggerOnce: true, 
  });

  return (
    <section
      ref={ref} 
      className={`${styles.experience} my-5 text-center position-relative`}
    >
      {/* Overlay */}
      <div className={`${styles.overlay}`}></div>

      <Container>
        <Row className="position-relative">
          {experienceImages.map((item, index) => (
            <Col key={index} xs={12} md={4}>
              <Card className={`${styles.Exservicecard} shadow-lg border-0`}>
                <Card.Body>
                  {/* Icon */}
                  <div className="d-flex justify-content-center">
                    <img src={item.image} alt="icon" width="50" height="50" />
                  </div>
                  {/* Title */}
                  <Card.Title className="text-center my-3 text-white fw-bold">
                    {t(`experience.${item.key}`)}
                  </Card.Title>
                  {/* Counter */}
                  <Card.Text className="text-center text-white fw-bold fs-2">
                    {inView && (
                      <CountUp
                        start={0}
                        end={counterValues[index]}
                        duration={2.5}
                        prefix="+"
                      />
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;