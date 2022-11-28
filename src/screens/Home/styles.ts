import {StyleSheet} from 'react-native';
import {width} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: 9,
    width: width / 2 - 16 * 2,
    flexDirection: 'row',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    height: 70,
  
  },
  title: {
    fontWeight: '700',
    fontSize: 44,
  },
  description: {},
  guideZoneSecondContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
  },
  guideZoneSecond: {
    height: 50,
    width: 150,
  },
  guideZoneFirst: {
    margin: 0,
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  guideZoneFirstContentContainer: {
    width: width / 2 - 32 - 6
  }
});
