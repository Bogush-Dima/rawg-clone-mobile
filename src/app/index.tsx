import { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { styles } from './styles';
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_STATUSBAR_CONTENT_COLOR
} from 'constants/colors';
import { Select } from 'components/Select';
import { Title } from 'components/Title';
import { TextModified } from 'components/TextModified';
import { GameName } from 'components/GameName';
import { Metascore } from 'components/Metascore';

export const AppWrapper: FC = () => {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar
        backgroundColor={DARK_BACKGROUND_COLOR}
        barStyle={LIGHT_STATUSBAR_CONTENT_COLOR}
      />
      <Title>Title</Title>
      <TextModified>Text Modified</TextModified>
      <GameName>Game Name</GameName>
      <Metascore value={54} />
      <Select />
    </View>
  );
};
