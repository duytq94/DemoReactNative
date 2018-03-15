import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  BackHandler,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  Linking
} from "react-native";
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Button,
  Left,
  Right,
  Icon
} from "native-base";

import { connect } from "react-redux";
import { ListAction } from "./List.Action";

import styles from "./List.Style";
import images from "../../Themes/Images";

export class ListScreen extends Component {
  itemFlatList({ item }) {
    return (
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.link);
        }}
      >
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Image
            source={{ uri: item.owner.profile_image }}
            style={{ borderRadius: 20, margin: 10, width: 40, height: 40 }}
          />
          <View style={{ flex: 5 }}>
            <Text style={{ color: "#f5a623" }}>{item.title}</Text>
            <Text>{item.link}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  refreshList() {
    this.props.getList(ListAction.site("stackoverflow"));
  }

  constructor(props) {
    super(props);
    backPress = this.handleBackPress.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", backPress);
    this.props.getList(ListAction.site("stackoverflow"));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", backPress);
  }

  handleBackPress() {
    this.props.navigation.goBack();
    return true;
  }

  render() {
    return (
      <View>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>LIST</Text>
          <View style={styles.icBack} />
        </View>

        <View style={{ backgroundColor: "#9999AA" }}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.props.isFetching}
                onRefresh={this.refreshList.bind(this)}
                colors={["red"]}
              />
            }
            style={{ backgroundColor: "#f5f5f5" }}
            data={this.props.data}
            renderItem={this.itemFlatList}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  if (state.list.data) {
    return {
      isFetching: state.list.isFetching,
      data: state.list.data.items,
      error: state.list.error
    };
  } else {
    return {
      isFetching: state.list.isFetching,
      data: [],
      error: state.list.error
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: request => dispatch(request)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
