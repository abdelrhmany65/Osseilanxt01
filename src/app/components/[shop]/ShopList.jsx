import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './shopcomponent.module.css';
import { setSelectedCategory } from '../../redux/shopSlice';

const categories = [
  'All',
  'Wood Alternative',
  'Wallpaper',
  'Parquet',
  'Marble Alternative',
  'Gypsum Board',
];

const ShopList = () => {
  const selectedCategory = useSelector((state) => state.shop.selectedCategory);
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className={styles.categoryList}>
      {categories.map((category) => (
        <div
          key={category}
          className={`${styles.categoryItem} ${
            selectedCategory === category ? styles.active : ''
          }`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default ShopList;
