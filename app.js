import express from 'express';
import router from './backend/rourtes';

const app = express();

app.use(express.static( __dirname + '/frontend'));
app.use('/', router);

app.listen(3000, () => {
  console.log('slideshare downloader app listening on port 3000!');
});