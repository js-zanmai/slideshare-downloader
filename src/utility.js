import crypto from 'crypto';

export default class Utility {

  static sha1(data) {
    const generator = crypto.createHash('sha1').update(data).digest('hex');
    return generator;
  }
  
  static getParams(secret) {
    const unixTimeStamp = Math.round(new Date().getTime() / 1000);
    const currentHash = this.sha1(secret + unixTimeStamp);
    return {
      ts: unixTimeStamp,
      hash: currentHash
    };
  }
}