import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  BackHandler,
  TextInput,
  TouchableOpacity,
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
  }

  componentDidMount() {
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

  render() {
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
          <View style={styles.viewWrapTextEntrance}>
            <Text style={styles.textEntrance}>ENTRANCE</Text>
          </View>

          <View style={styles.viewWrapTable}>
            {/* Table in row 1 */}
            <View style={styles.viewWrapTableRow1}>
              {/* Table 1 */}
              <View>
                {/* Top chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                </View>

                {/* Table */}
                <View>
                  <Image style={styles.imgBigTable} source={images.table_big_green} resizeMode="contain" />
                  <View style={styles.viewWrapTextBigTable}>
                    <Text style={styles.textNumber}>01</Text>
                    <Text style={styles.textStatus}>AVAILABLE</Text>
                  </View>
                </View>

                {/* Bottom chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                </View>
              </View>

              {/* Table 2 */}
              <View>
                {/* Top chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                </View>

                {/* Table */}
                <View>
                  <Image style={styles.imgBigTable} source={images.table_big_pink} resizeMode="contain" />
                  <View style={styles.viewWrapTextBigTable}>
                    <Text style={styles.textNumber}>01</Text>
                    <Text style={styles.textStatus}>AVAILABLE</Text>
                  </View>
                </View>

                {/* Bottom chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                </View>
              </View>
            </View>

            {/* Table in row 2 */}
            <View style={styles.viewWrapTableRow1}>
              {/* Table 3 */}
              <View>
                {/* Top chair */}
                <View style={styles.viewWrapTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                </View>

                {/* Table */}
                <View>
                  <Image style={styles.imgSmallTable} source={images.table_small_yellow} resizeMode="contain" />
                  <View style={styles.viewWrapTextSmallTable}>
                    <Text style={styles.textNumber}>01</Text>
                    <Text style={styles.textStatus}>AVAILABLE</Text>
                  </View>
                </View>

                {/* Bottom chair */}
                <View style={styles.viewWrapTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                </View>
              </View>

              {/* Table 4 */}
              <View>
                {/* Top chair */}
                <View style={styles.viewWrapTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                </View>

                {/* Table */}
                <View>
                  <Image style={styles.imgSmallTable} source={images.table_small_green} resizeMode="contain" />
                  <View style={styles.viewWrapTextSmallTable}>
                    <Text style={styles.textNumber}>01</Text>
                    <Text style={styles.textStatus}>AVAILABLE</Text>
                  </View>
                </View>

                {/* Bottom chair */}
                <View style={styles.viewWrapTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                </View>
              </View>

              {/* Table 5 */}
              <View>
                {/* Top chair */}
                <View style={styles.viewWrapTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                </View>

                {/* Table */}
                <View>
                  <Image style={styles.imgSmallTable} source={images.table_small_yellow} resizeMode="contain" />
                  <View style={styles.viewWrapTextSmallTable}>
                    <Text style={styles.textNumber}>01</Text>
                    <Text style={styles.textStatus}>AVAILABLE</Text>
                  </View>
                </View>

                {/* Bottom chair */}
                <View style={styles.viewWrapTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                </View>
              </View>
            </View>

            {/* Table in row 3 */}
            <View style={styles.viewWrapTableRow1}>
              {/* Table 6 */}
              <View>
                {/* Top chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                </View>

                {/* Table */}
                <View>
                  <Image style={styles.imgBigTable} source={images.table_big_pink} resizeMode="contain" />
                  <View style={styles.viewWrapTextBigTable}>
                    <Text style={styles.textNumber}>01</Text>
                    <Text style={styles.textStatus}>AVAILABLE</Text>
                  </View>
                </View>

                {/* Bottom chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                </View>
              </View>

              {/* Table 7 */}
              <View>
                {/* Top chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                  <Image resizeMode="contain" style={styles.imgChairTop} source={images.chair_top} />
                </View>

                {/* Table */}
                <View>
                  <Image style={styles.imgBigTable} source={images.table_big_green} resizeMode="contain" />
                  <View style={styles.viewWrapTextBigTable}>
                    <Text style={styles.textNumber}>01</Text>
                    <Text style={styles.textStatus}>AVAILABLE</Text>
                  </View>
                </View>

                {/* Bottom chair */}
                <View style={styles.viewWrapTwoTopChair}>
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                  <Image resizeMode="contain" style={styles.imgChairBottom} source={images.chair_bottom} />
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    )
  }
}
