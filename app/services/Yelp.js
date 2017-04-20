import YelpApi from 'v3-yelp-api';
import credentials from './credentials';
import Business from '../models/Business'

const api = new YelpApi(credentials)

class Yelp {

  fetchData() {
        const sorts = ['review_count','best_match','distance']
        const sortBy = parseInt(Math.random()*(sorts.length));
        const params = {
          term: this.state.term.length > 0 ? this.state.term.toLowerCase().trim() : 'lunch',
          price: (Math.floor(Math.random() * 2) + 3).toString(),
          limit: 50,
          radius:Math.floor(this.state.distance * 10000),
          sort_by:sorts[sortBy],
          location:this.state.location
        }
      return api.search(params)
      .then(data => {console.log(returnArrayOfBusinesses(data.businesses)); return returnArrayOfBusinesses(data.businesses)})
  }

  reviews(options) {
    return api.reviews(options)
  }
}

function returnArrayOfBusinesses(array){
  console.log('data before turing to array ', array);
  return array.map((business) => {
    return new Business(business)
  })
}

export { Yelp as default }
