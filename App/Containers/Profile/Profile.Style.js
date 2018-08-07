import {StyleSheet} from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1
  },
  btnDone: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#f5a623',
    borderRadius: 10,
    margin: 10
  },
  textBtnDone: {
    color: 'black',
    fontWeight: 'bold'
  },
  viewWrapAvatar: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: -30,
    marginBottom: 10
  },
  imageAvatar: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 20
  },
  imageChangeAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  btnChangeAvatar: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  textTitleInput: {
    color: '#f5a623'
  },
  textInput: {
    margin: 10
  },
  viewItemInput: {
    marginTop: 10,
    marginBottom: 10
  },
  btnChangeBackground: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  viewBreakLine: {
    width: '90%',
    height: 0.3,
    backgroundColor: 'grey',
    marginLeft: 10
  }
})
