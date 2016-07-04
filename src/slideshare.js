import axios from 'axios';
import util from './utility';

const baseUrl = 'https://www.slideshare.net/api/2/';

export default class SlideShare {

  constructor(apiKey, secret) {
    this.apiKey = apiKey;
    this.secret = secret;
    this.locae = 'ja';
  }
  
  searchSlideshows(query) {
    const params = util.getParams(this.secret);
    const url = baseUrl + 'search_slideshows' + '?api_key=' + this.apiKey + '&ts=' + params.ts + '&hash=' + params.hash +
    '&q=' + query + '&lang=' + this.locae +'&page=' + '10';
    
    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}