import React, { Component } from 'react'
import { View, Text, BackHandler, Image, StatusBar, StyleSheet, ScrollView, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'
import Permissions from 'react-native-permissions'

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    backPress = this.handleBackPress.bind(this);

    Permissions.request('storage', {
      rationale: {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
      },
    }).then(response => {
      this.setState({ storagePermission: response })
    })

    // Permissions.check('readSms').then(response => {
    //     // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
    //     this.setState({ smsPermission: response })
    // })
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", backPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", backPress);
    console.log('duy log storage', this.state.storagePermission);
    // console.log('duy log sms', this.state.smsPermission);        
  }

  handleBackPress() {
    this.props.navigation.goBack();
    return true;
  }

  render() {
    return (

      <Container style={{ backgroundColor: 'white' }}>

        <Header style={{ height: 48 }} backgroundColor='#ee613a'>
          <Left>
            <Button transparent light
              style={{ width: 50, height: 50 }}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={styles.titleButton}>
              EDIT PROFILE
                        </Text>
          </Body>
        </Header>

        <StatusBar backgroundColor='#ee613a' />

        <Content>
          <KeyboardAvoidingView
            behavior='padding'
          >

            <View style={{ position: 'absolute', width: Dimensions.get('window').width, height: 173, backgroundColor: 'black' }}>
              <Image
                resizeMode='cover'
                source={require('../../../assets/bg_signin.png')}
                style={{ position: 'absolute', opacity: 0.4, width: Dimensions.get('window').width, height: 173 }} />

              <View style={{
                marginTop: 10, marginRight: 10, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center',
                width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}>
                <Icon style={{ position: 'absolute', color: 'white' }} name='camera' />
                <Button transparent
                  style={{ width: 50, height: 50 }}
                  onPress={() => {

                  }}
                />
              </View>

            </View>

            <Image
              style={{ marginTop: 120, alignSelf: 'center', width: 100, height: 100, borderRadius: 100 / 2 }}
              source={require('../../../assets/ic_avatar.png')}
            />

            <View
              style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 120, alignSelf: 'center', width: 100, height: 100, borderRadius: 100 / 2 }}
            >
              <Icon style={{ color: 'white' }} name='camera' />
            </View>

            <View style={styles.itemInput}>
              <Text style={styles.titleInput} >Username</Text>
              <TextInput style={styles.textInput} underlineColorAndroid='#aeaeae' placeholder='Harry King' placeholderTextColor='#aeaeae'
                returnKeyType='next' onSubmitEditing={() => {
                  this.refs.username.focus();
                }} />
            </View>

            <View style={styles.itemInput}>
              <Text style={styles.titleInput} >Country</Text>
              <TextInput style={styles.textInput} underlineColorAndroid='#aeaeae' placeholder='Singapore' placeholderTextColor='#aeaeae'
                returnKeyType='next' onSubmitEditing={() => {
                  this.refs.username.focus();
                }} />
            </View>

            <View style={styles.itemInput}>
              <Text style={styles.titleInput} >Address</Text>
              <TextInput style={styles.textInput} underlineColorAndroid='#aeaeae' placeholder='4 Leng Kee Road, Singapore' placeholderTextColor='#aeaeae'
                returnKeyType='next' onSubmitEditing={() => {
                  this.refs.username.focus();
                }} />
            </View>

            <View style={styles.itemInput}>
              <Text style={styles.titleInput} >Aboute me</Text>
              <TextInput style={styles.textInput} underlineColorAndroid='#aeaeae' placeholder='Fun'
                placeholderTextColor='#aeaeae' multiline={true}
                returnKeyType='next' onSubmitEditing={() => {
                  this.refs.username.focus();
                }} />
            </View>

          </KeyboardAvoidingView>

        </Content>

        <Button full style={{
          backgroundColor: '#e86d4b',
          borderColor: '#e86d4b',
          alignSelf: 'flex-end',
          bottom: 0,
          width: Dimensions.get('window').width,
          height: 50
        }}>
          <Text style={styles.titleButton}>DONE</Text>
        </Button>

      </Container >
    )
  }
}

const styles = StyleSheet.create({
  itemInput: {
    marginTop: 20,
    marginLeft: 30,
    borderColor: '#aeaeae',
    marginRight: 30,

  },
  titleInput: {
    color: '#959595',
    fontFamily: 'SFUIText-Bold',
    fontSize: 13,

  },
  textInput: {
    color: '#3b3b3b',
    fontFamily: 'SFUIText-Bold',
    fontSize: 16,
    flex: 1,
  },
  titleButton: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 17,
    color: 'white',
  }
})