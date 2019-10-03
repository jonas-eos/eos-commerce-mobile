import styled from 'styled-components/native';
import logo from '../../assets/logo.png';
import colors from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: ${colors.dark};
`;

export const LogoButtom = styled.TouchableOpacity`
  width: 128px;
  height: 24px;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 128px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemAmount = styled.Text`
  color: #fff;
  position: absolute;
  text-align: center;
  bottom: -8px;
  right: 12px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.main};
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
