import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1
  },
  btn: {
    backgroundColor: '#7e8da6',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    margin: 10
  },
  textBtn: {
    color: 'white',
    textAlign: 'center'
  }
})
