import { TextModified } from 'components/TextModified';
import { FC } from 'react';
import { styles } from './styles';
import { ICommonTextProps } from 'commonTypes';

export const Title: FC<ICommonTextProps> = ({ children, style }) => (
  <TextModified style={{ ...styles.text, ...style }}>{children}</TextModified>
);
