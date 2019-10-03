import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
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

  /**
   * Handler to add a product to cart.
   * Call the action add to cart.
   * @function
   * @param {object} product
   */
  handleAddToCart = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  /**
   * Render only one product per item value.
   * @param {object} product
   * @return {component}
   */
  renderProduct = product => {
    const { item } = product;
    const { amount } = this.props;
    const typ = typeof item.id;
    console.tron.log(typ);
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
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
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
 * This function convert reducer actions into local properties.
 * Get cart actions
 * @const
 * @function
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

/**
 * Get the amount value from global state
 * and create a new local state named as amount
 * with product amount in card.
 * @param {object} state
 */
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    const result = amount;
    result[product.id] = product.amount;

    return result;
  }, {}),
});

/**
 * addToCart is a function that is required to call cart action
 * to add the product to cart.
 * amount is a object or number
 */
HomeScreen.propTypes = {
  addToCart: PropTypes.func.isRequired,
  amount: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
