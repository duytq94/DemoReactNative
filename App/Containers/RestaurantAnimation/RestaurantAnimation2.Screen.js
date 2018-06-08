import React, {Component} from 'react'
import {Animated, BackHandler, Image, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native'

import styles from './RestaurantAnimation2.Style'
import images from '../../Themes/Images'

export default class RestaurantAnimation2Screen extends Component {
  constructor(props) {
    super(props);
    backPress = this.handleBackPress.bind(this);

    // Animation phrase 1
    this.comeUpPlate1 = new Animated.Value(10);
    this.comeUpPlate2 = new Animated.Value(20);
    this.comeUpPlate3 = new Animated.Value(15);
  }

  componentDidMount() {
    this.comeUpPlate1.setValue(10);
    this.comeUpPlate2.setValue(20);
    this.comeUpPlate3.setValue(15);
    Animated.parallel([
      Animated.timing(this.comeUpPlate1, {
        toValue: 0,
        duration: 600,
      }),
      Animated.timing(this.comeUpPlate2, {
        toValue: 0,
        duration: 800,
      }),
      Animated.timing(this.comeUpPlate3, {
        toValue: 0,
        duration: 800,
        delay: 400
      }),
    ]).start()
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', backPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', backPress)
  }

  handleBackPress() {
    this.props.navigation.goBack();
    return true
  }

  render() {

    return (
      <View style={styles.viewContainer}>
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>RESTAURANT2</Text>
          <View style={styles.icBack}/>
        </View>

        {/* Tab indicator */}
        <View style={styles.tabIndicator}>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_home}/>
            <Text style={styles.textTabIndicator}>Dashboard</Text>
          </View>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_menu}/>
            <Text style={styles.textTabIndicator}>Menus</Text>
          </View>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_seat}/>
            <Text style={styles.textTabIndicator}>Seats</Text>
          </View>
        </View>

        {/*Group plates*/}
        <View>
          {/*Plate row 1*/}
          <View style={styles.viewWrapPlateRow1}>
            {/*Plate 1*/}
            <Animated.View style={{marginTop: this.comeUpPlate1}}>
              <View style={styles.viewWrapPlate}>
                <Image style={styles.imgPlate} source={images.flan}/>
                <Text style={styles.textPlate}>Flan</Text>
                <View style={styles.viewWrapPrice}>
                  <Image style={styles.imgRedCircle} source={images.ic_red_circle}/>
                  <Text style={styles.textPrice}>$16</Text>
                </View>
              </View>
            </Animated.View>

            {/*Plate 2*/}
            <Animated.View style={{marginTop: this.comeUpPlate2}}>
              <View style={styles.viewWrapPlate}>
                <Image style={styles.imgPlate} source={images.curry}/>
                <Text style={styles.textPlate}>Curry</Text>
              </View>
            </Animated.View>
          </View>

          {/*Plate row 2*/}
          <View style={styles.viewWrapPlateRow2}>
            {/*Plate 3*/}
            <Animated.View style={{marginTop: this.comeUpPlate3}}>
              <View style={styles.viewWrapPlate}>
                <Image style={styles.imgPlate} source={images.salad}/>
                <Text style={styles.textPlate}>Salmon Salad</Text>
              </View>
            </Animated.View>

            {/*Plate 4*/}
            <Animated.View style={{marginTop: this.comeUpPlate3}}>
              <View style={styles.viewWrapPlate}>
                <Image style={styles.imgPlate} source={images.pizza}/>
                <Text style={styles.textPlate}>Pizza</Text>
              </View>
            </Animated.View>
          </View>

          {/*Plate row 3*/}
          <View style={styles.viewWrapPlateRow3}>
            {/*Plate 5*/}
            <Animated.View style={{marginTop: this.comeUpPlate3}}>
              <View style={styles.viewWrapPlate}>
                <Image style={styles.imgPlate} source={images.chicken}/>
                <Text style={styles.textPlate}>Chicken</Text>
              </View>
            </Animated.View>

            {/*Plate 6*/}
            <Animated.View style={{marginTop: this.comeUpPlate3}}>
              <View style={styles.viewWrapPlate}>
                <Image style={styles.imgPlate} source={images.duck}/>
                <Text style={styles.textPlate}>Duck</Text>
              </View>
            </Animated.View>
          </View>
        </View>

        {/*Cover white bottom*/}
        <View style={styles.imgCoverWhiteBottom}>
          <Image style={{width: '100%', height: '100%'}} source={images.shadow_white}/>
        </View>

      </View>
    )
  }
}
