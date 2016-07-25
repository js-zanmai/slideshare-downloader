import axios from 'axios';
import crypto from 'crypto';

const baseUrl = 'https://www.slideshare.net/api/2/';

export default class SlideShare {

  constructor(apiKey, secret) {
    this.apiKey = apiKey;
    this.secret = secret;
  }

  sha1(data) {
    return crypto.createHash('sha1').update(data).digest('hex');
  }
  
  getParams(apiKey, secret) {
    const unixTimeStamp = Math.round(new Date().getTime() / 1000);
    const currentHash = this.sha1(secret + unixTimeStamp);
    return {
      api_key: apiKey,
      ts: unixTimeStamp,
      hash: currentHash
    };
  }
  
  searchSlideshows(query, opts) {
    const params = this.getParams(this.apiKey, this.secret);

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
      params.lang = opts.lang;
    }
    
    return axios.get(baseUrl + 'search_slideshows', { params: params })
      .then(function (response) {
        // TODO: XMLから適当なJSONに変換してからクライアントに返す。
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}