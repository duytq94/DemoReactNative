import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  toolbar: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  icBack: {
    width: 23,
    height: 23,
    marginLeft: 26
  },
  titleToolbar: {
    color: '#203152',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
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
  }
})
