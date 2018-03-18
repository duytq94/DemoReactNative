import React, { Component } from 'react'
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import styles from './Fetch.Style'
import images from '../../Themes/Images'

import { connect } from 'react-redux'
import { FetchAction } from './Fetch.Action'

class FetchScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
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
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>FETCH API</Text>
          <View style={styles.icBack} />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => {
              this.props.getDataLocal(FetchAction.localRequest('hello'))
            }}
          >
            <Text style={styles.textButton}>Get data local</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => {
              this.props.getUser(FetchAction.userRequest('duy'))
            }}
          >
            <Text style={styles.textButton}>Fetch user</Text>
          </TouchableOpacity>

          <ScrollView style={styles.viewContent}>
            {this.props.isFetching ? (
              <ActivityIndicator size="large" />
            ) : (
              <View>
                <Text>Data: {this.props.data}</Text>
                {this.props.error ? <Text>Has error</Text> : null}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    )
  }
}

// this state from redux, not state of this component
function mapStateToProps(state) {
  return {
    isFetching: state.fetch.isFetching,
    data: state.fetch.data,
    error: state.fetch.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDataLocal: request => dispatch(request),
    getUser: request => dispatch(request)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchScreen)
