import { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { ITitleProps } from './types';

export const Title: FC<ITitleProps> = ({ children, style }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);
