import { StyleSheet } from 'react-native';
import { COLORS } from 'constants';

export const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 32,
    borderWidth: 1,
    borderColor: COLORS.GREEN.LIGHTER,
    borderRadius: 4,
    paddingVertical: 2
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.GREEN.DARKER,
    textAlign: 'center'
  }
});
