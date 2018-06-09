import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';

const ProductList = ({ productIds, products }) => (
  <div className="grid">
    { productIds.map(id => <Card key={id} product={products[id]} />) }
  </div>
);

ProductList.propTypes = {
  products: PropTypes.shape().isRequired,
  productIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ProductList;
