import styled from 'styled-components/native';
import { Colors, FontCustom } from '../../config/StyleConfigs';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${Colors.fontColor1};
  font-family: ${FontCustom.medium};
  margin: 64px 0 24px;
`;
