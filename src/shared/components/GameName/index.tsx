import { Title } from 'components/Title';
import { FC } from 'react';
import { ICommonTextProps } from 'src/shared/commonTypes';
import { styles } from './styles';

export const GameName: FC<ICommonTextProps> = ({ children, style }) => (
  <Title style={{ ...styles.gameName, ...style }}>{children}</Title>
);
