import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1
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
  btnDirection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#f5a623',
    borderRadius: 10,
    margin: 10
  },
  textBtnDirection: {
    color: 'black',
    fontWeight: 'bold'
  },
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)'
  }
})
