import {StyleSheet, Dimensions} from 'react-native'
import ApplicationStyles from '../../Themes/ApplicationStyles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewContainer: {
    flex: 1,
    backgroundColor: '#f8f9fb',
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
  viewWrapIndicator: {
    position: 'absolute',
    left: 20,
    right: 20,
  },
  viewIndicator: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'white',
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

  // Plate white
  viewWrapPlateWhite: {
    position: 'absolute',
    justifyContent: 'center',

  },
  viewWrapContentPlateWhite: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  imgPlateWhite: {
    width: 130,
    height: 130,
  },
  textCount: {
    color: '#575869',
    fontWeight: 'bold',
  },

  // Plate
  imgPlate: {
    width: 130,
    height: 130
  },
  viewWrapPlateRow1: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-around'
  },
  viewWrapPlateRow2: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-around'
  },
  viewWrapPlateRow3: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-around'
  },
  viewWrapPlateAndName: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  viewWrapPlate: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  textPlate: {
    fontWeight: 'bold',
    color: '#575869',
    marginTop: 5
  },

  // Price
  viewWrapPrice: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imgRedCircle: {
    width: 28,
    height: 28,
  },
  textPrice: {
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 11,
  },

  // Bottom menu
  imgCoverWhiteBottom: {
    width: '100%',
    height: 280,
    position: 'absolute',
    marginTop: (Dimensions.get('window').height) - 280,
  },
  viewWrapBottomMenu: {
    height: 120,
    position: 'absolute',
    marginTop: (Dimensions.get('window').height) - 120,
    left: 20,
    right: 20,
    // backgroundColor: 'orange'
  },
  viewWrapIconsBottomMenu: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  imgIconBottomMenu: {
    width: 40,
    height: 40,
  },
  viewWrapTextBottomMenu1: {
    width: '100%',
    height: 100,
    position: 'absolute',
    justifyContent: 'flex-end',
    // backgroundColor: 'blue'
  },
  viewWrapTextBottomMenu2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    // backgroundColor: 'red'
  },
  viewWrapTextBottomMenu3: {
    width: 50,
    alignItems: 'center',
  },
  textBottomMenu: {
    fontWeight: 'bold',
    color: '#575869',
    fontSize: 11
  }
})
