import { TextModified } from 'components/TextModified';
import { FC } from 'react';
import { styles } from './styles';
import { ITitleProps } from './types';

export const Title: FC<ITitleProps> = ({ children, style }) => (
  <TextModified style={{ ...styles.text, ...style }}>{children}</TextModified>
);
