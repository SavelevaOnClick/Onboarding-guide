import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 9,
  },
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  description: {},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'lime',
  }
});
