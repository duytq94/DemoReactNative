import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  button: {
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#203152'
  },
  textBtn: {
    color: '#f9b228',
    fontSize: 16,
    alignSelf: 'center',
    margin: 10
  },
  viewContainer: {
    flex: 1
  }
})
