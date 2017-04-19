import React from 'react';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import Slider from 'react-native-slider';
import colors from '../styles/colors'
import modalStyles from '../styles/modalStyles'

import {
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
      onClose: props.onClose,
      distance:props.distance,
      term:props.term,
   };
  }

  componentWillReceiveProps(props) {
    this.setState({
      isOpen: props.isOpen,
      distance:props.distance,
      term:props.term ? props.term : '',
    })
  }

  render() {
    return this.renderModal()
  }

  showModal () {
    return this.refs.modal.open()
  }

  renderModal() {
    return (<Modal
        style={[modalStyles.modal]}
        ref={"modal"}
        isOpen={this.state.isOpen}
        swipeToClose={true}
        onClosed={this.state.onClose.bind(this,this.state)}
        onOpened={this.onOpen}
        onClosingState={this.onClosingState}>
        <View style={modalStyles.border}></View>
        <View>
          <Text style={modalStyles.title}>{'What are you looking for?'}</Text>
          <View style={modalStyles.wrapper}>
            <View style={{flexDirection: 'column', height: 80, padding: 20}}>
              <TextInput placeholderStyle={modalStyles.placeholder} onChangeText={(text)=>this.setState({term:text })} value={this.state.term} placeholder="eg: food , lunch .." style={modalStyles.textInput} />
            </View>
            <View style={{flexDirection: 'column', height: 120, padding: 20}}>
              <Text style={{flex: 0.3},modalStyles.sliderValue}>{(this.state.distance * 10).toFixed(2)} km</Text>
              <Slider style={{flex: 0.4}}  minimumTrackTintColor={colors.sky}  trackStyle={modalStyles.track}thumbStyle={modalStyles.thumb} value={this.state.distance} onValueChange={(value) => this.setState({distance:value})} />
            </View>
            <View style={{flexDirection: 'column', height: 100, padding: 0}}>
              <Button onPress={() => this.state.onClose.call(this,this.state)} style={modalStyles.btn}>Search</Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export{ Settings as default }
