import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/global';

export const ProductList = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.3, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const ProductImage = styled.Image`
  height: 220px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;
export const AddButton = styled.TouchableOpacity`
  background: ${colors.main};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ButtonTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
