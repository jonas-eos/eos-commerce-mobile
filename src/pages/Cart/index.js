import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/global';

import { formatUsd } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Products,
  Product,
  ProductInformation,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductTotalPrice,
  OrderContainer,
  TotalTitle,
  TotalPrice,
  Order,
  OrderText,
} from './styles';

function CartScreen({ cart, removeFromCart, updateAmount, total }) {
  // Send increment action to reducers
  const increment = ({ id, amount }) => updateAmount(id, amount + 1);

  // Send decrement action to reducers
  const decrement = ({ id, amount }) => updateAmount(id, amount - 1);

  return (
    <Container>
      <Products>
        {cart.map(product => (
          <Product key={product.id}>
            <ProductInformation>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetails>
              <ProductDelete onPress={() => removeFromCart(product)}>
                <Icon name="delete-forever" size={24} color={colors.main} />
              </ProductDelete>
            </ProductInformation>
            <ProductControls>
              <ProductControlButton onPress={() => decrement(product)}>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.main}
                />
              </ProductControlButton>
              <ProductAmount value={String(product.amount)} />
              <ProductControlButton onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={20} color={colors.main} />
              </ProductControlButton>
              <ProductTotalPrice>{product.subtotal}</ProductTotalPrice>
            </ProductControls>
          </Product>
        ))}
      </Products>
      <OrderContainer>
        <TotalTitle>Total</TotalTitle>
        <TotalPrice>{total}</TotalPrice>
        <Order>
          <OrderText>Place Order</OrderText>
        </Order>
      </OrderContainer>
    </Container>
  );
}

/**
 * This function, convert reducer global state into local state.
 * Get cart state and insert into local state.
 * Calculate the subtotal price of the product in cart.
 * Calculate total order price.
 * @const
 * @function
 */
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatUsd(product.price * product.amount),
  })),
  total: formatUsd(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

/**
 * This function, convert reducer action into local properties.
 * Get cart cartions
 * @const
 * @function
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

CartScreen.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.any,
      priceFormatted: PropTypes.string,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
