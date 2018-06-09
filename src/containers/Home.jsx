import React, { Component } from 'react';
import axios from 'axios';

import Card from '../components/Card';

export default class Home extends Component {
  state = {
    productIds: [],
    products: {},
  }

  componentDidMount() {
    axios.get('http://private-5815fe-recommendationsknip.apiary-mock.com/products')
      .then((response) => {
        this.setState({
          productIds: response.data.map(product => product.id),
          products: response.data.reduce(
            (acc, product) => ({ ...acc, [product.id]: product }),
            {},
          ),
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { productIds, products } = this.state;
    return (
      <div className="grid">
        { productIds.map(id => <Card key={id} product={products[id]} />) }
      </div>
    );
  }
}

