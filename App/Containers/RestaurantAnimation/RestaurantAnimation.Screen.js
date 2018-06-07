import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  BackHandler,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
  Animated,
} from 'react-native'

import styles from './RestaurantAnimation.Style'
import images from '../../Themes/Images'

export default class RestaurantAnimationScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)

    this.dropDownBodyAnim = new Animated.Value(60)
    this.fadeInBodyanim = new Animated.Value(0.0)
    this.zoomTableAnim = new Animated.Value(0)
    this.fadeOutTableAnim = new Animated.Value(1.0)
    this.fadeOutTextEntranceAnim = new Animated.Value(1.0)

    this.state = {
      whichTable: 0,
    }
  }

  componentDidMount() {
    this.dropDownBodyAnim.setValue(60)
    this.fadeInBodyanim.setValue(0.0)
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
    this.props.navigation.goBack()
    return true
  }

  onTablePress = whichTable => {
    this.setState({
      whichTable: whichTable,
    })

    // Have to set value from the start so animation can run again
    this.zoomTableAnim.setValue(0)
    this.fadeOutTableAnim.setValue(1.0)

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
    ]).start()
  }

  render() {
    scaleZoomTable = 1.0
    if (this.zoomTableAnim) {
      scaleZoomTable = this.zoomTableAnim.interpolate({
        inputRange: [0, 0.2, 0.8, 1],
        outputRange: [1.0, 0.8, 1.2, 1.0],
      })
    }

    return (
      <View style={styles.viewContainer}>
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>RESTAURANT</Text>
          <View style={styles.icBack} />
        </View>

        {/* Tab indicator */}
        <View style={styles.tabIndicator}>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_home} />
            <Text style={styles.textTabIndicator}>Dashboard</Text>
          </View>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_menu} />
            <Text style={styles.textTabIndicator}>Menus</Text>
          </View>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_seat} />
            <Text style={styles.textTabIndicator}>Seats</Text>
          </View>
        </View>

        <Animated.View style={{ marginTop: this.dropDownBodyAnim, opacity: this.fadeInBodyanim }}>
          {/* Text "Entrance" */}
          <Animated.View
            style={{
              opacity: this.fadeOutTextEntranceAnim,
            }}
          >
            <View style={styles.viewWrapTextEntrance}>
              <Text style={styles.textEntrance}>ENTRANCE</Text>
            </View>
          </Animated.View>

          <View style={styles.viewWrapTable}>
            {/* Table in row 1 */}
            <View style={styles.viewWrapTableRow1}>
              {/* Table 1 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(1)}>
                <Animated.View
                  style={{
                    transform: [{ scale: this.state.whichTable == 1 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0 }],
                    opacity: this.state.whichTable == 1 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgBigTable, { tintColor: this.state.whichTable == 1 ? '#7DD5AF' : null }]}
                        source={images.table_big_green}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextBigTable}>
                        <Text
                          style={[styles.textNumber, { color: this.state.whichTable == 1 ? '#ffffff' : '#000000' }]}
                        >
                          01
                        </Text>
                        <Text
                          style={[styles.textStatus, { color: this.state.whichTable == 1 ? '#ffffff' : '#000000' }]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 2 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(2)}>
                <Animated.View
                  style={{
                    transform: [{ scale: this.state.whichTable == 2 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0 }],
                    opacity: this.state.whichTable == 2 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgBigTable, { tintColor: this.state.whichTable == 2 ? '#F8859B' : null }]}
                        source={images.table_big_pink}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextBigTable}>
                        <Text
                          style={[styles.textNumber, { color: this.state.whichTable == 2 ? '#ffffff' : '#000000' }]}
                        >
                          02
                        </Text>
                        <Text
                          style={[styles.textStatus, { color: this.state.whichTable == 2 ? '#ffffff' : '#000000' }]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
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
                    transform: [{ scale: this.state.whichTable == 3 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0 }],
                    opacity: this.state.whichTable == 3 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgSmallTable, { tintColor: this.state.whichTable == 3 ? '#FBDB75' : null }]}
                        source={images.table_small_yellow}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextSmallTable}>
                        <Text
                          style={[styles.textNumber, { color: this.state.whichTable == 3 ? '#ffffff' : '#000000' }]}
                        >
                          03
                        </Text>
                        <Text
                          style={[styles.textStatus, { color: this.state.whichTable == 3 ? '#ffffff' : '#000000' }]}
                        >
                          TAKEN
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 4 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(4)}>
                <Animated.View
                  style={{
                    transform: [{ scale: this.state.whichTable == 4 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0 }],
                    opacity: this.state.whichTable == 4 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgSmallTable, { tintColor: this.state.whichTable == 4 ? '#7DD5AF' : null }]}
                        source={images.table_small_green}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextSmallTable}>
                        <Text
                          style={[styles.textNumber, { color: this.state.whichTable == 4 ? '#ffffff' : '#000000' }]}
                        >
                          04
                        </Text>
                        <Text
                          style={[styles.textStatus, { color: this.state.whichTable == 4 ? '#ffffff' : '#000000' }]}
                        >
                          WAIT
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 5 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(5)}>
                <Animated.View
                  style={{
                    transform: [{ scale: this.state.whichTable == 5 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0 }],
                    opacity: this.state.whichTable == 5 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgSmallTable, { tintColor: this.state.whichTable == 5 ? '#FBDB75' : null }]}
                        source={images.table_small_yellow}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextSmallTable}>
                        <Text
                          style={[styles.textNumber, { color: this.state.whichTable == 5 ? '#ffffff' : '#000000' }]}
                        >
                          05
                        </Text>
                        <Text
                          style={[styles.textStatus, { color: this.state.whichTable == 5 ? '#ffffff' : '#000000' }]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
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
                    transform: [{ scale: this.state.whichTable == 6 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0 }],
                    opacity: this.state.whichTable == 6 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                    </View>

                    {/* Table */}
                    <View>
                      <Image
                        style={[styles.imgBigTable, { tintColor: this.state.whichTable == 6 ? '#F8859B' : null }]}
                        source={images.table_big_pink}
                        resizeMode="contain"
                      />
                      <View style={styles.viewWrapTextBigTable}>
                        <Text
                          style={[styles.textNumber, { color: this.state.whichTable == 6 ? '#ffffff' : '#000000' }]}
                        >
                          06
                        </Text>
                        <Text
                          style={[styles.textStatus, { color: this.state.whichTable == 6 ? '#ffffff' : '#000000' }]}
                        >
                          TAKEN
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {/* Table 7 */}
              <TouchableWithoutFeedback onPress={() => this.onTablePress(7)}>
                <Animated.View
                  style={{
                    transform: [{ scale: this.state.whichTable == 7 ? (scaleZoomTable ? scaleZoomTable : 1.0) : 1.0 }],
                    opacity: this.state.whichTable == 7 ? 1.0 : this.fadeOutTableAnim,
                  }}
                >
                  <View>
                    {/* Top chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                      <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                    </View>

                    {/* Table */}
                    <View>
                      <Image style={[styles.imgBigTable,{ tintColor: this.state.whichTable == 7 ? '#7DD5AF' : null }]} source={images.table_big_green} resizeMode="contain" />
                      <View style={styles.viewWrapTextBigTable}>
                        <Text
                          style={[styles.textNumber, { color: this.state.whichTable == 7 ? '#ffffff' : '#000000' }]}
                        >
                          07
                        </Text>
                        <Text
                          style={[styles.textStatus, { color: this.state.whichTable == 7 ? '#ffffff' : '#000000' }]}
                        >
                          AVAILABLE
                        </Text>
                      </View>
                    </View>

                    {/* Bottom chair */}
                    <View style={styles.viewWrapTwoTopChair}>
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                      <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Animated.View>
      </View>
    )
  }
}
