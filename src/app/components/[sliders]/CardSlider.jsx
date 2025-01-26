// CardSlider Component
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


const CardSlider = ({ imag, title, description, styles, onClick }) => {
  return (
    <Col xs={12} md={6} className="mb-4">
      <Card className={`${styles.servicecard} ${styles.patenercard} ${styles.certificatecard} ${styles.pageservicecard}`} onClick={onClick}>
        <Card.Body>
          <div className="d-flex justify-content-center">
            <img src={imag} alt={title} className="img-fluid" />
          </div>
          <Card.Title className="text-center my-3">{title}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

CardSlider.propTypes = {
  imag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardSlider;