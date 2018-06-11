import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f8f9fb',
  },
  toolbar: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    backgroundColor: '#ffbf00',
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

  // Tab indicator
  tabIndicator: {
    backgroundColor: '#f53970',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
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

  // Text entrance
  textEntrance: {
    color: '#575869',
    fontWeight: 'bold',
  },
  viewWrapTextEntrance: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  viewWrapTable: {
    height: 350,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  // Big table
  viewWrapTwoTopChair: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewWrapTableRow1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
  },
  imgChairTop: {
    width: 40,
    height: 20,
  },
  imgChairBottom: {
    width: 40,
    height: 20,
  },
  imgBigTable: {
    width: 120,
    height: 60,
  },
  viewWrapTextBigTable: {
    position: 'absolute',
    paddingTop: 5,
    paddingLeft: 20,
  },
  textNumber: {
    color: '#575869',
    fontWeight: 'bold',
  },
  textStatus: {
    fontWeight: 'bold',
    fontSize: 9,
    marginTop: 10,
  },

  // Small table
  imgSmallTable: {
    width: 70,
    height: 60,
  },
  viewWrapTopChair: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewWrapTextSmallTable: {
    position: 'absolute',
    paddingTop: 5,
    paddingLeft: 15,
  },

  // Bottom menu
  viewWrapBottomMenu: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewWrapIconBottomMenu: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  imgIconBottomMenu: {
    width: 40,
    height: 40,
  },
  viewWrapTextBottomMenu: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    width: '100%'
  },
  viewWrapTextBottomMenu2: {
    width: 80,
    alignItems: 'center',
  },
  textBottomMenu: {
    color: '#575869',
    fontWeight: 'bold',
    fontSize: 12
  }
})
