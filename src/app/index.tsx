import { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { styles } from './styles';
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_STATUSBAR_CONTENT_COLOR
} from '../shared/constants/colors';
import { CustomText } from '../shared/components/CustomText';

export const AppWrapper: FC = () => {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar
        backgroundColor={DARK_BACKGROUND_COLOR}
        barStyle={LIGHT_STATUSBAR_CONTENT_COLOR}
      />
      <CustomText>Text</CustomText>
    </View>
  );
};
