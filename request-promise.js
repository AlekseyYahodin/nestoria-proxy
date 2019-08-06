const request = require('request');

module.exports = async (options) => {
  return new Promise((resolve, reject) => {
    request(options, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}
