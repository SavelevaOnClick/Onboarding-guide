import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white_FFFFFF,
    paddingVertical: 6,
  },
  barContainer: {
    backgroundColor: colors.white_FFFFFF,
    height: 48,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  tabIconContainer: {
    alignItems: 'center',
  },
});
