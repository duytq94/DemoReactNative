import React, {Component} from 'react'
import {Animated, BackHandler, Image, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native'

import styles from './RestaurantAnimation.Style'
import images from '../../Themes/Images'
import * as Easing from "react-native/Libraries/Animated/src/Easing";

export default class RestaurantAnimationScreen extends Component {
  constructor(props) {
    super(props);
    backPress = this.handleBackPress.bind(this);

    // Animation phrase 1 (drop down view with bounce)
    this.dropDownBodyAnim = new Animated.Value(60);
    this.fadeInBodyanim = new Animated.Value(0.0);

    // Animation phrase 2 (zoom button when be pressed and show up bottom menu)
    this.zoomTableAnim = new Animated.Value(0);
    this.fadeOutTableAnim = new Animated.Value(1.0);
    this.fadeOutTextEntranceAnim = new Animated.Value(1.0);
    this.comeUpIconBottomMenuAnim1 = new Animated.Value(0);
    this.comeUpIconBottomMenuAnim2 = new Animated.Value(0);
    this.comeUpIconBottomMenuAnim3 = new Animated.Value(0);
    this.comeUpIconBottomMenuAnim4 = new Animated.Value(0);
    this.comeUpTextBottomMenuAnim = new Animated.Value(-20);

    // Animation phrase 3 (zoom out icon bottom menu)
    this.zoomIconBottomMenu = new Animated.Value(1.0);

    this.state = {
      whichTable: 0,
      whichMenuIcon: 0,
      isBtnTablePressed: false,
    }
  }

  componentDidMount() {
    this.dropDownBodyAnim.setValue(60);
    this.fadeInBodyanim.setValue(0.0);
    Animated.parallel([
      Animated.spring(this.dropDownBodyAnim, {
        toValue: 0,
        friction: 3.0,
        duration: 1200,
      }),
      Animated.timing(this.fadeInBodyanim, {
        toValue: 1.0,
        duration: 800,
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

  onTablePress = whichTable => {
    if (!this.state.isBtnTablePressed) {
      this.setState({
        whichTable: whichTable,
        isBtnTablePressed: true,
      });

      // Have to set value so animation can run multiple times
      this.zoomTableAnim.setValue(0);
      this.fadeOutTableAnim.setValue(1.0);
      this.fadeOutTextEntranceAnim.setValue(1.0);
      this.comeUpIconBottomMenuAnim1.setValue(0);
      this.comeUpIconBottomMenuAnim2.setValue(0);
      this.comeUpIconBottomMenuAnim3.setValue(0);
      this.comeUpIconBottomMenuAnim4.setValue(0);
      this.comeUpTextBottomMenuAnim.setValue(-20);

      Animated.parallel([
        Animated.timing(this.zoomTableAnim, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(this.fadeOutTableAnim, {
          toValue: 0.2,
          duration: 800,
        }),
        Animated.timing(this.fadeOutTextEntranceAnim, {
          toValue: 0.0,
          duration: 800,
        }),
        Animated.timing(this.comeUpIconBottomMenuAnim1, {
          toValue: 1,
          duration: 600,
          easing: Easing.ease
        }),
        Animated.timing(this.comeUpIconBottomMenuAnim2, {
          toValue: 1,
          duration: 600,
          easing: Easing.ease,
          delay: 50,
        }),
        Animated.timing(this.comeUpIconBottomMenuAnim3, {
          toValue: 1,
          duration: 600,
          easing: Easing.ease,
          delay: 100,
        }),
        Animated.timing(this.comeUpIconBottomMenuAnim4, {
          toValue: 1,
          duration: 600,
          easing: Easing.ease,
          delay: 150,
        }),
        Animated.timing(this.comeUpTextBottomMenuAnim, {
          toValue: 15,
          duration: 300,
          easing: Easing.ease,
          delay: 150,
        }),
      ]).start()
    }
  };

  onIconCancelPress = () => {
    this.zoomTableAnim.setValue(1);
    this.fadeOutTableAnim.setValue(0.2);
    this.fadeOutTextEntranceAnim.setValue(0.0);
    this.comeUpIconBottomMenuAnim1.setValue(1);
    this.comeUpIconBottomMenuAnim2.setValue(1);
    this.comeUpIconBottomMenuAnim3.setValue(1);
    this.comeUpIconBottomMenuAnim4.setValue(1);
    this.comeUpTextBottomMenuAnim.setValue(15);

    Animated.parallel([
      Animated.timing(this.zoomTableAnim, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(this.fadeOutTableAnim, {
        toValue: 1.0,
        duration: 800,
      }),
      Animated.timing(this.fadeOutTextEntranceAnim, {
        toValue: 1.0,
        duration: 800,
      }),
      Animated.timing(this.comeUpIconBottomMenuAnim1, {
        toValue: 0,
        duration: 600,
        easing: Easing.ease
      }),
      Animated.timing(this.comeUpIconBottomMenuAnim2, {
        toValue: 0,
        duration: 600,
        easing: Easing.ease,
        delay: 50,
      }),
      Animated.timing(this.comeUpIconBottomMenuAnim3, {
        toValue: 0,
        duration: 600,
        easing: Easing.ease,
        delay: 100,
      }),
      Animated.timing(this.comeUpIconBottomMenuAnim4, {
        toValue: 0,
        duration: 600,
        easing: Easing.ease,
        delay: 150,
      }),
      Animated.timing(this.comeUpTextBottomMenuAnim, {
        toValue: -20,
        duration: 300,
        easing: Easing.ease,
        delay: 150,
      }),
    ]).start(this.onAnimationCompleted)

    // Notice that we can call setState in here because
    // setState will setValue immediately and then animation can check value to revert
  };

  onOthersIconPress = whichMenuIcon => {
    this.setState({
      whichMenuIcon: whichMenuIcon
    });
    Animated.timing(this.zoomIconBottomMenu, {
      toValue: 0.5,
      duration: 600
    }).start(this.onAnimationNavigateCompleted)
  };

  onAnimationNavigateCompleted = () => {
    this.props.navigation.navigate('RestaurantAnimation2Screen', {})
  }

  onAnimationCompleted = () => {
    this.setState({
      isBtnTablePressed: false,
      whichTable: 0,
    });
  };

  render() {
    let scaleZoomTable = this.zoomTableAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1.0, 0.85, 1.15, 1.0],
    });

    let comeIconUpBottomMenu1 = this.comeUpIconBottomMenuAnim1.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [-40, 55, 15, 35],
    });
    let comeIconUpBottomMenu2 = this.comeUpIconBottomMenuAnim2.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [-40, 50, 20, 35],
    });
    let comeIconUpBottomMenu3 = this.comeUpIconBottomMenuAnim3.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [-40, 45, 25, 35],
    });
    let comeIconUpBottomMenu4 = this.comeUpIconBottomMenuAnim4.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [-40, 40, 30, 35],
    });

    return (
      <View style={styles.viewContainer}>
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>RESTAURANT</Text>
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

        {/*Group table*/}
        <Animated.View style={{marginTop: this.dropDownBodyAnim, opacity: this.fadeInBodyanim}}>
          {/*Text "Entrance"*/}
          <Animated.View
            style={{
              opacity: this.fadeOutTextEntranceAnim,
            }}
          >
            <View style={styles.viewWrapTextEntrance}>
              <Text style={styles.textEntrance}>ENTRANCE</Text>
            </View>
          </Animated.View>

          {/*Group table*/}
          <View style={styles.viewWrapTable}>
            {/* Table in row 1 */}
            <View style={styles.viewWrapTableRow1}>
              {/* Table 1 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(1)}>
                <Animated.View
                  style={{
                    transform: [{scale: this.state.whichTable === 1 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0}],
                    opacity: this.state.whichTable === 1 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgBigTable, {tintColor: this.state.whichTable === 1 ? '#7DD5AF' : null}]}
                        source={images.table_big_green}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextBigTable}>
                        <Text
                          style={[styles.textNumber, {color: this.state.whichTable === 1 ? '#ffffff' : '#575869'}]}
                        >
                          01
                        </Text>
                        <Text
                          style={[styles.textStatus, {color: this.state.whichTable === 1 ? '#ffffff' : '#575869'}]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 2 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(2)}>
                <Animated.View
                  style={{
                    transform: [{scale: this.state.whichTable === 2 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0}],
                    opacity: this.state.whichTable === 2 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgBigTable, {tintColor: this.state.whichTable === 2 ? '#F8859B' : null}]}
                        source={images.table_big_pink}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextBigTable}>
                        <Text
                          style={[styles.textNumber, {color: this.state.whichTable === 2 ? '#ffffff' : '#575869'}]}
                        >
                          02
                        </Text>
                        <Text
                          style={[styles.textStatus, {color: this.state.whichTable === 2 ? '#ffffff' : '#575869'}]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>

            {/* Table in row 2 */}
            <View style={styles.viewWrapTableRow1}>
              {/* Table 3 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(3)}>
                <Animated.View
                  style={{
                    transform: [{scale: this.state.whichTable === 3 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0}],
                    opacity: this.state.whichTable === 3 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgSmallTable, {tintColor: this.state.whichTable === 3 ? '#FBDB75' : null}]}
                        source={images.table_small_yellow}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextSmallTable}>
                        <Text
                          style={[styles.textNumber, {color: this.state.whichTable === 3 ? '#ffffff' : '#575869'}]}
                        >
                          03
                        </Text>
                        <Text
                          style={[styles.textStatus, {color: this.state.whichTable === 3 ? '#ffffff' : '#575869'}]}
                        >
                          TAKEN
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 4 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(4)}>
                <Animated.View
                  style={{
                    transform: [{scale: this.state.whichTable === 4 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0}],
                    opacity: this.state.whichTable === 4 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgSmallTable, {tintColor: this.state.whichTable === 4 ? '#7DD5AF' : null}]}
                        source={images.table_small_green}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextSmallTable}>
                        <Text
                          style={[styles.textNumber, {color: this.state.whichTable === 4 ? '#ffffff' : '#575869'}]}
                        >
                          04
                        </Text>
                        <Text
                          style={[styles.textStatus, {color: this.state.whichTable === 4 ? '#ffffff' : '#575869'}]}
                        >
                          WAIT
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 5 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(5)}>
                <Animated.View
                  style={{
                    transform: [{scale: this.state.whichTable === 5 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0}],
                    opacity: this.state.whichTable === 5 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgSmallTable, {tintColor: this.state.whichTable === 5 ? '#FBDB75' : null}]}
                        source={images.table_small_yellow}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextSmallTable}>
                        <Text
                          style={[styles.textNumber, {color: this.state.whichTable === 5 ? '#ffffff' : '#575869'}]}
                        >
                          05
                        </Text>
                        <Text
                          style={[styles.textStatus, {color: this.state.whichTable === 5 ? '#ffffff' : '#575869'}]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>

            {/* Table in row 3 */}
            <View style={styles.viewWrapTableRow1}>
              {/* Table 6 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(6)}>
                <Animated.View
                  style={{
                    transform: [{scale: this.state.whichTable === 6 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0}],
                    opacity: this.state.whichTable === 6 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgBigTable, {tintColor: this.state.whichTable === 6 ? '#F8859B' : null}]}
                        source={images.table_big_pink}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextBigTable}>
                        <Text
                          style={[styles.textNumber, {color: this.state.whichTable === 6 ? '#ffffff' : '#575869'}]}
                        >
                          06
                        </Text>
                        <Text
                          style={[styles.textStatus, {color: this.state.whichTable === 6 ? '#ffffff' : '#575869'}]}
                        >
                          TAKEN
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 7 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(7)}>
                <Animated.View
                  style={{
                    transform: [{scale: this.state.whichTable === 7 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0}],
                    opacity: this.state.whichTable === 7 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top}/>
                    </View>

                    {/* Table */}
                    <View>
                      <Image style={[styles.imgBigTable, {tintColor: this.state.whichTable === 7 ? '#7DD5AF' : null}]}
                             source={images.table_big_green} resizeMode="contain"/>
                      <View style={styles.viewWrapTextBigTable}>
                        <Text style={[styles.textNumber, {color: this.state.whichTable === 7 ? '#ffffff' : '#575869'}]}>
                          07
                        </Text>
                        <Text style={[styles.textStatus, {color: this.state.whichTable === 7 ? '#ffffff' : '#575869'}]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom}/>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </View>

        </Animated.View>

        {/*Bottom menu*/}
        <View style={styles.viewWrapBottomMenu}>
          {/*Icons*/}
          <View style={styles.viewWrapIconBottomMenu}>

            <Animated.View style={{
              marginBottom: comeIconUpBottomMenu1,
              transform: [{scale: this.state.whichMenuIcon === 1 ? this.zoomIconBottomMenu : 1.0}]
            }}>
              <TouchableWithoutFeedback onPress={() => this.onOthersIconPress(1)}>
                <Image style={styles.imgIconBottomMenu} source={images.ic_book}/>
              </TouchableWithoutFeedback>
            </Animated.View>

            <Animated.View style={{
              marginBottom: comeIconUpBottomMenu2,
              transform: [{scale: this.state.whichMenuIcon === 2 ? this.zoomIconBottomMenu : 1.0}]
            }}>
              <TouchableWithoutFeedback onPress={() => this.onOthersIconPress(2)}>
                <Image style={styles.imgIconBottomMenu} source={images.ic_add}/>
              </TouchableWithoutFeedback>
            </Animated.View>

            <Animated.View style={{
              marginBottom: comeIconUpBottomMenu3,
              transform: [{scale: this.state.whichMenuIcon === 3 ? this.zoomIconBottomMenu : 1.0}]
            }}>
              <TouchableWithoutFeedback onPress={() => this.onOthersIconPress(3)}>
                <Image style={styles.imgIconBottomMenu} source={images.ic_clock}/>
              </TouchableWithoutFeedback>
            </Animated.View>

            <Animated.View style={{marginBottom: comeIconUpBottomMenu4}}>
              <TouchableWithoutFeedback onPress={this.onIconCancelPress}>
                <Image style={styles.imgIconBottomMenu} source={images.ic_cancel}/>
              </TouchableWithoutFeedback>
            </Animated.View>
          </View>

          {/*Text*/}
          <View style={styles.viewWrapTextBottomMenu}>
            <Animated.View style={{marginBottom: this.comeUpTextBottomMenuAnim, flexDirection: 'row'}}>

              <View style={styles.viewWrapTextBottomMenu2}>
                <Text style={styles.textBottomMenu}>Book</Text>
              </View>

              <View style={styles.viewWrapTextBottomMenu2}>
                <Text style={styles.textBottomMenu}>Order</Text>
              </View>

              <View style={styles.viewWrapTextBottomMenu2}>
                <Text style={styles.textBottomMenu}>Reservation</Text>
              </View>

              <View style={styles.viewWrapTextBottomMenu2}>
                <Text style={styles.textBottomMenu}>Cancel</Text>
              </View>

            </Animated.View>

          </View>
        </View>

      </View>
    )
  }
}
