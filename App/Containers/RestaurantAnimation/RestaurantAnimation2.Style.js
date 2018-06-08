import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f8f9fb',
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

  //Bottom
  imgCoverWhiteBottom: {
    width: '100%',
    height: 250,
    position: 'absolute',
    marginTop: (Dimensions.get('window').height) - 250
  }

})
