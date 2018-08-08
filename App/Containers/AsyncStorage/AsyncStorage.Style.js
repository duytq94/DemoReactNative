import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1
  },
  viewBody: {
    margin: 10
  },
  btnSave: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#f5a623',
    borderRadius: 10,
    margin: 10
  },
  textBtnSave: {
    color: 'black',
    fontWeight: 'bold'
  },
  btnRead: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#5dbecb',
    borderRadius: 10,
    margin: 10
  },
  textBtnRead: {
    color: 'white',
    fontWeight: 'bold'
  },
  textTitleInput: {
    color: '#f5a623',
    margin: 5
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20
  },
  textTitleInput2: {
    color: '#5dbecb',
    margin: 5
  },
  viewItemInput: {
    margin: 10
  },
  breakLine: {
    width: '95%',
    height: 0.5,
    backgroundColor: 'grey',
    margin: 5
  }
})
