import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

const ProductDetail = ({ product, loaded }) => {
  const info = item => (
    <div>
      <Link to="/">Back</Link>
      <h2>
        {item.title}
      </h2>
      <p>{item.description}</p>
      <div className="grid">
        {
          item.images.map(image => (
            <div className="gridImage" key={shortid.generate()}>
              <img className="gridImage" src={image.original} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );

  const loading = () => <h2>Loading...</h2>;

  return (
    <div className="detail">
      { loaded ? info(product) : loading() }
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default ProductDetail;
