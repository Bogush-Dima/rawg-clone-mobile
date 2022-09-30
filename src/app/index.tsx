import { FC } from 'react';
import { Text, View } from 'react-native';
import { CustomText } from '../shared/components/CustomText/ui';
import { styles } from './styles';

export const AppWrapper: FC = () => {
  return (
    <View style={styles.common}>
      <CustomText value="Text" />
      <Text>sdfgdsfg</Text>
    </View>
  );
};
