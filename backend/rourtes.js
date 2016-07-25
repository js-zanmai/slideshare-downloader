import Router from 'express';
import SlideShare from './slideshare';
import config from '../config';

const router = Router();
const slideShare = new SlideShare(config.apiKey, config.sharedSecret);

// TODO define REST API routes

router.get('/', (request, response) => {
  response.redirect( '/index.html' );
});

router.get('/slides/:keyword', (request, response, next) => {
  slideShare.searchSlideshows(request.params.keyword)
    .then(function (result) {
      console.log(result);
      response.send(result);
    })
    .catch(function (error) {
      console.log(error);
      // TODO: エラー発生時のJSONフォーマットを検討する。
    });
});

export default router;