import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/global';

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

function CartScreen({ cart }) {
  return (
    <Container>
      <Products>
        {cart.map(product => (
          <Product key={product.id}>
            <ProductInformation>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductName>Amount</ProductName>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetails>
              <ProductDelete>
                <Icon name="delete-forever" size={24} color={colors.main} />
              </ProductDelete>
            </ProductInformation>
            <ProductControls>
              <ProductControlButton>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.main}
                />
              </ProductControlButton>
              <ProductAmount value={String(3)} />
              <ProductControlButton>
                <Icon name="add-circle-outline" size={20} color={colors.main} />
              </ProductControlButton>
              <ProductTotalPrice>R$ 33.000,00</ProductTotalPrice>
            </ProductControls>
          </Product>
        ))}
      </Products>
      <OrderContainer>
        <TotalTitle>Total</TotalTitle>
        <TotalPrice>$: 11.000.00</TotalPrice>
        <Order>
          <OrderText>Place Order</OrderText>
        </Order>
      </OrderContainer>
    </Container>
  );
}

CartScreen.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.any,
      priceFormatted: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartScreen);
