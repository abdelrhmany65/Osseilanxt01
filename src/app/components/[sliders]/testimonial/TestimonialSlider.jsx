"use client";

import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { TestimonialCardData } from "@/app/utils/images";
import HeadingSection from "@/app/utils/headingSection/HeadingSection";
import TestimonialCard from "./TestimonialCard";

import style from "./testimonial.module.css";

const TestimonialSlider = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section>
      <Row className="mx-auto d-flex justify-content-center align-items-center">
        <Col
          lg={6}
          md={12}
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src="/images/imageAboutTes.webp"
            alt="Success"
            className={`${style.imageabouthero}`}
          />
        </Col>

        <Col lg={6} md={12} xs={12} className="gap-3 mx-auto">
          <div className={style.maintestimonia}>
            <HeadingSection
              title={t("testimonials.title")}
              text={t("testimonials.description")}
            />
            <Container>
              <Slider {...settings}>
                {TestimonialCardData.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.key}
                    image={testimonial.image || "/images/default-image.jpg"}
                    nameKey={testimonial.nameKey}
                    descriptionKey={testimonial.descriptionKey}
                    rating={testimonial.rating}
                  />
                ))}
              </Slider>
            </Container>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default TestimonialSlider;
