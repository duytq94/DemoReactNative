import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1
  },
  btnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#f5a623',
    borderRadius: 20,
    margin: 10
  },
  btnPassive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#7e8da6',
    borderRadius: 20,
    margin: 10
  },
  textActive: {
    color: 'black',
    fontWeight: 'bold'
  },
  textPassive: {
    color: 'white',
    fontWeight: 'bold'
  }
})
