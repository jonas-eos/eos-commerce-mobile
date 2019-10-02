import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';

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

export default function Home({ navigation }) {
  return (
    <ProductList>
      <Product>
        <ProductImage
          source={{
            uri:
              'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1529520060550',
          }}
        />
        <ProductTitle>Mac book</ProductTitle>
        <ProductPrice>$: 11.000,00</ProductPrice>
        <AddButton onPress={() => navigation.navigate('Cart')}>
          <ProductAmount>
            <Icons name="add-shopping-cart" size={16} color="#fff" />
            <ProductAmountText>3</ProductAmountText>
          </ProductAmount>
          <ButtonTitle>Add to cart</ButtonTitle>
        </AddButton>
      </Product>
    </ProductList>
  );
}
