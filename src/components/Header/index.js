import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, ItemAmount } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <Cart>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <ItemAmount>3</ItemAmount>
      </Cart>
    </Container>
  );
}
