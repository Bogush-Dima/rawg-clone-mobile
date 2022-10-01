import { FC } from 'react';
import { Text } from 'react-native';
import { ICommonTextProps } from 'src/shared/commonTypes';
import { styles } from './styles';

export const TextModified: FC<ICommonTextProps> = ({ children, style }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);
