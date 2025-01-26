'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSortType } from '../../redux/shopSlice';

import { Row, Col, Dropdown, Form } from 'react-bootstrap';
import styles from './shopcomponent.module.css';

const ShopFilterBar = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.shop.sortType);
  const searchTerm = useSelector((state) => state.shop.searchTerm);

  return (
    <div className={styles.filterBar}>
      <Row>
        {/* فلتر البحث */}
        <Col lg={8} md={6}>
          <div className="d-flex align-items-center">
            {/* حقل البحث */}
            <Form.Control
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </div>
        </Col>

        {/* فلتر الترتيب */}
        <Col lg={4} md={6}>
          <Dropdown className="w-100 mb-3">
            <Dropdown.Toggle variant="light" className="w-100">
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.menuItem}>
              <Dropdown.Item
                onClick={() => dispatch(setSortType('price-asc'))}
                className={styles.dropItem}
              >
                Price (Low to High)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => dispatch(setSortType('price-desc'))}
                className={styles.dropItem}
              >
                Price (High to Low)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default ShopFilterBar;
