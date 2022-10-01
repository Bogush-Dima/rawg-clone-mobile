import { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { ICommonTextProps } from 'commonTypes';

export const TextModified: FC<ICommonTextProps> = ({ children, style }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);
