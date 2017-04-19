const React = require('react-native');
import colors from './colors'

import {
  StyleSheet
} from 'react-native';


const modalStyles =  StyleSheet.create({

  wrapper: {
    paddingTop: 0,
    flex: 1,
    zIndex:10,
    backgroundColor:'white'
  },

  placeholder:{
    fontFamily:'FibonSans-ExtraLight',
  },

  textInput: {
    height: 40,
    borderColor: colors.turq,
    backgroundColor: 'white',
    borderWidth: 1,
    color:colors.sky,
    padding:10,
    borderRadius:5,
    alignSelf: 'stretch',
    fontFamily:'FibonSans-Regular',
    flex:0.5
  },

  btn: {
    margin: 10,
    backgroundColor: colors.turq,
    color: "white",
    flex:0,
    flexDirection:'row',
    padding: 10,
    fontFamily:'FibonSans-Regular'
  },

  border: {
    margin: 10,
    backgroundColor: colors.lightGray,
    position: 'absolute', top: 55, left: 0, right: 0,height:2, justifyContent: 'center', alignItems: 'center',zIndex:1,
  },

  title: {
    fontSize: 18,
    margin: 25,
    margin: 30,
    color: '#656565',
    textAlign: 'center',
    flex:0,
    fontFamily:'FibonSans-ExtraBold'
  },

  sliderValue: {
    fontSize:22,
    padding:5,
    textAlign:'center',color:colors.turq,
    fontFamily:'FibonSans-ExtraBold'
  },

  modal: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },

  modalContainer: {
   justifyContent: 'center',
   alignItems: 'center'
  },

  track: {
    height: 18,
    borderRadius: 1,
    backgroundColor: '#d5d8e8',
  },

  thumb: {
    width: 20,
    height: 30,
    borderRadius: 1,
    top:32,
    backgroundColor: colors.turq,
  }
});

export {modalStyles as default}
