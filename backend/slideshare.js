import axios from 'axios';
import util from './utility';

const baseUrl = 'https://www.slideshare.net/api/2/';

export default class SlideShare {

  constructor(apiKey, secret) {
    this.apiKey = apiKey;
    this.secret = secret;
    this.locae = 'ja';
  }
  
  searchSlideshows(query, opts) {
    const params = util.getParams(this.apiKey, this.secret);
    params.q = query;
    if(opts != null) {
      params.detailed = opts.detailed;
      params.page = opts.page;
      params.items_per_page = opts.items_per_page;
      params.lang = opts.lang;
      params.data.sort = opts.sort;
      params.upload_date = opts.upload_date;
      params.what = opts.what;
      params.download = opts.download;
      params.fileformat = opts.fileformat;
      params.file_type = opts.file_type;
      params.cc = opts.cc;
      params.cc_adapt = opts.cc_adapt;
      params.cc_commercial = opts.cc_commercial;
    }
    
    axios.get(baseUrl + 'search_slideshows', { params: params })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}