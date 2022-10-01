import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { IMetascoreProps } from './types';

export const Metascore: FC<IMetascoreProps> = ({ value, style }) => (
  <View style={{ ...styles.wrapper, ...style }}>
    <Text style={styles.value}>{value}</Text>
  </View>
);
