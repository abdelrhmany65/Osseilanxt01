'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './shopcomponent.module.css';

const ShopGrid = () => {
  const { products, searchTerm, sortType, selectedCategory } = useSelector(
    (state) => state.shop
  );
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = selectedCategory === 'All' 
      ? products 
      : products.filter(product => product.category === selectedCategory);

    setFilteredProducts(filtered);
  }, [products, selectedCategory]);

  // تصفية المنتجات
  const filteredAndSortedProducts = filteredProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'price-asc') return a.price - b.price;
      if (sortType === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <Row>
      {filteredAndSortedProducts.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Card className={styles.productCard}>
            <Card.Img 
              variant="top" 
              src={product.image ? product.image : 'https://via.placeholder.com/150'} // وضع صورة بديلة في حالة عدم وجود صورة
              className={styles.productImage}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} // معالجة الخطأ بتعيين صورة بديلة
            />
            <Card.Body>
                <Card.Title className={styles.productname}>{product.name}</Card.Title>
                <Card.Text className={styles.productDescription}>
                  {product.description}
                </Card.Text>
                <div className={`d-flex justify-content-between align-items-center`}>
                  <span className={`${styles.price}`}>{product.price}</span>
                </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ShopGrid;
