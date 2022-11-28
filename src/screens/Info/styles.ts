import {StyleSheet} from 'react-native';
import {colors, fonts} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  guideZoneContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
  },
  guideZoneContainer: {
    alignItems: 'flex-end',
  },
});
