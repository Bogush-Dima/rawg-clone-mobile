import { FC } from 'react';
import { Text } from 'react-native';
import { ICustomTextProps } from './types';
import { styles } from './styles';

export const CustomText: FC<ICustomTextProps> = ({ children, style }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);
