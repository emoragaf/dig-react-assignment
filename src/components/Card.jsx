import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Card = ({ history, product }) => {
  const showDetail = () => history.push(`/product/${product.id}`);
  return (
    <button className="card" onClick={showDetail}>
      <h3>
        {product.title}
      </h3>
      <p><img src={product.images[0].thumb} alt="" /></p>
      <p>Price: {product.price}</p>
    </button>
  );
};

Card.propTypes = {
  product: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(Card);
