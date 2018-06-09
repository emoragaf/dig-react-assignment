import React, { Component } from 'react';
import axios from 'axios';

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

  productCard = product => (
    <div className="card" key={product.id}>
      {product.title}
    </div>
  )

  render() {
    const { productIds, products } = this.state;
    return (
      <div className="grid">
        { productIds.map(id => this.productCard(products[id])) }
      </div>
    );
  }
}

