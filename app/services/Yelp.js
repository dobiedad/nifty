import YelpApi from 'v3-yelp-api';
import credentials from './credentials';

const yelp = new YelpApi(credentials)

export { yelp as default }
