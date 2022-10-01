import { FC } from 'react';
import { StatusBar, StatusBarStyle, View } from 'react-native';
import { styles } from './styles';
import { COLORS } from 'constants';
import { Dropdown } from 'components/Dropdown';
import { Title } from 'components/Title';
import { TextModified } from 'components/TextModified';
import { GameName } from 'components/GameName';
import { Metascore } from 'components/Metascore';

export const AppWrapper: FC = () => {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar
        backgroundColor={COLORS.DARK.BACKGROUND}
        barStyle={COLORS.LIGHT.STATUSBAR_CONTENT as StatusBarStyle}
      />
      <Title>Title</Title>
      <TextModified>Text Modified</TextModified>
      <GameName>Game Name</GameName>
      <Metascore value={54} />
      <Dropdown />
    </View>
  );
};
