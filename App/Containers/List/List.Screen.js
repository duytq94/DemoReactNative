import React, {Component} from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  BackHandler,
  TouchableOpacity,
  RefreshControl,
  Linking
} from 'react-native'

import {connect} from 'react-redux'
import {ListAction} from './List.Action'

import styles from './List.Style'
import images from '../../Themes/Images'

export class ListScreen extends Component {
  renderItem({item}) {
    return (
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.link)
        }}
      >
        <View style={styles.viewWrapItem}>
          <Image
            source={{uri: item.owner.profile_image}}
            style={{borderRadius: 20, margin: 10, width: 40, height: 40}}
          />
          <View style={{flex: 5}}>
            <Text style={{color: '#f5a623'}}>{item.title}</Text>
            <Text>{item.link}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  refreshList() {
    this.props.getList(ListAction.site('stackoverflow'))
  }

  constructor(props) {
    super(props)
    this.backPress = this.handleBackPress.bind(this)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPress)
    this.props.getList(ListAction.site('stackoverflow'))
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPress)
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
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>LIST</Text>
          <View style={styles.icBack}/>
        </View>

        <View style={styles.viewContainer}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.props.isFetching}
                onRefresh={this.refreshList.bind(this)}
                colors={['red']}
              />
            }
            style={{backgroundColor: '#f5f5f5'}}
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  if (state.list.data) {
    return {
      isFetching: state.list.isFetching,
      data: state.list.data.items,
      error: state.list.error
    }
  } else {
    return {
      isFetching: state.list.isFetching,
      data: [],
      error: state.list.error
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: request => dispatch(request)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)
