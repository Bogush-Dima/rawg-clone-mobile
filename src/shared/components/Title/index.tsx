import { TextModified } from 'components/TextModified';
import { FC } from 'react';
import { ICommonTextProps } from 'src/shared/commonTypes';
import { styles } from './styles';

export const Title: FC<ICommonTextProps> = ({ children, style }) => (
  <TextModified style={{ ...styles.text, ...style }}>{children}</TextModified>
);
