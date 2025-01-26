'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './shopStyles.module.css';
import ShopList from '../components/[shop]/ShopList';
import ShopFilterBar from '../components/[shop]/ShopFilterBar';
import ShopGrid from '../components/[shop]/ShopGrid';
import { setProducts } from '../redux/shopSlice';
import TopImage from '../utils/topimage/TopImage';
import { useTranslation } from 'react-i18next';


const Shop = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3003/categories');
      const data = await res.json();
      const allProducts = data.flatMap((category) =>
        category.products.map((product) => ({
          ...product,
          category: category.name,
        }))
      );
      dispatch(setProducts(allProducts));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>

        <TopImage title={t('shop.title')}/>

        <section>
          <Container>
          <Row className={styles.ShopPage}>
            <Col md={3} className="d-md-block">
              <ShopList />
            </Col>
            <Col md={9}>
              <ShopFilterBar />
              <ShopGrid />
            </Col>
          </Row>
        </Container>
        </section>
    </div>
  );
};

export default Shop;
