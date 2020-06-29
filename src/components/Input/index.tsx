import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';
import { Colors } from '../../config/StyleConfigs';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color={Colors.placeholderColor} />
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor={Colors.placeholderColor}
      {...rest}
    />
  </Container>
);

export default Input;
