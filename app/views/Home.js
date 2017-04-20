import React , { Component } from 'react'
import Communications from 'react-native-communications';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-spinkit';
import styles from '../styles/main'
import colors from '../styles/colors'
import Yelp from '../services/Yelp';
import MapUrl from '../services/MapUrl';
import Settings from './Settings'
import StatusBarAlert from 'react-native-statusbar-alert'

const yelpService = new Yelp()

import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  StatusBar,
  TouchableHighlight,
  Linking,
  Image
} from 'react-native';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results:[],
      currentBusiness:{},
      bannerOptions:{},
      distance:0.6,
      term:'',
      openSettings:false,
      os:props.os
    }
  }

  componentDidMount() {
    return this.loadData.call(this)
  }


  render() {
    return this.renderMain.call(this)
  }

  loadData() {
    this.setState({loading:true})
    return this.getLocation.call(this)
      .then((location) => yelpService.fetchData.call(this))
      .then((businesses) => {this.setState({results: businesses})})
      .then(() => this.loadRandomRestaurant.call(this))
      .catch(err => { this.setState({error: true,bannerOptions:{title:"Oops, something went wrong",color:colors.red}}) ; console.log(err)})
  }

  renderMain() {
    return (
      <View style={styles.body}>
      {this.state.os =='android' ? <StatusBar hidden={true} /> : undefined}
      {this.renderBanner.call(this,this.state.bannerOptions)}
        <View>
          <Text style={styles.title}>{this.state.currentBusiness.name ? this.state.currentBusiness.name : 'nifty'}</Text>
          <Text style={styles.navItem} onPress={()=>this.setState({openSettings:!this.state.openSettings})}>
            <Icon style={styles.multipleIcons,{color:colors.turq}}name={'gears'} size={25} />
          </Text>
        </View>
        <View style={{flex:1}}>
            <ScrollView style={styles.scrollView}>
            { this.state.currentBusiness.name ?
                <View>
                <Image style={styles.image} source={this.state.currentBusiness.image ? { uri:  this.state.currentBusiness.image } : require('../../Resources/no-image.jpg')} style={styles.image} />
                {this.renderRatingsContainer.call(this)}
                  <View style={styles.linkContainer}>
                    <TouchableHighlight underlayColor={colors.darkTurq} style={styles.tel} onPress={() => Communications.phonecall("+442077220011", true)}><View style={styles.linkContainer}>{this.getMultipleIcons(1,'phone','white',20)}</View></TouchableHighlight>
                    <TouchableHighlight underlayColor={colors.darkSky} style={styles.directions} onPress={() => {
                      let url = new MapUrl(this.state.currentBusiness.mapObject).android()
                      if(this.state.os =='ios'){url = new MapUrl(this.state.currentBusiness.mapObject).apple()}
                      return Linking.openURL(url)
                    }} >
                      {this.getMultipleIcons(1,'map-marker','white',20)}
                    </TouchableHighlight>
                  </View>
                  {this.renderReviews.call(this)}
                </View>
              : undefined
            }
              </ScrollView>
              {this.showSpinner.call(this)}
          </View>
          <Text style={styles.next} onPress={() => {this.loadRandomRestaurant.call(this)}}underlayColor='#99d9f4'>
            <Text style={styles.text} > <Icon style={styles.multipleIcons,{color:colors.white}}name={'chevron-right'} size={20} /></Text>
          </Text>
          <Settings term={this.state.term} onClose={this.onModalClose.bind(this)} distance={this.state.distance} isOpen={this.state.openSettings}></Settings>
      </View>
    );
  }

  renderBanner(options) {
    return (
      <StatusBarAlert
        visible={this.state.error || this.state.results.length == 0 && this.state.noResults}
        message={options.title}
        backgroundColor={options.color}
        color="white"
        onPress={() => this.setState({openSettings: true, error:false, noResults:false,})}
      />
    )
  }

  renderRatingsContainer() {
    return (
      <View style={styles.ratingsContainer}>
        <View style={styles.ratings}>
          <View style={styles.detailsRow,{width:10 * Math.ceil(this.state.currentBusiness.rating) }}>
            {this.getMultipleIcons(this.state.currentBusiness.rating,'star','turq',10)}
          </View>
        </View>
        <View style={styles.ratings}>
          <View style={styles.detailsRow,{width:10 * Math.ceil(this.state.currentBusiness.rating) }}>
            <Text style={styles.distance}>
            {this.state.currentBusiness.distance} km
            </Text>
          </View>
        </View>
        <View style={styles.ratings}>
          <View style={styles.detailsRow,{width:10 * Math.ceil(this.state.currentBusiness.rating) }}>
            <Text style={this.state.currentBusiness.isClosed ? styles.closedStatus :styles.openStatus}>
            {this.state.currentBusiness.isClosed ? 'Closed' : 'Open'}
            </Text>
          </View>
        </View>
        <View style={styles.priceRating}>
          <View style={styles.detailsRow,{width:10 * this.state.currentBusiness.price}}>
            {this.getMultipleIcons(this.state.currentBusiness.price,'dollar','sky',10)}
          </View>
        </View>
      </View>
    )
  }

  renderReviews(){
    return (
        this.state.currentBusiness.reviews?
        <View>
          <Swiper style={styles.swiper} activeDotColor={colors.turq} showsButtons={false} height={270}>{
            this.state.currentBusiness.reviews.map((review,i) => {
               return (<View key={review.name + i}style={styles.slide}>
                 <View style={styles.slideRowMain}>
                   <Image source={require('../../Resources/left-quote.png')} style={styles.leftQuote} />
                   <Text style={styles.description}>{review.text}</Text>
                   <Image source={require('../../Resources/right-quote.png')} style={styles.rightQuote} />
                 </View>
                 {this.getMultipleIcons(review.rating,'star','sky',20)}
                 <Text style={styles.author}>{review.user.name}</Text>
                 <View style={styles.slideRow}></View>
               </View>)
            }) }
          </Swiper>
        </View>
        : !this.state.loading ? (<Text style={styles.subtitle}> No reviews :(</Text>) : undefined
    )
  }

  onModalClose(props) {
    this.setState({openSettings:false,term:props.term,distance:props.distance})
    return this.loadData.call(this)
  }

  getMultipleIcons(n,icon,color,size) {
    n = Math.ceil(n)
    var arrayWithNLength = Array(n).join(".").split(".");
    return ( <View style={styles.multipleContainer}>
      {arrayWithNLength.map(function(e,i){
       return(
         <Icon key={n+icon+colors+i} style={styles.multipleIcons,{color:colors[color]}}name={icon} size={size} />
       );
     })}
    </View>)
  }

  showSpinner() {
    return (
      this.state.loading ?
        <View style={styles.loader}>
          <Spinner color={colors.turq} isVisible={this.state.loading} size={30} type={'Wave'}/>
        </View>
      : undefined
    )
  }

  loadRandomRestaurant() {
    this.setState({loading:true})
    if(this.state.results.length ==0){if(!this.state.error){this.setState({bannerOptions:{title:"No Results :( try changing your settings",color:colors.turq}})}return}

    delete(this.state.currentBusiness)

    let last = this.state.results.shift()
    this.state.results.push(last)

    console.log(this.state.results[0].image);

    this.setState({currentBusiness:this.state.results[0],noResults:false,error:false})
    return yelpService.reviews(this.state.results[0].id)
      .then(res => {
        this.state.currentBusiness.reviews = res.reviews
        this.state.results[0].reviews = res.reviews
        this.setState({loading:false})
        return this.setState({currentBusiness:this.state.results[0]})
      })
      .catch(err => {this.setState({loading:false}) ;console.log(err)})
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, undefined);
    })
    .then(location => {
        let loc = location.coords.latitude + ',' + location.coords.longitude;
        this.setState({location:loc})
        return loc
    })
    .catch(error => error.message)
  }
}


export { Home as default }
