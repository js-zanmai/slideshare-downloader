// TODO define REST API routes

import config from '../config';
import SlideShare from './slideshare';

const slideShare = new SlideShare(config.apiKey, config.sharedSecret);

slideShare.searchSlideshows('es6');