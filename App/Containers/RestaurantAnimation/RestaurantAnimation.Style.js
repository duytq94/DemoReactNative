import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  toolbar: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  icBack: {
    width: 23,
    height: 23,
    marginLeft: 26,
  },
  titleToolbar: {
    color: '#203152',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  tabIndicator: {
    backgroundColor: '#f53970',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewWrapItemTabIndicator: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  icTabIndicator: {
    width: 17,
    height: 17,
  },
  textTabIndicator: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 8,
  },
})
