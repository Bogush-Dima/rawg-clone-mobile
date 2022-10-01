import { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { ITextModifiedProps } from './types';

export const TextModified: FC<ITextModifiedProps> = ({ children, style }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);
