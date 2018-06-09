import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ProductDetail from '../components/ProductDetail';

export default class Product extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  }

  state = {
    product: {},
    loaded: false,
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get('http://private-5815fe-recommendationsknip.apiary-mock.com/products')
      .then((response) => {
        this.setState({
          product: response.data.find(product => product.id.toString() === params.prodID),
          loaded: true,
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { product, loaded } = this.state;
    return product
      ? <ProductDetail product={product} loaded={loaded} />
      : (
        <div className="detail">
          <h1>404</h1>
          <p>Product not found</p>
        </div>
      );
  }
}

