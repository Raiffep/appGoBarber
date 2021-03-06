import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Colors, FontCustom } from '../../config/StyleConfigs';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${Colors.inputColorBase};
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${Colors.fontColor2};
  font-size: 16px;
  font-family: ${FontCustom.regular};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
