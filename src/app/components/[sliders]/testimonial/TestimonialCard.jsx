"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Col } from 'react-bootstrap';
import style from './testimonial.module.css';

const TestimonialCard = ({ image, nameKey, descriptionKey, rating }) => {
  const { t } = useTranslation();

  return (
    <Col md={12} className="m-auto p-3">
      <Card className={style.card}>
        <Card.Body>
          <div className={style.stars}>
            {rating.map((star, index) => (
              <img key={index} src={star} alt="star" className={style.imagstar} />
            ))}
          </div>
          <Card.Text className="text-center mb-4 mt-3">{t(descriptionKey)}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Card.Img variant="top" src={image} className={style.image} />
              <Card.Title className="ms-3">{t(nameKey)}</Card.Title>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TestimonialCard;