import React from 'react';

// import { Container } from './styles';
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

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInformation>
            <ProductImage
              source={{
                uri:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1529520060550',
              }}
            />
            <ProductDetails>
              <ProductName>Amount</ProductName>
              <ProductPrice>$ 11.000,00</ProductPrice>
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
