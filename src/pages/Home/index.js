import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import { formatUsd } from '../../util/format';
import api from '../../services/api';

import {
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  ButtonTitle,
} from './styles';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  /** Mount all component */
  componentDidMount() {
    this.getProducts();
  }

  /**
   * Get all products from API server.
   * Save the information in data, and format the product price.
   * set a new value to states.
   * @async
   */
  getProducts = async () => {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatUsd(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddToCart = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  /**
   * Render only one product per item value.
   * @param {object} product
   * @return {component}
   */
  renderProduct = product => {
    const { item } = product;
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => this.handleAddToCart(item)}>
          <ProductAmount>
            <Icons name="add-shopping-cart" size={16} color="#fff" />
            <ProductAmountText>3</ProductAmountText>
          </ProductAmount>
          <ButtonTitle>Add to cart</ButtonTitle>
        </AddButton>
      </Product>
    );
  };

  /**
   * Render all content.
   * Inside this block, have a flat list that call a another render.
   * The new render, call a unic product per time, showing all information
   * get from API.
   */
  render() {
    const { products } = this.state;
    return (
      <ProductList>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={this.renderProduct}
        />
      </ProductList>
    );
  }
}

/**
 * dispatch is a function, and is required to
 * send an action to cart reducer.
 */
HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(HomeScreen);
