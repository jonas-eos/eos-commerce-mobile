import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, ItemAmount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <ItemAmount>{cartSize}</ItemAmount>
      </Cart>
    </Container>
  );
}

/**
 * cartSize is a number, and is required in ItemAmount component
 * navigation is a object, and is required to browser into cart routes
 */
Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

/**
 * Establishes a connection between the
 * header and cart reducer
 */
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
