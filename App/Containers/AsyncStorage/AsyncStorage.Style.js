import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  viewBody: {
    margin: 10
  },
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
    color: '#f5a623'
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20
  },
  textTitleInput2: {
    color: '#5dbecb'
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20
  },
  viewItemInput: {
    marginTop: 10
  }
})
