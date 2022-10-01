import { Title } from 'components/Title';
import { FC } from 'react';
import { styles } from './styles';
import { ICommonTextProps } from 'commonTypes';

export const GameName: FC<ICommonTextProps> = ({ children, style }) => (
  <Title style={{ ...styles.gameName, ...style }}>{children}</Title>
);
