const React = require('react-native');
import colors from './colors'

import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor:colors.white
  },
  linkContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    flex:1
  },
  ratingsContainer:{
    flexDirection:'row'
  },
  text: {
    color:colors.white,
    fontFamily:'FibonSans-Regular'
  },
  image: {
    flex:0,
    height: 300,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  navItem:{
    flex:0,
    position:'absolute',
    top:5,
    padding:10,
    right:5
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 20,
    color: '#656565',
    textAlign: 'center',
    flex:0,
    fontFamily:'FibonSans-Bold'
  },
  description: {
    fontSize: 16,
    color: '#656565',
    textAlign: 'center',
    margin:20,
    justifyContent:'center',
    fontFamily:'FibonSans-Regular',
    flex:1
  },
  author: {
    fontSize: 15,
    paddingTop: 0,
    paddingBottom: 15,
    color: '#656565',
    textAlign: 'center',
    fontStyle:'italic',
    justifyContent:'flex-start',
    backgroundColor:'transparent',
    flex:1
  },
  subtitle:{
    fontSize: 20,
    margin: 5,
    color: colors.sky,
    textAlign: 'center',
    padding:10,
    justifyContent:'flex-start',
    flex:1
  },
  tel: {
    height: 45,
    flex:1,
    backgroundColor: colors.turq,
  },
  ratings:{
    height: 30,
    flex:1,
    justifyContent: 'space-around',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:2,
    borderColor:'transparent',
    borderRightColor:colors.lightGray
  },
  priceRating:{
    height: 30,
    flex:1,
    justifyContent: 'space-around',
    flexDirection:'row',
    alignItems:'center',
  },
  slide: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  directions: {
    height: 45,
    flex:1,
    justifyContent: 'space-around',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: colors.sky,
  },
  multipleContainer: {
    flex:1,
    justifyContent: 'space-around',
    flexDirection:'row',
    alignItems:'center',
  },
  multipleIcons:{
    flexDirection: 'row',
    width:100,
    margin:20,
    justifyContent: 'space-around'
  },
  detailsRow:{
    flex:0
  },
  swiper:{
    paddingTop:5,
    marginTop:5
  },
  next: {
    height: 45,
    flex:0,
    lineHeight:45,
    backgroundColor: colors.turq,
    textAlign: 'center',
  },

  loader: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
    backgroundColor: colors.black,
    opacity:0.5,
  },
  distance: {
    textAlign:'center',
    flex:1,
    lineHeight: 22,
    fontSize:12,
    color:colors.carrot,
    alignSelf: 'stretch',
    fontFamily:'FibonSans-ExtraBold'
  },
  openStatus: {
    textAlign:'center',
    flex:1,
    lineHeight: 22,
    fontSize:12,
    color:colors.darkTurq,
    fontWeight:'bold',
    alignSelf: 'stretch',
    fontFamily:'FibonSans-ExtraBold'
  },
  closedStatus: {
    textAlign:'center',
    flex:1,
    lineHeight: 22,
    fontSize:12,
    color:colors.red,
    fontWeight:'bold',
    alignSelf: 'stretch',
    fontFamily:'FibonSans-ExtraBold'
  },
  leftQuote: {
    width:25,
    height:25,
    left:7,
    top:3,
    position:'absolute'
  },
  rightQuote: {
    width:25,
    height:25,
    right:7,
    bottom:0,
    position:'absolute'
  },
  slideRow: {
    flex:1,
  },
  slideRowMain: {
    flex:3.7,
  },
  authorImage: {
    width:50,
    height:50,
    flex:0
  },
});

export {styles as default}
