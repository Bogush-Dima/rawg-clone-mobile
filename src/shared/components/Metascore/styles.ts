import { StyleSheet } from 'react-native';
import {
  METASCORE_BORDER_COLOR,
  METASCORE_VALUE_COLOR
} from 'constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 32,
    borderWidth: 1,
    borderColor: METASCORE_BORDER_COLOR,
    borderRadius: 4,
    paddingVertical: 2
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
    color: METASCORE_VALUE_COLOR,
    textAlign: 'center'
  }
});
