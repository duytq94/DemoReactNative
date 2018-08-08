import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1
  },
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
  viewInput: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },
  textInput: {
    color: 'black',
    marginLeft: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 16,
    flex: 1
  },
  btnSignIn: {
    borderRadius: 10,
    backgroundColor: '#f5a623',
    alignSelf: 'center',
    width: 300,
    height: 60,
    marginTop: 30,
    marginBottom: 50,
    justifyContent: 'center'
  },
  textSignIn: {
    color: 'white',
    fontSize: 19.3,
    position: 'absolute',
    fontFamily: 'SFUIText-Bold',
    alignSelf: 'center'
  },
  textTitle: {
    color: '#f5a623',
    fontSize: 24.7,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  viewWrapItem: {
    padding: 10,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 4
  }
})
