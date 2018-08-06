import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1
  },
  viewButton: {
    width: '80%',
    backgroundColor: '#f5a623',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 8
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  viewContent: {
    margin: 10,
  }
})
