import { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { styles } from './styles';
import { Description } from 'components/Description';
import { Select } from 'components/Select';
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_STATUSBAR_CONTENT_COLOR
} from 'constants/colors';
import { Title } from 'components/Title';

export const AppWrapper: FC = () => {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar
        backgroundColor={DARK_BACKGROUND_COLOR}
        barStyle={LIGHT_STATUSBAR_CONTENT_COLOR}
      />
      <Title>Title</Title>
      <Description>Description</Description>
      <Select />
    </View>
  );
};
