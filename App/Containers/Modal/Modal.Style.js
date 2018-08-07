import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1
  },
  viewBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnOpenDialog: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '80%',
    backgroundColor: '#f5a623',
    borderRadius: 10,
    margin: 10
  },
  textBtnOpenDialog: {
    color: 'black',
    fontWeight: 'bold'
  },
  backgroundDialog: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewDialog: {
    borderRadius: 8,
    borderColor: '#8e8e93',
    borderWidth: 0.8,
    width: '80%',
    backgroundColor: 'white'
  },
  btnDoneDialog: {
    margin: 10,
    flex: 1,
    height: 40,
    backgroundColor: '#203152',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnDismissDialog: {
    margin: 10,
    flex: 1,
    width: '40%',
    height: 40,
    backgroundColor: '#5dbecb',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBtnDialog: {
    fontSize: 15.4,
    color: 'white'
  },
  viewTitleDialog: {
    height: 60,
    backgroundColor: '#f5a623',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textTitleDialog: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textInputDialog: {
    margin: 10
  },
  viewUnderline: {
    width: '95%',
    height: 0.5,
    backgroundColor: 'grey',
    alignSelf: 'center'
  },
  viewWrapBtn:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  }
})
