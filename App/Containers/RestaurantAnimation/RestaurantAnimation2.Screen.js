import React, {Component} from 'react'
import {Animated, BackHandler, Image, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native'

import styles from './RestaurantAnimation2.Style'
import images from '../../Themes/Images'

export default class RestaurantAnimation2Screen extends Component {
  constructor(props) {
    super(props);
    backPress = this.handleBackPress.bind(this);

    this.state = {
      whichPlate: 0,
      isBtnPlatePress: false,
      countQuantity: 0,
    };

    // Animation phrase 1
    this.comeUpPlate1 = new Animated.Value(10);
    this.comeUpPlate2 = new Animated.Value(20);
    this.comeUpPlate3 = new Animated.Value(15);

    // Animation phrase 2
    this.fadeInWhitePlate = new Animated.Value(0);
    this.zoomPlate = new Animated.Value(0);

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

  onPlatePress = (whichPlate) => {
    this.setState({
      whichPlate: whichPlate,
    });

    this.fadeInWhitePlate.setValue(0.0);
    this.zoomPlate.setValue(0);
    Animated.parallel([
      Animated.timing(this.fadeInWhitePlate, {
        toValue: 1.0,
        duration: 800
      }),
      Animated.timing(this.zoomPlate, {
        toValue: 1,
        duration: 800
      })
    ]).start(this.onAnimationPlateSuccess)
  };

  onAnimationPlateSuccess = () => {
    this.setState({
      isBtnPlatePress: true,
    });
  };

  onIconAddPress = () => {
    this.setState({
      countQuantity: this.state.countQuantity + 1,
    });
    this.zoomPlate.setValue(0);
    Animated.timing(this.zoomPlate, {
      toValue: 1,
      duration: 800
    }).start();
  };

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

    let scaleZoomPlate = this.zoomPlate.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1.0, 0.9, 1.1, 1.0],
    });

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
            <View style={styles.viewWrapPlateAndName}>
              <Animated.View style={{
                marginTop: this.comeUpPlate1,
                transform: [{scale: this.state.whichPlate === 1 ? scaleZoomPlate : 1.0}]
              }}>
                <TouchableWithoutFeedback onPress={!this.state.isBtnPlatePress ? () => this.onPlatePress(1) : null}>

                  <View style={styles.viewWrapPlate}>
                    <Image style={styles.imgPlate} source={images.flan}/>

                    {/*Plate white*/}
                    <View style={styles.viewWrapPlateWhite}>
                      <Animated.View
                        style={{opacity: (this.state.whichPlate === 1) ? this.fadeInWhitePlate : 0}}>
                        <View style={{justifyContent: 'center'}}>
                          <Image style={styles.imgPlateWhite} source={images.ic_white_circle}/>

                          <View style={styles.viewWrapContentPlateWhite}>
                            <Image style={{width: 20, height: 20}} source={images.ic_remove_circle}/>
                            <Text style={styles.textCount}>{this.state.countQuantity}</Text>
                            <TouchableWithoutFeedback onPress={this.state.isBtnPlatePress ? this.onIconAddPress : null}>
                              <Image style={{width: 20, height: 20}} source={images.ic_add_circle}/>
                            </TouchableWithoutFeedback>
                          </View>

                        </View>
                      </Animated.View>
                    </View>

                    {/*Price*/}
                    <View style={styles.viewWrapPrice}>
                      <Image style={styles.imgRedCircle} source={images.ic_red_circle}/>
                      <Text style={styles.textPrice}>$16</Text>
                    </View>
                  </View>

                </TouchableWithoutFeedback>
              </Animated.View>

              {/*Name food*/}
              <Text style={styles.textPlate}>Flan</Text>
            </View>

            {/*Plate 2*/}
            <View style={styles.viewWrapPlateAndName}>
              <Animated.View style={{
                marginTop: this.comeUpPlate1,
                transform: [{scale: this.state.whichPlate === 2 ? scaleZoomPlate : 1.0}]
              }}>
                <TouchableWithoutFeedback onPress={!this.state.isBtnPlatePress ? () => this.onPlatePress(2) : null}>

                  <View style={styles.viewWrapPlate}>
                    <Image style={styles.imgPlate} source={images.curry}/>

                    {/*Plate white*/}
                    <View style={styles.viewWrapPlateWhite}>
                      <Animated.View
                        style={{opacity: (this.state.whichPlate === 2) ? this.fadeInWhitePlate : 0}}>
                        <View style={{justifyContent: 'center'}}>
                          <Image style={styles.imgPlateWhite} source={images.ic_white_circle}/>

                          <View style={styles.viewWrapContentPlateWhite}>
                            <Image style={{width: 20, height: 20}} source={images.ic_remove_circle}/>
                            <Text style={styles.textCount}>{this.state.countQuantity}</Text>
                            <TouchableWithoutFeedback onPress={this.state.isBtnPlatePress ? this.onIconAddPress : null}>
                              <Image style={{width: 20, height: 20}} source={images.ic_add_circle}/>
                            </TouchableWithoutFeedback>
                          </View>

                        </View>
                      </Animated.View>
                    </View>

                    {/*Price*/}
                    <View style={styles.viewWrapPrice}>
                      <Image style={styles.imgRedCircle} source={images.ic_red_circle}/>
                      <Text style={styles.textPrice}>$24</Text>
                    </View>
                  </View>

                </TouchableWithoutFeedback>
              </Animated.View>

              {/*Name food*/}
              <Text style={styles.textPlate}>Curry</Text>
            </View>
          </View>

          {/*Plate row 2*/}
          <View style={styles.viewWrapPlateRow2}>
            {/*Plate 3*/}
            <View style={styles.viewWrapPlateAndName}>
              <Animated.View style={{
                marginTop: this.comeUpPlate1,
                transform: [{scale: this.state.whichPlate === 3 ? scaleZoomPlate : 1.0}]
              }}>
                <TouchableWithoutFeedback onPress={!this.state.isBtnPlatePress ? () => this.onPlatePress(3) : null}>

                  <View style={styles.viewWrapPlate}>
                    <Image style={styles.imgPlate} source={images.salad}/>

                    {/*Plate white*/}
                    <View style={styles.viewWrapPlateWhite}>
                      <Animated.View
                        style={{opacity: (this.state.whichPlate === 3) ? this.fadeInWhitePlate : 0}}>
                        <View style={{justifyContent: 'center'}}>
                          <Image style={styles.imgPlateWhite} source={images.ic_white_circle}/>

                          <View style={styles.viewWrapContentPlateWhite}>
                            <Image style={{width: 20, height: 20}} source={images.ic_remove_circle}/>
                            <Text style={styles.textCount}>{this.state.countQuantity}</Text>
                            <TouchableWithoutFeedback onPress={this.state.isBtnPlatePress ? this.onIconAddPress : null}>
                              <Image style={{width: 20, height: 20}} source={images.ic_add_circle}/>
                            </TouchableWithoutFeedback>
                          </View>

                        </View>
                      </Animated.View>
                    </View>

                    {/*Price*/}
                    <View style={styles.viewWrapPrice}>
                      <Image style={styles.imgRedCircle} source={images.ic_red_circle}/>
                      <Text style={styles.textPrice}>$12</Text>
                    </View>
                  </View>

                </TouchableWithoutFeedback>
              </Animated.View>

              {/*Name food*/}
              <Text style={styles.textPlate}>Salmon Salad</Text>
            </View>

            {/*Plate 4*/}
            <View style={styles.viewWrapPlateAndName}>
              <Animated.View style={{
                marginTop: this.comeUpPlate1,
                transform: [{scale: this.state.whichPlate === 4 ? scaleZoomPlate : 1.0}]
              }}>
                <TouchableWithoutFeedback onPress={!this.state.isBtnPlatePress ? () => this.onPlatePress(4) : null}>

                  <View style={styles.viewWrapPlate}>
                    <Image style={styles.imgPlate} source={images.pizza}/>

                    {/*Plate white*/}
                    <View style={styles.viewWrapPlateWhite}>
                      <Animated.View
                        style={{opacity: (this.state.whichPlate === 4) ? this.fadeInWhitePlate : 0}}>
                        <View style={{justifyContent: 'center'}}>
                          <Image style={styles.imgPlateWhite} source={images.ic_white_circle}/>

                          <View style={styles.viewWrapContentPlateWhite}>
                            <Image style={{width: 20, height: 20}} source={images.ic_remove_circle}/>
                            <Text style={styles.textCount}>{this.state.countQuantity}</Text>
                            <TouchableWithoutFeedback onPress={this.state.isBtnPlatePress ? this.onIconAddPress : null}>
                              <Image style={{width: 20, height: 20}} source={images.ic_add_circle}/>
                            </TouchableWithoutFeedback>
                          </View>

                        </View>
                      </Animated.View>
                    </View>

                    {/*Price*/}
                    <View style={styles.viewWrapPrice}>
                      <Image style={styles.imgRedCircle} source={images.ic_red_circle}/>
                      <Text style={styles.textPrice}>$12</Text>
                    </View>
                  </View>

                </TouchableWithoutFeedback>
              </Animated.View>

              {/*Name food*/}
              <Text style={styles.textPlate}>Pizza</Text>
            </View>
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
